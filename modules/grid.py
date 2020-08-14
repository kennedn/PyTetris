from modules.block import Block
import random
from modules.globals import *
from modules.polyfill import clamp
from time import sleep


#########################################################
# draws game grid and updates in-flight tetromino
# {pygame.Surface} display - parent surface for blitting
class Grid:
    def __init__(self, display):
        self.display = display
        self.screen = pygame.Surface(((BLOCK_WIDTH + 1) * BLOCK_SIZE, (BLOCK_HEIGHT + 1) * BLOCK_SIZE))
        self.screen.fill((BACK_COLOR))
        self.counter = 0
        self.last_moved = 0
        self.locked = False
        self.tetris_lines = []

        self.score = 0
        self.level = 1
        self.lines = 0
        self.changed_values = []
        self._set_tick()

        self.GridState_PLAYING = 0
        self.GridState_GAMEOVER = 1
        self.GridState_TETRIS = 2

        self.state = self.GridState_PLAYING
        # Short hand 2d array initialised to 0
        self.grid = [[0 for x in range(BLOCK_WIDTH)] for y in range(BLOCK_HEIGHT)]

        # Make a list of all 7 block types
        self.block_list = list(range(1, 8))
        self.current_block = None
        self.next_block = None
        # Generate random tetromino at top of screen
        self._create_block()

    # Choose a random tetromino and spawn at top
    def _create_block(self):
        if self.next_block is not None:
            self.current_block = self.next_block
        else:
            self.current_block = Block(self.screen, self.block_list.pop(random.randint(0, len(self.block_list) - 1)))
        self.next_block = Block(self.screen, self.block_list.pop(random.randint(0, len(self.block_list) - 1)))
        self.locked = False

    # Checks cell values of block. If its part of the tetromino, save it into the grid.
    def _map_block(self, block):
        for y in range(len(block.matrix[0])):
            for x in range(len(block.matrix)):
                if block.matrix[y][x] != 0:
                    self.grid[block.get_relative_y(y)][block.get_relative_x(x)] = block.block_type

    # Checks each row in the grid, if it is completely filled, pop it and insert a new row at the top
    def _check_tetris(self):
        if self.state != self.GridState_TETRIS:
            for y in range(len(self.grid)):
                # Pop the row if each cell isn't 0
                if all(cell != 0 for cell in self.grid[y]):
                    self.tetris_lines.append(y)
                    self.state = self.GridState_TETRIS

        if self.state == self.GridState_TETRIS:
            tetris_done = True
            for y in self.tetris_lines:
                for x in range(len(self.grid[y]) / 2 - 1):
                    if self.grid[y][len(self.grid[y]) / 2 + x] != 0:
                        self.grid[y][len(self.grid[y]) / 2 + x] = 0
                        self.grid[y][len(self.grid[y]) / 2 - 1 - x] = 0
                        tetris_done = False
                        break

            if tetris_done:
                self.lines += self._calc_lines(len(self.tetris_lines))
                self.score += self._calc_score(len(self.tetris_lines))
                for y in self.tetris_lines:
                    self.grid.pop(y)
                    self.grid.insert(0, [0] * BLOCK_WIDTH)
                self.tetris_lines = []
                self.state = self.GridState_PLAYING



    # adapted from wiki, see gravity: https://tetris.fandom.com/wiki/Tetris_Worlds
    def _set_tick(self):
        self.tick = (0.8 - ((self.level - 1) * 0.007)) ** (self.level - 1) * 1000
        if DEBUG >= 2:
            print("Tick: {}".format(self.tick))

    # self.level * 5f adapted from wiki, https://tetris.fandom.com/wiki/Tetris_Guideline
    def _check_levelup(self):
        if self.lines >= self.level * 5:
            self.level += 1
            self._set_tick()

    # checks for intersections between grid and block matrix, additionally checks for floor collisions
    def _colliding(self, block, x_modifier, y_modifier, block_matrix=0):
        # Map blocks matrix if no custom one specified
        if not block_matrix:
            block_matrix = block.matrix
        for y in range(len(block_matrix[0])):
            for x in range(len(block_matrix)):

                # If the blocks cell is filled and the specified grid cell (x_modifier, y_modifier) is filled
                if block_matrix[y][x] != 0 and \
                        self.grid[clamp(0, BLOCK_HEIGHT - 1, block.get_relative_y(y + y_modifier))][
                            clamp(0, BLOCK_WIDTH - 1, block.get_relative_x(x + x_modifier))] != 0:
                    return True
                # If we aren't dealing with rotation & dont care about the y component
                #  & we have a filled cell & we are touching the bottom row
                if block.matrix == block_matrix and y_modifier != 0 and block_matrix[y][x] != 0 \
                   and block.get_relative_y(y) >= BLOCK_HEIGHT - 1:
                    return True

        return False

    # using original NES scoring system, adapted from https://tetris.fandom.com/wiki/Scoring
    def _calc_score(self, lines):
        if lines == 1:
            return 40 * (self.level + 1)
        elif lines == 2:
            return 100 * (self.level + 1)
        elif lines == 3:
            return 300 * (self.level + 1)
        elif lines == 4:
            return 1200 * (self.level + 1)
        else:
            return 0

    # adapted from https://tetris.fandom.com/wiki/Tetris_Guideline
    def _calc_lines(self, lines):
        if lines == 1:
            return 1
        elif lines == 2:
            return 3
        elif lines == 3:
            return 5
        elif lines == 4:
            return 8
        else:
            return 0

    # simulates a block matrix rotation, applying 'bumps' and checking collision
    def rotate_block(self, reverse=False):
        # Create clone of current_block so we can simulate some rotations and collisions
        temp_block = Block(self.display, self.current_block.block_type)
        temp_block.matrix = self.current_block.matrix
        temp_block.position = self.current_block.position

        # rotate based on reverse variable
        temp_block._rotate_right() if not reverse else temp_block._rotate_left()

        # calculate out of bounds on y axis for rotated block matrix, 'bump' back in bounds, don't need to check ceiling
        for y in range(max(0, temp_block.get_relative_y(len(temp_block.matrix)) - (BLOCK_HEIGHT))):
            temp_block.move_up()

        # calculate out of bounds on x axis for rotated block, 'bump' back in bounds
        for x in range(max(0, temp_block.get_relative_x(len(temp_block.matrix[0])) - (BLOCK_WIDTH))):
            temp_block.move_left()
        for x in range(abs(min(0, temp_block.get_relative_x(0)))):
            temp_block.move_right()

        # abort the rotation if matrix is now colliding
        if self._colliding(temp_block, 0, 0, temp_block.matrix):
            return

        # apply simulated position and rotation to real block
        self.current_block.position = temp_block.position
        self.current_block.matrix = temp_block.matrix
        self.last_moved = 0

    # move left if we won't collide with anything
    def move_block_left(self):
        if not self._colliding(self.current_block, -1, 0):
            self.current_block.move_left()
            # reset block movement counter
            self.last_moved = 0

    # move right if we won't collide with anything
    def move_block_right(self):
        if not self._colliding(self.current_block, 1, 0):
            self.current_block.move_right()
            # reset block movement counter
            self.last_moved = 0

    def move_block_down(self):
        if not self._colliding(self.current_block, 0, 1):
            self.current_block.move_down()

    # keep pushing the block down until we would collide
    def move_block_to_bottom(self):
        if not self._colliding(self.current_block, 0, 1):
            self.current_block.move_down()
            # recursively call self
            if not self.move_block_to_bottom():
                # force a tick update
                self.counter = self.tick
                # lock the block to bypass block movement check
                self.locked = True
            return True
        return False

    # every tick check the state of the block and react accordingly
    def update_block(self, debug, dt):
        if self.state == self.GridState_PLAYING:
            # Do block stuff after we hit the tick timer value
            self.counter += dt
            self.last_moved += dt
            if self.counter >= self.tick:
                self.counter = 0
                # move down if we won't collide
                if not self._colliding(self.current_block, 0, 1):
                    self.current_block.move_down()
                # else if the block is locked or a block movement hasn't occurred for half a tick
                elif self.locked or self.last_moved > self.tick / 2:
                    self._map_block(self.current_block)
                    self._check_tetris()
                    self._check_levelup()
                    self._create_block()

                # block inside block means we've hit the ceiling
                if self._colliding(self.current_block, 0, 0):
                    self.state = self.GridState_GAMEOVER

        elif self.state == self.GridState_TETRIS:
            self.counter += dt * CLEAR_SPEED
            if self.counter >= self.tick:
                self.counter = 0
                self._check_tetris()

    # Draw grid lines and filled blocks
    def _draw_grid(self, debug):
        self.screen.fill(BACK_COLOR)
        # draw block if in PLAYING state
        self.current_block.draw(debug, self.state == self.GridState_PLAYING)
        # Draw a vertical line for each x block + 1
        for x in range(len(self.grid[0]) + 1):
            pygame.draw.line(self.screen, GRID_COLOR, [x * BLOCK_SIZE, 0],
                             [x * BLOCK_SIZE, BLOCK_SIZE * BLOCK_HEIGHT],
                             GRID_LINE_WIDTH)
        # Draw a horizontal line for each y block + 1
        for y in range(len(self.grid) + 1):
            pygame.draw.line(self.screen, GRID_COLOR, [0, y * BLOCK_SIZE],
                             [BLOCK_SIZE * BLOCK_WIDTH, y * BLOCK_SIZE],
                             GRID_LINE_WIDTH)

        # Check if each block is filled, if it is draw in it
        for y in range(len(self.grid)):
            for x in range(len(self.grid[y])):
                # Draw rectangles in cells with their appropriate color (based on what tetromino filled them)
                if self.grid[y][x] != 0:
                    block_rect = Block.get_rect(x, y, BLOCK_SIZE, GRID_LINE_WIDTH, .6)
                    pygame.draw.rect(self.screen, (0, 0, 0),
                                      pygame.Rect(block_rect.x + 2, block_rect.y + 2, block_rect.width, block_rect.height), BLOCK_LINE_WIDTH)
                    pygame.draw.rect(self.screen, Block.get_color(self.grid[y][x]),
                                     block_rect, BLOCK_LINE_WIDTH)
                # Overlay each cells value on the screen with a color that is human readable (inverted)
                if debug == 5:
                    text_surface = DEBUG_FONT.render(str(self.grid[y][x]), True, (255, 255, 255))
                    self.screen.blit(text_surface, (
                        x * BLOCK_SIZE + (BLOCK_SIZE / 3),
                        y * BLOCK_SIZE + (BLOCK_SIZE / 3.5)))
                self.display.blit(self.screen, (0, SCREEN_Y_OFFSET))

    # Main update for grid
    def update(self, debug, dt):
        self._draw_grid(debug)
        self.update_block(debug, dt)
        if len(self.block_list) == 0:
            self.block_list = list(range(1, 8))

    # Debug function, prints grid in readable format
    def print_grid(self):
        for y in range(len(self.grid)):
            print(self.grid[y])
        print("")

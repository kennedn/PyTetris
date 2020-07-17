from modules.block import Block
import random
from modules.globals import *
from modules.polyfill import enum

# Main Grid Function
# Draw Grid, keep track of grid values and spawn tetrominoes
class Grid:

    def __init__(self, main_surface):
        self.display = main_surface
        self.screen = pygame.Surface(((BLOCK_WIDTH + 1) * BLOCK_SIZE, (BLOCK_HEIGHT + 1) * BLOCK_SIZE))
        self.screen.fill((0, 0, 0))
        self.counter = 0
        self.still_moving_counter = 0

        self.score = 0
        self.level = 1
        self.lines = 0
        self.changed_values = []
        self._set_tick()

        self.GridState = enum(PLAYING=0, GAMEOVER=1)
        self.state = self.GridState.PLAYING
        # Short hand 2d array initialised to 0
        self.grid = [[0 for x in range(BLOCK_WIDTH)] for y in range(BLOCK_HEIGHT)]

        # Make a list of all 7 block types
        self.block_list = list(range(1, 8))
        self.current_block = None
        self.next_block = None
        # Generate random tetromino at top of screen
        self.__create_block()

    # Choose a random tetromino and spawn at top
    def __create_block(self):
        if self.next_block is not None:
            self.current_block = self.next_block
        else:
            self.current_block = Block(self.display, self.block_list.pop(random.randint(0, len(self.block_list) - 1)))
        self.next_block = Block(self.display, self.block_list.pop(random.randint(0, len(self.block_list) - 1)))

    # Checks cell values of block. If its part of the tetromino, save it into the grid.
    def __map_block(self, block):
        for y in range(len(block.matrix[0])):
            for x in range(len(block.matrix)):
                if block.matrix[y][x] != 0:
                    self.grid[block.get_relative_y(y)][block.get_relative_x(x)] = block.block_type

    # Checks each row in the grid, if it is completely filled, pop it and insert a new row at the top
    def __check_tetris(self):
        popped_lines = 0
        for y in range(len(self.grid)):
            # Pop the row if each cell isn't 0
            if all(cell != 0 for cell in self.grid[y]):
                self.grid.pop(y)
                self.grid.insert(0, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
                popped_lines += 1
        self.lines += self._calc_lines(popped_lines)
        self.score += self._calc_score(popped_lines)

    def _set_tick(self):
        self.tick = (0.8 - ((self.level - 1) * 0.007)) ** (self.level - 1) * 1000
        if DEBUG >= 2:
            print("Tick: {}".format(self.tick))

    def _check_levelup(self):
        if self.lines >= self.level * 5:
            self.level += 1
            self._set_tick()

    def __colliding(self, block, x_modifier, y_modifier, block_matrix=0):
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
                if block.matrix == block_matrix and y_modifier != 0 and block_matrix[y][
                    x] != 0 and block.get_relative_y(
                    y) >= BLOCK_HEIGHT - 1:
                    return True

        return False

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

    # Bucket load of collision detection to ensure a rotation will not collide.
    # This function also 'bumps' the block if its next rotation would be out of bounds, instead of not rotating
    def rotate_block(self):
        # Create clone of current_block so we can simulate some rotations and collisions
        temp_block = Block(self.display, self.current_block.block_type)
        temp_block.matrix = self.current_block.matrix
        temp_block.position = self.current_block.position

        block_matrix = self.current_block.get_next_rotation(temp_block.matrix)
        temp_block._rotate()
        left_counter = 0
        right_counter = 0
        bottom_counter = 0
        for y in range(len(block_matrix[0])):
            for x in range(len(block_matrix)):
                # Calculate the bump amount if the rotation will be down OOB
                if block_matrix[y][x] != 0 and temp_block.get_relative_y(y) > BLOCK_HEIGHT - 1:
                    if temp_block.get_relative_y(y) - (BLOCK_HEIGHT - 1) > bottom_counter:
                        bottom_counter = temp_block.get_relative_y(y) - (BLOCK_HEIGHT - 1)
                # Calculate the bump amount if the rotation will be right OOB
                elif block_matrix[y][x] != 0 and temp_block.get_relative_x(x) > BLOCK_WIDTH - 1:
                    if temp_block.get_relative_x(x) - (BLOCK_WIDTH - 1) > right_counter:
                        right_counter = temp_block.get_relative_x(x) - (BLOCK_WIDTH - 1)
                # Calculate the bump amount if the rotation will be left OOB
                elif block_matrix[y][x] != 0 and temp_block.get_relative_x(x) < 0:
                    if temp_block.get_relative_x(x) < left_counter:
                        left_counter = temp_block.get_relative_x(x)
        # Bump right x amount of times
        if left_counter != 0:
            for x in range(abs(left_counter)):
                temp_block.move_right()
        # Bump left x amount of times
        elif right_counter != 0:
            for x in range(right_counter):
                temp_block.move_left()
        # Bump up x amount of times
        elif bottom_counter != 0:
            for x in range(bottom_counter):
                temp_block.move_up()
        # If we aren't bumping, check the rotation won't intersect any other filled cells
        # Check for cells to right
        if self.__colliding(temp_block, 1, 0, block_matrix):
            return
        # Check for cells to the left
        if self.__colliding(temp_block, -1, 0,block_matrix):
            return
        # Check for cells inside of self
        if self.__colliding(temp_block, 0, 0, block_matrix):
            return
        # If we got past the Guantlet of collision detection, rotate
        self.current_block.position = temp_block.position
        self.current_block.matrix = temp_block.matrix

    def get_cell(self, position):
        return (clamp(0, SCREEN_WIDTH, ((-0 + position[0]) / BLOCK_SIZE)),
                        clamp(0, SCREEN_HEIGHT, ((-SCREEN_Y_OFFSET + position[1]) / BLOCK_SIZE)))
    # Move left if we won't collide with anything
    def move_block_left(self):
        if not self.__colliding(self.current_block, -1, 0):
            self.current_block.move_left()

    # Move right if we won't collide with anything
    def move_block_right(self):
        if not self.__colliding(self.current_block, 1, 0):
            self.current_block.move_right()

    def move_block_down(self):
        if not self.__colliding(self.current_block, 0, 1):
            self.current_block.move_down()

    # Keep pushing the block down until we would collide
    def move_block_to_bottom(self):
        if not self.__colliding(self.current_block, 0, 1):
            self.current_block.move_down()
            self.move_block_to_bottom()

    # Every TICK check the state of the block and react accordingly
    def update_block(self, debug, dt):
        # Do block stuff after we hit the tick timer value
        self.counter += dt
        self.still_moving_counter += dt
        if self.counter >= self.tick:
            self.counter = 0
            # If we can move down move down
            if not self.__colliding(self.current_block, 0, 1):
                self.current_block.move_down()
            else:
                self.still_moving_counter = 0
                self.__map_block(self.current_block)
                self.__check_tetris()
                self._check_levelup()
                self.__create_block()

            if self.__colliding(self.current_block, 0, 0):
                self.state = self.GridState.GAMEOVER

    # Draw grid lines and filled blocks
    def _draw_grid(self, debug):
        self.screen.fill((0, 0, 0))
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
                    pygame.draw.rect(self.screen, Block.get_color(self.grid[y][x]),Block.get_rect(x, y, BLOCK_SIZE, GRID_LINE_WIDTH, 0.85), BLOCK_LINE_WIDTH)
                # Overlay each cells value on the screen with a color that is human readable (inverted)
                if debug == 5:
                    text_surface = DEBUG_FONT.render(str(self.grid[y][x]), True, (255,255,255))
                    self.screen.blit(text_surface, (
                        x * BLOCK_SIZE + (BLOCK_SIZE / 3),
                        y * BLOCK_SIZE + (BLOCK_SIZE / 3.5)))
                self.display.blit(self.screen, (0, SCREEN_Y_OFFSET))

        self.current_block.draw(debug)

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

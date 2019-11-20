from block import Block
from text_floater import TextFloater
import random
from globals import *


# Main Grid Function
# Draw Grid, keep track of grid values and spawn tetrominoes
class Grid:
    def __init__(self, main_surface):
        self.display = main_surface
        self.screen = pygame.Surface(((BLOCK_WIDTH + 1) * BLOCK_SIZE, (BLOCK_HEIGHT + 1) * BLOCK_SIZE))
        self.screen.fill((0, 0, 0))
        self.counter = 0
        self.still_moving_counter = 0
        self.score_list = []
        # Short hand 2d array initialised to 0
        self.grid = [[0 for x in range(BLOCK_WIDTH)] for y in range(BLOCK_HEIGHT)]

        # Make a list of all 7 block types
        self.block_list = range(1,8)
        # Generate random tetromino at top of screen
        self.__create_block()

    # Choose a random tetromino and spawn at top
    def __create_block(self):
            self.current_block = Block(self.display, self.block_list.pop(random.randint(0, len(self.block_list) - 1)))

    # Checks cell values of block. If its part of the tetromino, save it into the grid.
    def __map_block(self, block):
        for y in range(len(block.matrix[0])):
            for x in range(len(block.matrix)):
                if block.matrix[y][x] != 0:
                    self.grid[block.get_relative_y(y)][block.get_relative_x(x)] = block.block_type

    # Checks each row in the grid, if it is completely filled, pop it and insert a new row at the top
    def __check_tetris(self):
        score_counter = []
        for y in range(len(self.grid)):
            # Pop the row if each cell isn't 0
            if all(self.grid[y][x] != 0 for x in range(len(self.grid[y]))):
                self.grid.pop(y)
                self.grid.insert(0, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
                score_counter.append(y)
        self.display_score(score_counter)

    def display_score(self, rows):
        score = 0
        if len(rows) == 1:
            score = 120
        elif len(rows) == 2:
            score = 300
        elif len(rows) == 3:
            score = 900
        else:
            score = 3600
        if len(rows) > 0:
            # print("Scored " + str(score) + " points")
            self.score_list.append(TextFloater(self.screen, SCORE_TIMEOUT, SCORE_FONT,
                                               # Block.get_color(self.current_block.block_type.value), score,
                                               (255, 255, 255), score,
                                               clamp(SCREEN_X_OFFSET + BLOCK_SIZE,
                                                     SCREEN_X_OFFSET + 10 + (BLOCK_WIDTH * (BLOCK_SIZE - 1)),
                                                     SCREEN_X_OFFSET + ((self.current_block.position[0] + (
                                                             self.current_block.width / 2)) * BLOCK_SIZE)),
                                               min(SCREEN_Y_OFFSET + y * BLOCK_SIZE for y in rows)))

            # Check if a block is colliding with filled grid cells
            # Optionally specify a custom matrix

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

    # Shit ton of collision detection to ensure a rotation will not collide.
    # This function also 'bumps' the block if its next rotation would be out of bounds, instead of not rotating
    def rotate_block(self, block):
        # Get a 90 degree rotated matrix
        block_matrix = self.current_block.get_next_rotation(self.current_block.matrix)
        left_counter = 0
        right_counter = 0
        bottom_counter = 0
        for y in range(len(block_matrix[0])):
            for x in range(len(block_matrix)):
                # Calculate the bump amount if the rotation will be down OOB
                if block_matrix[y][x] != 0 and block.get_relative_y(y) > BLOCK_HEIGHT - 1:
                    if block.get_relative_y(y) - (BLOCK_HEIGHT - 1) > bottom_counter:
                        bottom_counter = block.get_relative_y(y) - (BLOCK_HEIGHT - 1)
                # Calculate the bump amount if the rotation will be right OOB
                elif block_matrix[y][x] != 0 and block.get_relative_x(x) > BLOCK_WIDTH - 1:
                    if block.get_relative_x(x) - (BLOCK_WIDTH - 1) > right_counter:
                        right_counter = block.get_relative_x(x) - (BLOCK_WIDTH - 1)
                # Calculate the bump amount if the rotation will be left OOB
                elif block_matrix[y][x] != 0 and block.get_relative_x(x) < 0:
                    if block.get_relative_x(x) < left_counter:
                        left_counter = block.get_relative_x(x)
        # Bump right x amount of times
        if left_counter != 0:
            for x in range(abs(left_counter)):
                self.current_block.move_right()
        # Bump left x amount of times
        elif right_counter != 0:
            for x in range(right_counter):
                self.current_block.move_left()
        # Bump up x amount of times
        elif bottom_counter != 0:
            for x in range(bottom_counter):
                self.current_block.move_up()
        # If we aren't bumping, check the rotation won't intersect any other filled cells
        else:
            # Check for cells to right
            if self.__colliding(self.current_block, 1, 0, block_matrix):
                return
            # Check for cells to the left
            if self.__colliding(self.current_block, -1, 0, block_matrix):
                return
            # Check for cells inside of self
            if self.__colliding(self.current_block, 0, 0, block_matrix):
                return
        # If we got past the Guantlet of collision detection, rotate
        self.current_block._rotate()

    # Move left if we won't collide with anything
    def move_block_left(self):
        if not self.__colliding(self.current_block, -1, 0):
            self.current_block.move_left()

    # Move right if we won't collide with anything
    def move_block_right(self):
        if not self.__colliding(self.current_block, 1, 0):
            self.current_block.move_right()

    # Keep pushing the block down until we would collide
    def move_block_to_bottom(self):
        while not self.__colliding(self.current_block, 0, 1):
                self.current_block._move_down()

    # Every TICK check the state of the block and react accordingly
    def update_block(self, debug, dt):
        # Do block stuff after we hit the tick timer value
        self.counter += dt
        self.still_moving_counter += dt
        if self.counter >= TICK:
            self.counter = 0
            if not self.__colliding(self.current_block, 0, 1):
                self.current_block._move_down()
            elif self.__colliding(self.current_block,0,0):
                self.grid = [[0 for x in range(BLOCK_WIDTH)] for y in range(BLOCK_HEIGHT)]
            else:
                self.still_moving_counter = 0
                self.__map_block(self.current_block)
                self.__check_tetris()
                self.__create_block()

        self.current_block.draw(debug)

    # Draw grid lines and filled blocks
    def __draw_grid(self, debug):
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
                if debug >= 4:
                    text_surface = DEBUG_FONT.render(str(self.grid[y][x]), True, (255,255,255))
                    self.screen.blit(text_surface, (
                        x * BLOCK_SIZE + (BLOCK_SIZE / 3),
                        y * BLOCK_SIZE + (BLOCK_SIZE / 3.5)))
                self.display.blit(self.screen, (SCREEN_X_OFFSET, SCREEN_Y_OFFSET))
    # Main update for grid
    def update(self, debug, dt):
        self.__draw_grid(debug)
        self.update_block(debug, dt)
        for i in range(len(self.score_list)):
            self.score_list[i].update(dt)
            if not self.score_list[i].alive:
                self.score_list.pop(i)
                break
        if len(self.block_list) == 0:
            self.block_list = range(1,8)

    # Debug function, prints grid in readable format
    def print_grid(self):
        for y in range(len(self.grid)):
            print(self.grid[y])
        print("")

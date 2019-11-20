from copy import deepcopy
import pygame


# Tetromino class, defines a single tetris piece.
class Block:
    def __init__(self, screen, block_type, block_width, block_height, block_size, line_width, x_offset, y_offset):
        self.display = screen
        self.block_width = block_width
        self.block_height = block_height
        self.block_size = block_size
        self.line_width = line_width
        self.matrix = self.__get_matrix(block_type)
        self.position = self.__get_start_position(self.matrix)
        self.block_type = block_type
        self.width = len(self.matrix[0])
        self.height = len(self.matrix)
        self.screen = pygame.Surface((self.width * self.block_size, self.height * self.block_size), pygame.SRCALPHA, 32)
        self.screen = self.screen.convert_alpha()
        self.x_offset = x_offset
        self.y_offset = y_offset

    # Defines each type of Tetromino, returns a 2d array of type block_type
    @staticmethod
    def __get_matrix(block_type):

        if block_type == 1:
            return [[0, 0, 0, 0],
                    [1, 1, 1, 1],
                    [0, 0, 0, 0],
                    [0, 0, 0, 0]]
        elif block_type == 2:
            return [[1, 1],
                    [1, 1]]
        elif block_type == 3:
            return [[0, 1, 0],
                    [1, 1, 1],
                    [0, 0, 0]]
        elif block_type == 4:
            return [[1, 0, 0],
                    [1, 1, 1],
                    [0, 0, 0]]
        elif block_type == 5:
            return [[0, 0, 1],
                    [1, 1, 1],
                    [0, 0, 0]]
        elif block_type == 6:
            return [[0, 1, 1],
                    [1, 1, 0],
                    [0, 0, 0]]
        elif block_type == 7:
            return [[1, 1, 0],
                    [0, 1, 1],
                    [0, 0, 0]]

    # Defines colors for each Tetromino, returns a tuple
    @staticmethod
    def get_color(num):
        if num == 1:
            return 255, 0, 0  # Red
        elif num == 2:
            return 0, 255, 255  # Magenta
        elif num == 3:
            return 184, 134, 11  # Dark Gold
        elif num == 4:
            return 255, 0, 255  # Cyan
        elif num == 5:
            return 255, 255, 0  # Blue
        elif num == 6:
            return 0, 0, 255  # Silver
        elif num == 7:
            return 0, 128, 0  # Green

    # Calculate starting x position
    def __get_start_position(self, matrix):
        return int(self.block_width / 2 - (len(matrix[0]) / 2)), 0

    # Calculate world bound y position
    def get_relative_y(self, y):
        return self.position[1] + y

    # Calculate world bound x position
    def get_relative_x(self, x):
        return self.position[0] + x

    # Flip 2d array 90 degrees to the right
    def _rotate(self):
        self.matrix = self.get_next_rotation(self.matrix)

    # Rotates 2d array 90 degrees to the right. Reverse array order then use zip to turn columns into rows
    @staticmethod
    def get_next_rotation(matrix):
        return list(zip(*matrix[::-1]))

    def _move_down(self):
        self.position = (self.position[0], self.position[1] + 1)

    def move_up(self):
        self.position = (self.position[0], self.position[1] - 1)

    def move_right(self):
        if not self.hit_right_wall():
            self.position = (self.position[0] + 1, self.position[1])

    def move_left(self):
        if not self.hit_left_wall():
            self.position = (self.position[0] - 1, self.position[1])

    # Check if any filled cell will go out of bounds to left
    def hit_left_wall(self):
        for y in range(len(self.matrix[0])):
            for x in range(len(self.matrix)):
                if self.matrix[y][x] != 0 and self.get_relative_x(x) <= 0:
                    return True

    # Check if any filled cell will go out of bounds to right
    def hit_right_wall(self):
        for y in range(len(self.matrix[0])):
            for x in range(len(self.matrix)):
                if self.matrix[y][x] != 0 and self.get_relative_x(x) >= self.block_width - 1:
                    return True

    # print an ascii representation of the block matrix
    def print_block(self):
        for y in range(len(self.matrix)):
            print(self.matrix[y])
        print("")

    # Draw each cell based on position and matrix
    def draw(self, debug):
        rot_matrix = self.get_next_rotation(self.matrix)
        for y in range(len(self.matrix)):
            for x in range(len(self.matrix[y])):
                cell_rect = pygame.Rect((self.position[0] + x) * self.block_size + self.line_width,
                                        (self.position[1] + y) * self.block_size + self.line_width,
                                        self.block_size - (self.line_width * 2),
                                        self.block_size - (self.line_width * 2))
                invert_rect = pygame.Rect((self.position[0] + x) * self.block_size + self.block_size / 3,
                                        (self.position[1] + y) * self.block_size + self.block_size / 3,
                                        self.block_size / 3,
                                        self.block_size / 3)
                invert_color = self.get_color(self.block_type)
                if self.matrix[y][x] == 0 and debug == 2:
                    pygame.draw.rect(self.screen, invert_color, invert_rect)

                if self.matrix[y][x] == 0 and debug == 3 and rot_matrix[y][x] != 0:
                    pygame.draw.rect(self.screen, invert_color, invert_rect)
                if self.matrix[y][x] != 0:
                    pygame.draw.rect(self.screen, self.get_color(self.block_type), cell_rect, self.line_width)
        self.display.blit(self.screen, (self.position[0] * self.block_size, self.position[1] * self.block_size))
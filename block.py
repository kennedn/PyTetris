from enum import Enum
from copy import deepcopy
import pygame


# Enum of Tetromino types
class BlockType(Enum):
    I = 1
    O = 2
    T = 3
    J = 4
    L = 5
    S = 6
    Z = 7


# Tetromino class, defines a single tetris piece.
class Block:
    def __init__(self, screen, block_type, block_width, block_height, block_size, line_width, x_offset, y_offset):
        self.screen = screen
        self.block_width = block_width
        self.block_height = block_height
        self.block_size = block_size
        self.line_width = line_width
        self.matrix = self.__get_matrix(block_type)
        self.trimmed_matrix = self.get_trimmed_matrix()
        self.position = self.__get_start_position(self.matrix)
        self.block_type = block_type
        self.width = len(self.matrix[0])
        self.height = len(self.matrix)
        self.x_offset = x_offset
        self.y_offset = y_offset

    # Defines each type of Tetromino, returns a 2d array of type block_type
    @staticmethod
    def __get_matrix(block_type):

        if block_type == BlockType.I:
            return [[0, 0, 0, 0],
                    [1, 1, 1, 1],
                    [0, 0, 0, 0],
                    [0, 0, 0, 0]]
        elif block_type == BlockType.O:
            return [[1, 1],
                    [1, 1]]
        elif block_type == BlockType.T:
            return [[0, 1, 0],
                    [1, 1, 1],
                    [0, 0, 0]]
        elif block_type == BlockType.J:
            return [[1, 0, 0],
                    [1, 1, 1],
                    [0, 0, 0]]
        elif block_type == BlockType.L:
            return [[0, 0, 1],
                    [1, 1, 1],
                    [0, 0, 0]]
        elif block_type == BlockType.S:
            return [[0, 1, 1],
                    [1, 1, 0],
                    [0, 0, 0]]
        elif block_type == BlockType.Z:
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

    # Strip any blank rows and columns from the block matrix
    def get_trimmed_matrix(self):
        return_matrix = deepcopy(self.matrix)
        return_matrix = self.__get_directional_trimmed_matrix(return_matrix)
        return_matrix = self.get_next_rotation(return_matrix)
        return_matrix = self.__get_directional_trimmed_matrix(return_matrix)
        for j in range(3):
            return_matrix = self.get_next_rotation(return_matrix)
        return return_matrix

    # Strip blank rows from matrix
    @staticmethod
    def __get_directional_trimmed_matrix(matrix):
        y = 0
        while y < len(matrix):
            pop_row = True
            for x in range(len(matrix[y])):
                if matrix[y][x] != 0:
                    pop_row = False
                    break
            if pop_row:
                matrix.pop(y)
                y = 0
                continue
            y += 1
        return matrix

    # Flip 2d array 90 degrees to the right
    def _rotate(self):
        self.matrix = self.get_next_rotation(self.matrix)
        self.trimmed_matrix = self.get_trimmed_matrix()

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
                cell_rect = pygame.Rect((self.position[0] + x) * self.block_size + self.x_offset + self.line_width,
                                        (self.position[1] + y) * self.block_size + self.y_offset + self.line_width,
                                        self.block_size - (self.line_width * 2),
                                        self.block_size - (self.line_width * 2))
                invert_color = (220,150,220)
                if self.matrix[y][x] == 0 and debug == 2:
                    pygame.draw.rect(self.screen, invert_color, cell_rect, self.line_width)

                if self.matrix[y][x] == 0 and debug == 3 and rot_matrix[y][x] != 0:
                    pygame.draw.rect(self.screen, invert_color, cell_rect, self.line_width)
                if self.matrix[y][x] != 0:
                    pygame.draw.rect(self.screen, self.get_color(self.block_type.value), cell_rect, self.line_width)

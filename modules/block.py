from modules.globals import *

#########################################################
# defines a tetromino
# {pygame.Surface} display - parent surface for blitting
# {int} block_type - defines the type of tetromino (possible 7)
class Block:
    def __init__(self, display, block_type):
        self.display = display
        self.matrix = self._get_matrix(block_type)
        self.position = self._get_start_position(self.matrix)
        self.center = (int(len(self.matrix[0]) / 2), int(len(self.matrix[1]) / 2))
        self.block_type = block_type
        self.width = len(self.matrix[0])
        self.height = len(self.matrix)
        self.screen = pygame.Surface((self.width * BLOCK_SIZE, self.height * BLOCK_SIZE))
        self.screen.set_colorkey((BACK_COLOR))

    # Defines each type of Tetromino, returns a 2d array of type block_type
    @staticmethod
    def _get_matrix(block_type):

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

    # defines colors for each tetromino, returns a tuple
    @staticmethod
    def get_color(num):
        if num == 1:
            return 252, 118, 120  # orange
        elif num == 2:
            return 54, 219, 213  # turquoise
        elif num == 3:
            return 213, 214, 9  # dirty gold
        elif num == 4:
            return 110, 4, 169  # purple
        elif num == 5:
            return 97, 103, 212  # lavender
        elif num == 6:
            return 170, 170, 170  # silver
        elif num == 7:
            return 7, 144, 65  # green

    # Generate a rectangle with grid line offset and scaler value
    @staticmethod
    def get_rect(x, y, block_size, grid_line_width, scale):
        return pygame.Rect(x * block_size + grid_line_width / 2 + (block_size / 2 - (block_size / 2 * scale)),
                           y * block_size + grid_line_width / 2 + (block_size / 2 - (block_size / 2 * scale)),
                           block_size - grid_line_width - (block_size - (block_size * scale)),
                           block_size - grid_line_width - (block_size - (block_size * scale)))

    # Calculate starting x position
    @staticmethod
    def _get_start_position(matrix):
        return int(BLOCK_WIDTH / 2 - (len(matrix[0]) / 2)), 0

    # Calculate world bound y position
    def get_relative_y(self, y):
        return self.position[1] + y

    # Calculate world bound x position
    def get_relative_x(self, x):
        return self.position[0] + x

    # Flip 2d array 90 degrees to the right
    def _rotate_right(self):
        self.matrix = self.get_next_rotation(self.matrix)

    # Flip 2d array 90 degrees to the left
    def _rotate_left(self):
        for i in range(3):
            self.matrix = self.get_next_rotation(self.matrix)

    # Rotates 2d array 90 degrees to the right. Reverse array order then use zip to turn columns into rows
    @staticmethod
    def get_next_rotation(matrix):
        return list(zip(*reversed(matrix)))

    def move_down(self):
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
                if self.matrix[y][x] != 0 and self.get_relative_x(x) >= BLOCK_WIDTH - 1:
                    return True

    # print an ascii representation of the block matrix
    def print_block(self):
        for y in range(len(self.matrix)):
            print(self.matrix[y])
        print("")

    # Draw each cell based on position and matrix
    def draw(self, debug, to_screen=True):
        self.screen.fill((BACK_COLOR))
        rot_matrix = self.get_next_rotation(self.matrix)
        for y in range(len(self.matrix)):
            for x in range(len(self.matrix[y])):
                # debug draws
                cell_rect = self.get_rect(x, y, BLOCK_SIZE, GRID_LINE_WIDTH, .6)
                debug_rect = self.get_rect(x, y, BLOCK_SIZE, GRID_LINE_WIDTH, 0.3)
                debug_color = (255, 255, 255)
                if self.matrix[y][x] == 0 and debug == 3:
                    pygame.draw.rect(self.screen, debug_color, debug_rect, BLOCK_LINE_WIDTH)
                    self.screen.set_colorkey((1,1,1))
                if rot_matrix[y][x] != 0 and debug == 4:
                    pygame.draw.rect(self.screen, debug_color, debug_rect, BLOCK_LINE_WIDTH)

                if self.matrix[y][x] != 0:
                    pygame.draw.rect(self.screen, (0, 0, 0), pygame.Rect(cell_rect.x + 2, cell_rect.y + 2,
                                                                         cell_rect.width, cell_rect.height),
                                     BLOCK_LINE_WIDTH)
                    pygame.draw.rect(self.screen, self.get_color(self.block_type), cell_rect, BLOCK_LINE_WIDTH)

        if to_screen:
            self.display.blit(self.screen, (self.position[0] * BLOCK_SIZE + 0,
                                        self.position[1] * BLOCK_SIZE + 0))

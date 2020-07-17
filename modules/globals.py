#import pygame
import pyjsdl as pygame
from modules.polyfill import clamp

BACK_COLOR = (0, 0, 0)      # Background color
GRID_COLOR = (84, 84, 84)   # Grid lines color
BUTTON_COLOR_BG = (84, 84, 84)
BUTTON_COLOR_FG = (200, 200, 200)
BLOCK_WIDTH = 10            # How many rows in grid    ---\
BLOCK_HEIGHT = 22            # How many columns in grid  ---| --- Together, define minimum window size
BLOCK_SIZE = 30             # How big is each cell     ---/
BUTTON_SIZE = 80
BLOCK_LINE_WIDTH = 3        # How thick is a blocks line
GRID_LINE_WIDTH = 2         # How thick is the grids line
TICK = 600                  # Determines when the block moves down one row
FPS = 120                    # Frames per seconds
SPEED_MULTIPLIER = 7        # How quickly should the block fall when pressing down * BLOCK_TICK
DEBUG = 0                   # Debug level, higher values do cooler things
SCREEN_Y_OFFSET = 50#SCREEN_HEIGHT - (BLOCK_HEIGHT * BLOCK_SIZE)
SCREEN_X_OFFSET = 80#SCREEN_WIDTH - (BLOCK_WIDTH * BLOCK_SIZE)
OSD_HEIGHT = SCREEN_Y_OFFSET
OSD_WIDTH = SCREEN_X_OFFSET
DOUBLE_CLICK_TIMEOUT = 150
MOUSE_DRAG_THRESHOLD_X = BLOCK_SIZE * .5
MOUSE_DRAG_THRESHOLD_Y = BLOCK_SIZE * .6

pygame.display.init()
pygame.font.init()

# Font definitions
DEBUG_FONT = pygame.font.SysFont('ubuntu', 20)
BUTTON_FONT = pygame.font.SysFont('ubuntu', 50)
BUTTON_FONT.set_bold(True)
PAUSED_FONT = pygame.font.SysFont('ubuntu', 36)
PAUSED_FONT.set_bold(True)
PAUSED_SUB_FONT = pygame.font.SysFont('ubuntu', 26)
PAUSED_SUB_FONT.set_bold(True)
OSD_FONT = pygame.font.SysFont('ubuntu', 18)
#OSD_FONT.set_bold(True)
# Screen Initialisation - will be clamped to minimum width x height to display grid
#PYGAME_INFO = pygame.display.Info()
# SCREEN_WIDTH = clamp((BLOCK_WIDTH * BLOCK_SIZE) + 1, PYGAME_INFO.current_w, 650)
# SCREEN_HEIGHT = clamp((BLOCK_HEIGHT * BLOCK_SIZE) + 1, PYGAME_INFO.current_h, 800)
SCREEN_WIDTH = clamp((BLOCK_WIDTH * BLOCK_SIZE) + 1 + SCREEN_X_OFFSET, 99999, 0)
SCREEN_HEIGHT = clamp((BLOCK_HEIGHT * BLOCK_SIZE) + 1 + SCREEN_Y_OFFSET, 99999, 0)
CAPTION = "PyTetris"

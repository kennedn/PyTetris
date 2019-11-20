import pygame
from clamp import clamp

BACK_COLOR = (0, 0, 0)      # Background color
GRID_COLOR = (84, 84, 84)   # Grid lines color
BLOCK_WIDTH = 10            # How many rows in grid    ---\
BLOCK_HEIGHT = 20           # How many columns in grid  ---| --- Together, define minimum window size
BLOCK_SIZE = 30             # How big is each cell     ---/
BLOCK_LINE_WIDTH = 3        # How thick is a blocks line
GRID_LINE_WIDTH = 2         # How thick is the grids line
TICK = 600                  # Determines when the block moves down one row
FPS = 60                    # Frames per seconds
SPEED_MULTIPLIER = 6        # How quickly should the block fall when pressing down * BLOCK_TICK
SCORE_TIMEOUT = 700         # How quickly should a tetris score show for
DEBUG = 0                   # Debug level, higher values do cooler things
SCREEN_Y_OFFSET = 0#SCREEN_HEIGHT - (BLOCK_HEIGHT * BLOCK_SIZE)
SCREEN_X_OFFSET = 0#SCREEN_WIDTH - (BLOCK_WIDTH * BLOCK_SIZE)

pygame.init()
pygame.font.init()

# Font definitions
DEBUG_FONT = pygame.font.SysFont('monospace', 20)
SCORE_FONT = pygame.font.SysFont('monospace', 20)
PAUSED_FONT = pygame.font.SysFont('monospace', 50)

# Screen Initialisation - will be clamped to minimum width x height to display grid
PYGAME_INFO = pygame.display.Info()
SCREEN_WIDTH = clamp((BLOCK_WIDTH * BLOCK_SIZE) + 1, PYGAME_INFO.current_w, 650)
SCREEN_HEIGHT = clamp((BLOCK_HEIGHT * BLOCK_SIZE) + 1, PYGAME_INFO.current_h, 800)
CAPTION = "PyTetris"

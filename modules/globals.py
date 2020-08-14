import pygame

CAPTION = "PyTetris"			   # game window caption
BACK_COLOR = (221, 33, 100)        # background color
PAUSE_COLOR = (221, 33, 100)        # background color
GRID_COLOR = (255, 255, 255)   	   # grid lines color
BUTTON_COLOR_BG = (255, 255, 255)  # button background rect color
BUTTON_COLOR_FG = (255, 255, 255)  # button image / text color
OSD_COLOR = (255, 255, 255)        # color of on screen display elements
BLOCK_WIDTH = 10            	   # grid cell rows     ---\
BLOCK_HEIGHT = 22            	   # grid cell columns   ---| --- Together, define grid size
BLOCK_SIZE = 30             	   # grid cell size     ---/
BUTTON_SIZE = 80				   # width & height of button
BLOCK_LINE_WIDTH = 8               # block line thickness
GRID_LINE_WIDTH = 2                # grid line thickness
BUTTON_TIMEOUT = 600               # timeout of button highlight
TICK = 600                  	   # tetromino logic performed every tick
FPS = 120                          # Frames per seconds
SPEED_MULTIPLIER = 7               # maximum speed increase when down is held
CLEAR_SPEED = 6                    # speed of line clear animation
DEBUG = 1                   	   # Debug level, higher values do cooler things
SCREEN_Y_OFFSET = 50			   # X offset for grid placement
SCREEN_X_OFFSET = 80 		       # Y offset for grid placement
OSD_HEIGHT = SCREEN_Y_OFFSET	   # height of on screen display
OSD_WIDTH = SCREEN_X_OFFSET		   # width of on screen display

# complete screen width x height, based on grid size and offsets
SCREEN_WIDTH = BLOCK_WIDTH * BLOCK_SIZE + 1 + SCREEN_X_OFFSET
SCREEN_HEIGHT = BLOCK_HEIGHT * BLOCK_SIZE + 1 + SCREEN_Y_OFFSET + GRID_LINE_WIDTH

# font definitions
pygame.font.init()
DEBUG_FONT = pygame.font.SysFont('ubuntu', 20)
BUTTON_FONT = pygame.font.SysFont('ubuntu', 50)
BUTTON_FONT.set_bold(True)
PAUSED_FONT = pygame.font.SysFont('ubuntu', 36)
PAUSED_FONT.set_bold(True)
PAUSED_SUB_FONT = pygame.font.SysFont('ubuntu', 26)
PAUSED_SUB_FONT.set_bold(True)
OSD_FONT = pygame.font.SysFont('ubuntu', 18)

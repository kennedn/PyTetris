from grid import Grid
from clamp import clamp
import pygame

BACK_COLOR = (0, 0, 0)      # Background color
GRID_COLOR = (84, 84, 84)   # Grid lines color
BLOCK_WIDTH = 10            # How many rows in grid    ---\
BLOCK_HEIGHT = 20           # How many columns in grid  ---| --- Together, define minimum window size
BLOCK_SIZE = 30             # How big is each cell     ---/
BLOCK_LINE_WIDTH = 3        # How thick is a blocks line
GRID_LINE_WIDTH = 2         # How thick is the grids line
BLOCK_TICK = 600            # Determines when the block moves down one row
FPS = 60                    # Frames per seconds
SPEED_MULTIPLIER = 6        # How quickly should the block fall when pressing down * BLOCK_TICK
SCORE_TIMEOUT = 700         # How quickly should a tetris score show for
DEBUG = 0                   # Debug level, higher values do cooler things

pygame.init()
pygame.font.init()

# Font definitions
debug_font = pygame.font.SysFont('monospace', 20)
score_font = pygame.font.SysFont('monospace', 20)
paused_font = pygame.font.SysFont('monospace', 50)

# Screen Initialisation - will be clamped to minimum width x height to display grid
pygame_info = pygame.display.Info()
SCREEN_WIDTH = clamp((BLOCK_WIDTH * BLOCK_SIZE) + 1, pygame_info.current_w, 450)
SCREEN_HEIGHT = clamp((BLOCK_HEIGHT * BLOCK_SIZE) + 1, pygame_info.current_h, 700)
SCREEN_Y_OFFSET = SCREEN_HEIGHT - (BLOCK_HEIGHT * BLOCK_SIZE)
SCREEN_X_OFFSET = 0 #SCREEN_WIDTH / 2 - (BLOCK_WIDTH * BLOCK_SIZE / 2)
screen = pygame.display.set_mode((SCREEN_WIDTH, SCREEN_HEIGHT))
pygame.display.set_caption("PyTetris")

grid = Grid(screen, debug_font, BLOCK_TICK, SCORE_TIMEOUT, score_font, GRID_COLOR, GRID_LINE_WIDTH, BLOCK_LINE_WIDTH, BLOCK_WIDTH,
            BLOCK_HEIGHT, BLOCK_SIZE, SCREEN_X_OFFSET, SCREEN_Y_OFFSET)
clock = pygame.time.Clock()
down_held = False
paused = False
while True:
    deltaTime = clock.tick(FPS)
    for event in pygame.event.get():
        if event.type == pygame.QUIT or (event.type == pygame.KEYDOWN and event.key == pygame.K_ESCAPE):
            exit()
        if event.type == pygame.KEYUP and event.key == pygame.K_p:
            paused = not paused
        if not paused:
            # Rotate block
            if event.type == pygame.KEYDOWN:
                grid.still_moving_counter = 0
            if event.type == pygame.KEYDOWN and event.key == pygame.K_SPACE:
                grid.rotate_block(grid.current_block)
            # Move block right
            if event.type == pygame.KEYDOWN and event.key == pygame.K_RIGHT:
                grid.move_block_right()
            # Move block left
            if event.type == pygame.KEYDOWN and event.key == pygame.K_LEFT:
                grid.move_block_left()
            # Track if the down key is being held
            if event.type == pygame.KEYDOWN and event.key == pygame.K_DOWN:
                down_held = True
            if event.type == pygame.KEYUP and event.key == pygame.K_DOWN:
                down_held = False

            # Debug level incrementer / decrementer - numpad + and -
            if event.type == pygame.KEYDOWN and event.key == pygame.K_PAGEUP:
                DEBUG += 1
                print("Debug level = {}".format(DEBUG))
            if event.type == pygame.KEYDOWN and event.key == pygame.K_PAGEDOWN:
                DEBUG = max(0, DEBUG - 1)
                print("Debug level = {}".format(DEBUG))

            # Debug functions
            if DEBUG > 0:
                # Respawn a new block
                if event.type == pygame.KEYDOWN and event.key == pygame.K_r:
                    grid._Grid__create_block()
                # Respawn the grid with custom array
                if event.type == pygame.KEYDOWN and event.key == pygame.K_0:
                    grid.grid = [[0 for x in range(BLOCK_WIDTH)] for y in range(BLOCK_HEIGHT)]
                # Print grid array to console
                if event.type == pygame.KEYDOWN and event.key == pygame.K_g:
                    grid.print_grid()
                # Print block array to console
                if event.type == pygame.KEYDOWN and event.key == pygame.K_b:
                    grid.current_block.print_block()
    if not paused:
        if down_held:
            grid.update_block(DEBUG, deltaTime * SPEED_MULTIPLIER)
        screen.fill(BACK_COLOR)
        grid.update(DEBUG, deltaTime)
    else:
        pause_text = paused_font.render("Pause", True, (255,255,255))
        pause_pos = (SCREEN_WIDTH / 2 - pause_text.get_width() / 2, SCREEN_HEIGHT / 2 - pause_text.get_height() / 2)
        pygame.draw.rect(screen,(0,0,0,125),pygame.Rect(pause_pos,(pause_text.get_width(), pause_text.get_height())))
        screen.blit(pause_text, pause_pos)
    pygame.display.flip()

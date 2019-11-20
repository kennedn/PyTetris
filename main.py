from grid import Grid
import pygame
from globals import *

screen = pygame.display.set_mode((SCREEN_WIDTH, SCREEN_HEIGHT))
pygame.display.set_caption(CAPTION)

grid = Grid(screen)
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

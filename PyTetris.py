#!/usr/bin/python
import pygame
from modules.grid import Grid
from modules.osd import OSD
from modules.globals import *
from modules.polyfill import enum

GameState = enum(PAUSED=0, GAMEOVER=1, PLAYING=2)
game_state = GameState.PAUSED

screen = pygame.display.set_mode((SCREEN_WIDTH, SCREEN_HEIGHT))
pygame.display.set_caption(CAPTION)
grid = Grid(screen)
osd = OSD(screen, grid.next_block, pygame.Rect(0, 0, SCREEN_WIDTH, 50), 2, 5, 3, 6,  GRID_COLOR)
clock = pygame.time.Clock()
grid._draw_grid(DEBUG)
text_display_counter = 0
double_click_counter = 0
drag_event_start = None
down_held = False
while True:
    deltaTime = clock.tick(FPS)
    # Keybinds
    for event in pygame.event.get():
        if event.type == pygame.QUIT or (event.type == pygame.KEYDOWN and event.key == pygame.K_ESCAPE):
            exit()
        # Debug functions
        if DEBUG > 0:
            # Debug level incrementer / decrementer - numpad + and -
            if event.type == pygame.KEYDOWN and event.key == pygame.K_PAGEUP:
                DEBUG = min(DEBUG + 1, 10)
                print("Debug level = {}".format(DEBUG))
            if event.type == pygame.KEYDOWN and event.key == pygame.K_PAGEDOWN:
                DEBUG = max(0, DEBUG - 1)
                print("Debug level = {}".format(DEBUG))
            # Respawn a new block
            if event.type == pygame.KEYDOWN and event.key == pygame.K_1:
                grid._Grid__create_block()
            # Respawn the grid with custom array
            if event.type == pygame.KEYDOWN and event.key == pygame.K_2:
                grid.grid = [[0 for x in range(BLOCK_WIDTH)] for y in range(BLOCK_HEIGHT)]
            # Print grid array to console
            if event.type == pygame.KEYDOWN and event.key == pygame.K_3:
                grid.print_grid()
            # Print block array to console
            if event.type == pygame.KEYDOWN and event.key == pygame.K_4:
                grid.current_block.print_block()
            if event.type == pygame.KEYDOWN and event.key == pygame.K_5:
                grid.level = min(grid.level + 1, 100)
                grid._set_tick()
                print("Level = {}".format(grid.level))
            if event.type == pygame.KEYDOWN and event.key == pygame.K_6:
                grid.level = max(0, grid.level + 1)
                grid._set_tick()
                print("Level = {}".format(grid.level))
            if event.type == pygame.KEYDOWN and event.key == pygame.K_7:
                grid.lines += 1
                grid._check_levelup()
                print("Lines = {}".format(grid.lines))
                print("Tick = {}".format(grid.tick))

        if game_state == GameState.PLAYING or game_state == GameState.PAUSED:
            if event.type == pygame.KEYUP and event.key == pygame.K_p:
                text_display_counter = 0
                game_state = GameState.PLAYING if game_state != GameState.PLAYING else GameState.PAUSED

        if game_state == GameState.PLAYING:
            if double_click_counter > 0:
                double_click_counter += deltaTime
                if double_click_counter >= DOUBLE_CLICK_TIMEOUT:
                    double_click_counter = 0

            if event.type == pygame.MOUSEBUTTONDOWN and event.button == 1:
                drag_event_start = grid.get_cell(pygame.mouse.get_pos())
                if double_click_counter == 0:
                    double_click_counter += 0.001
                elif double_click_counter < DOUBLE_CLICK_TIMEOUT:
                    double_click_counter = 0
                    grid.rotate_block(grid.current_block)
            if event.type == pygame.MOUSEMOTION and event.buttons[0] == 1:
                mouse_cell = grid.get_cell(pygame.mouse.get_pos())
                if pygame.mouse.get_pos()[1] - drag_event_start[1] > MOUSE_DRAG_THRESHOLD_Y:
                    drag_event_start = pygame.mouse.get_pos()
                    grid.move_block_down()
                elif drag_event_start[0] - pygame.mouse.get_pos()[0] > MOUSE_DRAG_THRESHOLD_X:
                    drag_event_start = pygame.mouse.get_pos()
                    grid.move_block_left()
                elif pygame.mouse.get_pos()[0] - drag_event_start[0] > MOUSE_DRAG_THRESHOLD_X:
                    drag_event_start = pygame.mouse.get_pos()
                    grid.move_block_right()

            if event.type == pygame.KEYDOWN:
                grid.still_moving_counter = 0
            # Rotate block
            if event.type == pygame.KEYDOWN and event.key == pygame.K_SPACE:
                grid.rotate_block(grid.current_block)
            if event.type == pygame.KEYDOWN and event.key == pygame.K_RETURN:
                grid.move_block_to_bottom()
            # Move block right
            if event.type == pygame.KEYDOWN and event.key == pygame.K_RIGHT:
                grid.move_block_right()
            # Move block left
            if event.type == pygame.KEYDOWN and event.key == pygame.K_LEFT:
                grid.move_block_left()
            # Track if the down key is being held
            if event.type == pygame.KEYDOWN and event.key == pygame.K_DOWN:
                down_held = True
            else:
                down_held = False
            if event.type == pygame.KEYUP and event.key == pygame.K_r:
                grid = Grid(screen)
                down_held = False
                game_state = GameState.PLAYING
        if game_state == GameState.GAMEOVER:
            if event.type == pygame.KEYUP and event.key == pygame.K_r:
                grid = Grid(screen)
                down_held = False
                game_state = GameState.PLAYING

    if game_state == GameState.PLAYING:

        # Perform additional updates to block if we want to go down faster
        if down_held:
            grid.update_block(DEBUG, deltaTime * max(.5, SPEED_MULTIPLIER - grid.level))
        # Transition to game over state if grid flags a game over
        if grid.state == grid.GridState.GAMEOVER:
            game_state = GameState.GAMEOVER

        grid.update(DEBUG, deltaTime)
        osd.update_values(grid.score, grid.level, grid.next_block)

    elif game_state == GameState.PAUSED or game_state == GameState.GAMEOVER:
        renders = []

        text_display_counter += deltaTime
        if text_display_counter >= 600:
            if text_display_counter >= 1200:
                text_display_counter = 0
            text_color = (0, 0, 0)
        else:
            text_color = (255, 255, 255)

        if game_state == GameState.PAUSED:
            text = ["Pause", "Press P to play"]
        elif game_state == GameState.GAMEOVER:
            text = ["Game Over", "Press R to restart"]
        for i in range(len(text)):
            if i == 0:
                renders.append(PAUSED_FONT.render(text[i], True, text_color))
            else:
                renders.append(PAUSED_SUB_FONT.render(text[i], True, text_color))

        for i in range(len(renders)):
            pos = (SCREEN_WIDTH / 2 - renders[i].get_width() / 2,
                   SCREEN_HEIGHT / 2 - renders[i].get_height() / 2 + (renders[i].get_height() * i))
            pygame.draw.rect(screen, (0, 0, 0, 125), pygame.Rect(pos, (renders[i].get_width(), renders[i].get_height())))
            screen.blit(renders[i], pos)

    osd.draw(DEBUG)
    pygame.display.flip()

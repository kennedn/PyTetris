#!/usr/bin/python
import pygame
from grid import Grid
from osd import OSD
from globals import *
from polyfill import enum

GameState = enum(PAUSED=0, GAMEOVER=1, PLAYING=2)
game_state = GameState.PAUSED

screen = pygame.display.set_mode((SCREEN_WIDTH, SCREEN_HEIGHT))
pygame.display.set_caption(CAPTION)
grid = Grid(screen)
osd = OSD(screen, grid.next_block, pygame.Rect(0, 0, SCREEN_WIDTH, 50), 2, 5, 3, 6,  GRID_COLOR)
clock = pygame.time.Clock()
grid._draw_grid(DEBUG)
down_held = False
while True:
    deltaTime = clock.tick(FPS)
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



        if game_state == GameState.PLAYING or game_state == GameState.PAUSED:
            if event.type == pygame.KEYUP and event.key == pygame.K_p:
                game_state = GameState.PLAYING if game_state != GameState.PLAYING else GameState.PAUSED

        if game_state == GameState.PLAYING:
            # Rotate block
            if event.type == pygame.KEYDOWN:
                grid.still_moving_counter = 0
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
            if event.type == pygame.KEYUP and event.key == pygame.K_DOWN:
                down_held = False
        if game_state == GameState.GAMEOVER:
            if event.type == pygame.KEYUP and event.key == pygame.K_r:
                grid = Grid(screen)
                game_state = GameState.PLAYING


    if game_state == GameState.PLAYING:
        if down_held:
            grid.update_block(DEBUG, deltaTime * SPEED_MULTIPLIER)
        # screen.fill(BACK_COLOR)
        grid.update(DEBUG, deltaTime)
        osd.score = grid.score
        osd.level = grid.level
        osd.next_block = grid.next_block
        if grid.state == grid.GridState.GAMEOVER:
            game_state = GameState.GAMEOVER
    elif game_state == GameState.PAUSED or game_state == GameState.GAMEOVER:
        renders = []
        if game_state == GameState.PAUSED:
            text = ["Pause", "(P)"]
        elif game_state == GameState.GAMEOVER:
            text = ["Game Over", "(R)"]
        for t in text:
            renders.append(PAUSED_FONT.render(t, True, (255, 255, 255)))

        for i in range(len(renders)):
            pos = (SCREEN_WIDTH / 2 - renders[i].get_width() / 2,
                   SCREEN_HEIGHT / 2 - renders[i].get_height() / 2 + (renders[i].get_height() * i))
            pygame.draw.rect(screen, (0, 0, 0, 125), pygame.Rect(pos, (renders[i].get_width(), renders[i].get_height())))
            screen.blit(renders[i], pos)

    osd.draw()
    pygame.display.flip()

#!/usr/bin/python
#import pygame
import pyjsdl as pygame
from modules.grid import Grid
from modules.osd import OSD
from modules.button import Button
from modules.globals import *
#from modules.polyfill import enum

screen = pygame.display.set_mode((SCREEN_WIDTH, SCREEN_HEIGHT))
pygame.display.set_caption(CAPTION)
clock = pygame.time.Clock()
#GameState = enum(PAUSED=0, GAMEOVER=1, PLAYING=2)
GameState_PAUSED = 0
GameState_GAMEOVER = 1
GameState_PLAYING = 2
grid = None
osd = OSD(screen, pygame.Rect(0, 0, SCREEN_WIDTH - OSD_WIDTH, OSD_HEIGHT), 2, 5, 3, 6,  GRID_COLOR)


def pause_toggle():
    global game_state
    global text_display_counter
    text_display_counter = 0
    game_state = GameState_PLAYING if game_state != GameState_PLAYING else GameState_PAUSED


def restart():
    global grid
    global down_held
    global game_state
    grid = Grid(screen)
    attach_buttons()
    down_held = False
    game_state = GameState_PLAYING

# Button definitions, normal buttons should only call their function during PLAYING.
# Admin buttons should be activated during any gamestate.
# Must be run at restart as a new grid object is generated, invalidating some function calls
buttons = []
def attach_buttons():
    global buttons
    buttons = []
    buttons.append(Button(screen, BUTTON_COLOR_BG, BUTTON_COLOR_FG,
                                pygame.Rect(SCREEN_WIDTH - BUTTON_SIZE + 1, BUTTON_SIZE,
                                            BUTTON_SIZE, BUTTON_SIZE), 5,  5, [0, 2], pause_toggle))
    buttons.append(Button(screen, BUTTON_COLOR_BG, BUTTON_COLOR_FG,
                                pygame.Rect(SCREEN_WIDTH - BUTTON_SIZE + 1, 0,
                                            BUTTON_SIZE, BUTTON_SIZE), 5,  6, [0, 1, 2], restart))
    buttons.append(Button(screen, BUTTON_COLOR_BG, BUTTON_COLOR_FG,
                          pygame.Rect(SCREEN_WIDTH - BUTTON_SIZE + 1, SCREEN_HEIGHT - BUTTON_SIZE * 5, BUTTON_SIZE,
                                      BUTTON_SIZE), 5,  2, [2], getattr(grid, 'move_block_left')))
    buttons.append(Button(screen, BUTTON_COLOR_BG, BUTTON_COLOR_FG,
                          pygame.Rect(SCREEN_WIDTH - BUTTON_SIZE + 1, SCREEN_HEIGHT - BUTTON_SIZE * 4, BUTTON_SIZE,
                                      BUTTON_SIZE), 5,  1, [2], getattr(grid, 'move_block_right')))
    buttons.append(Button(screen, BUTTON_COLOR_BG, BUTTON_COLOR_FG,
                          pygame.Rect(SCREEN_WIDTH - BUTTON_SIZE + 1, SCREEN_HEIGHT - BUTTON_SIZE * 3, BUTTON_SIZE,
                                      BUTTON_SIZE), 5,  0, [2], getattr(grid, 'rotate_block')))
    buttons.append(Button(screen, BUTTON_COLOR_BG, BUTTON_COLOR_FG,
                          pygame.Rect(SCREEN_WIDTH - BUTTON_SIZE + 1, SCREEN_HEIGHT - BUTTON_SIZE * 2, BUTTON_SIZE,
                                      BUTTON_SIZE), 5,  3, [2], getattr(grid, 'move_block_down')))
    buttons.append(Button(screen, BUTTON_COLOR_BG, BUTTON_COLOR_FG,
                          pygame.Rect(SCREEN_WIDTH - BUTTON_SIZE + 1, SCREEN_HEIGHT - BUTTON_SIZE, BUTTON_SIZE,
                                      BUTTON_SIZE), 5,  4, [2], getattr(grid, 'move_block_to_bottom')))

screen.fill(BACK_COLOR)
# Call restart to initialise start state
restart()
# Update game_state and perform one draw call to osd and grid so that pause screen draws correct objects
game_state = GameState_PAUSED
osd.update_values(grid.score, grid.level, grid.next_block)
grid._draw_grid(DEBUG)
text_display_counter = 0
def run():
    global DEBUG
    global game_state
    global text_display_counter
    global down_held
    global grid
    global osd
    deltaTime = clock.tick(FPS)
    # Keybinds
    for event in pygame.event.get():
        # Debug functions
        if DEBUG > 0:
            # Debug level incrementer / decrementer - numpad + and -
            if event.type == pygame.KEYDOWN and event.key == pygame.K_PAGEUP:
                DEBUG = min(DEBUG + 1, 10)
                print("Debug level = {}".format(DEBUG))
            if event.type == pygame.KEYDOWN and event.key == pygame.K_PAGEDOWN:
                DEBUG = max(1, DEBUG - 1)
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

        down_held = False

        if game_state == GameState_PLAYING or game_state == GameState_PAUSED:
            if event.type == pygame.KEYUP and event.key == pygame.K_p:
                pause_toggle()

        # Sends x,y coords to each button
        # Fires for all buttons if PLAYING, else just fire for admin buttons (pause / restart)
        if event.type == pygame.MOUSEBUTTONUP and event.button == 1:
            for button in buttons:
                button.end_click_event(game_state, *pygame.mouse.get_pos())
        elif event.type == pygame.MOUSEBUTTONDOWN and event.button == 1:
            for button in buttons:
                button.start_click_event(game_state, *pygame.mouse.get_pos())

        if game_state == GameState_PLAYING:
            if event.type == pygame.KEYDOWN:
                grid.still_moving_counter = 0
            # Rotate block
            if event.type == pygame.KEYDOWN and event.key == pygame.K_x:
                grid.rotate_block()
            if event.type == pygame.KEYDOWN and event.key == pygame.K_z:
                grid.rotate_block(True)
            if event.type == pygame.KEYDOWN and event.key == pygame.K_SPACE:
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
            if event.type == pygame.KEYUP and event.key == pygame.K_r:
                restart()
        if game_state == GameState_GAMEOVER:
            if event.type == pygame.KEYUP and event.key == pygame.K_r:
                restart()
    if game_state == GameState_PLAYING:

        # Perform additional updates to block if we want to go down faster
        if down_held:
            grid.update_block(DEBUG, deltaTime * max(.5, SPEED_MULTIPLIER - grid.level))
        # Transition to game over state if grid flags a game over
        if grid.state == grid.GridState_GAMEOVER:
            game_state = GameState_GAMEOVER

        grid.update(DEBUG, deltaTime)
        osd.update_values(grid.score, grid.level, grid.next_block)

    elif game_state == GameState_PAUSED or game_state == GameState_GAMEOVER:
        renders = []

        text_display_counter += deltaTime
        if text_display_counter >= 600:
            if text_display_counter >= 1200:
                text_display_counter = 0
            text_color = BACK_COLOR
        else:
            text_color = (255, 255, 255)

        if game_state == GameState_PAUSED:
            text = ["Pause", "Press P to play"]
        elif game_state == GameState_GAMEOVER:
            text = ["Game Over", "Press R to restart"]
        for i in range(len(text)):
            if i == 0:
                renders.append(PAUSED_FONT.render(text[i], True, text_color))
            else:
                renders.append(PAUSED_SUB_FONT.render(text[i], True, text_color))

        for i in range(len(renders)):
            pos = ((SCREEN_WIDTH - OSD_WIDTH) / 2 - renders[i].get_width() / 2,
                   SCREEN_HEIGHT / 2 - renders[i].get_height() / 2 + (renders[i].get_height() * i))
            pygame.draw.rect(screen, BACK_COLOR, pygame.Rect(pos, (renders[i].get_width(), renders[i].get_height())))
            screen.blit(renders[i], pos)

    osd.draw(DEBUG)
    for button in buttons:
        button.draw(DEBUG, game_state)
    pygame.display.flip()


# while True:
#     run()
pygame.display.setup(run)

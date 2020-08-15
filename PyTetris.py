#!/usr/bin/python
import pygame
from modules.grid import Grid
from modules.osd import OSD
from modules.button import Button
from modules.globals import *

# setup pygame instance
pygame.display.init()
screen = pygame.display.set_mode((SCREEN_WIDTH, SCREEN_HEIGHT))
pygame.display.set_caption(CAPTION)
clock = pygame.time.Clock()

# js compiler does not like enums, setting varaibles instead for state tracking.
GameState_PAUSED = 0
GameState_GAMEOVER = 1
GameState_PLAYING = 2

grid = None
osd = OSD(screen, pygame.Rect(0, 0, SCREEN_WIDTH - OSD_WIDTH, OSD_HEIGHT), 2, 3, 6)
buttons = []


# functionised pause for button calls
def pause_toggle():
    global game_state
    global text_display_counter
    text_display_counter = 0
    game_state = GameState_PLAYING if game_state != GameState_PLAYING else GameState_PAUSED


# functionised restart for button calls
def restart():
    global grid
    global down_held
    global game_state
    grid = Grid(screen)
    attach_buttons()
    down_held = False
    game_state = GameState_PLAYING


# Button definitions, each button passed a function that will be called on a valid click event
def attach_buttons():
    global buttons
    buttons = []
    buttons.append(Button(screen, pygame.Rect(SCREEN_WIDTH - BUTTON_SIZE + 1, BUTTON_SIZE,
                                              BUTTON_SIZE, BUTTON_SIZE),
                          5, 'pause', [GameState_PAUSED, GameState_PLAYING], pause_toggle))
    buttons.append(Button(screen, pygame.Rect(SCREEN_WIDTH - BUTTON_SIZE + 1, 0,
                                              BUTTON_SIZE, BUTTON_SIZE),
                          5, 'restart', [GameState_PAUSED, GameState_GAMEOVER, GameState_PLAYING], restart, 0))
    buttons.append(Button(screen, pygame.Rect(SCREEN_WIDTH - BUTTON_SIZE + 1, SCREEN_HEIGHT - BUTTON_SIZE * 5,
                                              BUTTON_SIZE, BUTTON_SIZE),
                          5, 'left', [GameState_PLAYING], getattr(grid, 'move_block_left')))
    buttons.append(Button(screen, pygame.Rect(SCREEN_WIDTH - BUTTON_SIZE + 1,
                                              SCREEN_HEIGHT - BUTTON_SIZE * 4, BUTTON_SIZE, BUTTON_SIZE),
                          5, 'right', [GameState_PLAYING], getattr(grid, 'move_block_right')))
    buttons.append(Button(screen, pygame.Rect(SCREEN_WIDTH - BUTTON_SIZE + 1, SCREEN_HEIGHT - BUTTON_SIZE * 3,
                                              BUTTON_SIZE, BUTTON_SIZE),
                          5, 'rotate', [GameState_PLAYING], getattr(grid, 'rotate_block')))
    buttons.append(Button(screen, pygame.Rect(SCREEN_WIDTH - BUTTON_SIZE + 1, SCREEN_HEIGHT - BUTTON_SIZE * 2,
                                              BUTTON_SIZE, BUTTON_SIZE),
                          5, 'down', [GameState_PLAYING], getattr(grid, 'move_block_down')))
    buttons.append(Button(screen, pygame.Rect(SCREEN_WIDTH - BUTTON_SIZE + 1, SCREEN_HEIGHT - BUTTON_SIZE,
                                              BUTTON_SIZE, BUTTON_SIZE),
                          5, 'bottom', [GameState_PLAYING], getattr(grid, 'move_block_to_bottom')))


# perform a couple of update / draw calls so that the game window looks correct when inilalized in a paused state
screen.fill(BACK_COLOR)
restart()
game_state = GameState_PAUSED
osd.update_values(grid.score, grid.level, grid.next_block)
grid._draw_grid(DEBUG)
text_display_counter = 0


# main loop, must be a paramaterless function as apposed to a while loop so we are non blocking for the js compiler
def run():
    # Pull in global variables so that run function remains paramaterless
    global DEBUG
    global game_state
    global text_display_counter
    global down_held
    global grid
    global osd
    deltaTime = clock.tick(FPS)

    # main event loop (mostly for keyboard)
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
                grid._create_block()
            # Respawn the grid with custom array
            if event.type == pygame.KEYDOWN and event.key == pygame.K_2:
                grid.grid = [[0 for x in range(BLOCK_WIDTH)] for y in range(BLOCK_HEIGHT)]
            # Print grid array to console
            if event.type == pygame.KEYDOWN and event.key == pygame.K_3:
                grid.print_grid()
            # Print block array to console
            if event.type == pygame.KEYDOWN and event.key == pygame.K_4:
                grid.current_block.print_block()
            # Increase level
            if event.type == pygame.KEYDOWN and event.key == pygame.K_5:
                grid.level = min(grid.level + 1, 100)
                grid._set_tick()
                print("Level = {}".format(grid.level))
            # Decrease level
            if event.type == pygame.KEYDOWN and event.key == pygame.K_6:
                grid.level = max(0, grid.level + 1)
                grid._set_tick()
                print("Level = {}".format(grid.level))
            # Increase lines
            if event.type == pygame.KEYDOWN and event.key == pygame.K_7:
                grid.lines += 1
                grid._check_levelup()
                print("Lines = {}".format(grid.lines))
                print("Tick = {}".format(grid.tick))

        # reset down_held so that we recheck
        down_held = False

        if event.type == pygame.QUIT:
            pygame.quit()
            exit()
        # restart game
        if event.type == pygame.KEYUP and event.key == pygame.K_r:
            restart()

        if game_state == GameState_PLAYING or game_state == GameState_PAUSED:
            if event.type == pygame.KEYUP and event.key == pygame.K_p:
                pause_toggle()

        if event.type == pygame.MOUSEBUTTONDOWN and event.button == 1:
            for button in buttons:
                button.start_click_event(game_state, *pygame.mouse.get_pos())

        if game_state == GameState_PLAYING:
            # rotate block +90deg
            if event.type == pygame.KEYDOWN and event.key == pygame.K_x:
                grid.rotate_block()
            # rotate block +270deg (-90deg)
            if event.type == pygame.KEYDOWN and event.key == pygame.K_z:
                grid.rotate_block(True)
            # move block as far down as it will go
            if event.type == pygame.KEYDOWN and event.key == pygame.K_SPACE:
                grid.move_block_to_bottom()
            # move block right
            if event.type == pygame.KEYDOWN and event.key == pygame.K_RIGHT:
                grid.move_block_right()
            # move block left
            if event.type == pygame.KEYDOWN and event.key == pygame.K_LEFT:
                grid.move_block_left()
            # track if the down key is being held
            if event.type == pygame.KEYDOWN and event.key == pygame.K_DOWN:
                down_held = True

    if game_state == GameState_PLAYING:
        # perform additional updates to block if we want to go down faster
        if down_held:
            grid.update_block(DEBUG, deltaTime * max(.5, SPEED_MULTIPLIER - grid.level))
        # transition to game over state if grid flags a game over
        if grid.state == grid.GridState_GAMEOVER:
            game_state = GameState_GAMEOVER

        # update grid and osd
        grid.update(DEBUG, deltaTime)
        osd.update_values(grid.score, grid.level, grid.next_block)

    # display pause / restart state blinking text
    elif game_state == GameState_PAUSED or game_state == GameState_GAMEOVER:
        renders = []

        # blink text color on and off every 600 ms
        text_display_counter += deltaTime
        if text_display_counter >= 600:
            if text_display_counter >= 1200:
                text_display_counter = 0
            text_color = PAUSE_COLOR
        else:
            text_color = (255, 255, 255)

        # generate appropriate text elements for state
        if game_state == GameState_PAUSED:
            text = ["Pause", "Press P to play"]
        elif game_state == GameState_GAMEOVER:
            text = ["Game Over", "Press R to restart"]

        # render each text item
        for i in range(len(text)):
            if i == 0:
                renders.append(PAUSED_FONT.render(text[i], True, text_color))
            else:
                renders.append(PAUSED_SUB_FONT.render(text[i], True, text_color))
        # get max width of rect
        max_width = max(r.get_width() for r in renders)
        # get sum of all renders heights for a max height, round up to the nearest BLOCK_SIZE
        max_height = -(-sum(r.get_height() for r in renders) // BLOCK_SIZE) * BLOCK_SIZE
        # calculate a centered rectangle based on max_width and max_height
        render_rect = pygame.Rect(((SCREEN_WIDTH - OSD_WIDTH) / 2 - max_width / 2) - max_width / 40,
                                  8 * BLOCK_SIZE + OSD_HEIGHT, max_width + max_width / 20, max_height)
        # draw rect and outline
        pygame.draw.rect(screen, PAUSE_COLOR, render_rect)
        pygame.draw.rect(screen, GRID_COLOR, render_rect, 2)
        # blit each text item to an appropriate offset in the center of grid
        for i in range(len(renders)):
            # center and space the renders out in render_rect evenly
            pos = ((SCREEN_WIDTH - OSD_WIDTH) / 2 - renders[i].get_width() / 2,
                   8 * BLOCK_SIZE + OSD_HEIGHT + render_rect.height / len(renders) * i)
            screen.blit(renders[i], pos)

    # always draw osd and buttons
    osd.draw(DEBUG)
    for button in buttons:
        button.draw(DEBUG, game_state, deltaTime)

    pygame.display.flip()


# main loop
while True:
    run()


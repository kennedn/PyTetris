from modules.globals import *


####################################################################################
# draw a clickable button that performs an action
# {pygame.Surface} display - parent surface for blitting
# {pygame.Rect} rect - constraints of the button
# {int} pad - amount of padding for elements
# {string} b_type - type of button, determines what graphic to display in button
# {list<int>} valid_states - list of game states to enable button in
# {function} function - action to perform upon valid click event
class Button:
    def __init__(self, display, rect, pad, b_type, valid_states, function):
        self.display = display
        self.surface = pygame.Surface((rect.width, rect.height))
        self.rect = rect
        self.pad = pad
        self.rect_normal = pygame.Rect(pad, pad, rect.width - pad * 2, rect.height - pad * 2)
        self.b_type = b_type
        self.valid_states = valid_states
        self.function = function
        self.reverse_color = False

    # revert colors to 'unpressed' state, check if x,y are colliding and if gamestate is correct, if so run function
    def end_click_event(self, state, x, y):
        self.game_state = state
        self.reverse_color = False
        if self.rect.collidepoint(x, y) and state in self.valid_states:
            self.function()

    # check if x,y are colliding and if gamestate is correct, if so, reverse colors for a 'pressed' look
    def start_click_event(self, state, x, y):
        self.game_state = state
        if self.rect.collidepoint(x, y) and state in self.valid_states:
            self.reverse_color = True

    # Handle types, import and draws a list of points for icons (polygon) or render and blit text for text types
    def draw_type(self, debug):
        points = None
        if self.b_type == 'rotate':
            from icons.rotate import points
        elif self.b_type == 'left':
            from icons.left import points
        elif self.b_type == 'right':
            from icons.right import points
        elif self.b_type == 'down':
            from icons.down import points
        elif self.b_type == 'bottom':
            from icons.bottom import points
        elif self.b_type == 'restart':
            render = BUTTON_FONT.render("R", True, BUTTON_COLOR_FG)
            self.surface.blit(render, pygame.Rect(self.rect_normal.x + (self.rect_normal.width / 2 - render.get_width() / 2),
                                                  self.rect_normal.y + (self.rect_normal.width / 2 - render.get_height() / 2),
                                                  self.rect_normal.width, self.rect_normal.height))
        elif self.b_type == 'pause':
            render = BUTTON_FONT.render("P", True, BUTTON_COLOR_FG)
            self.surface.blit(render, pygame.Rect(self.rect_normal.x + (self.rect_normal.width / 2 - render.get_width() / 2),
                                                  self.rect_normal.y + (self.rect_normal.width / 2 - render.get_height() / 2),
                                                  self.rect_normal.width, self.rect_normal.height))
        if points is not None:
            pygame.draw.polygon(self.surface, BUTTON_COLOR_FG, points)

    def draw(self, debug, state):
        self.surface.fill((BACK_COLOR))
        # if we are in a valid game state
        if state in self.valid_states:
            width = 0 if self.reverse_color else 2
            if debug >= 2:
                pygame.draw.rect(self.surface, (128, 0, 128), self.rect, 1)
            pygame.draw.rect(self.surface, BUTTON_COLOR_BG, self.rect_normal, width)
            self.draw_type(debug)
        self.display.blit(self.surface, self.rect)

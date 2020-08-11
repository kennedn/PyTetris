from modules.globals import *
class Button:
    def __init__(self, display, bg_color, fg_color, rect, pad, b_type, valid_states, function):
        self.display = display
        self.surface = pygame.Surface((rect.width, rect.height))#, pygame.SRCALPHA, 32)
        #self.surface = self.surface.convert_alpha()
        self.bg_color = bg_color
        self.fg_color = fg_color
        self.rect = rect
        self.pad = pad
        self.rect_normal = pygame.Rect(pad, pad, rect.width - pad * 2, rect.height - pad * 2)
        self.b_type = b_type
        self.valid_states = valid_states
        self.function = function
        self.reverse_color = False

    def end_click_event(self, state, x, y):
        self.game_state = state
        self.reverse_color = False
        if self.rect.collidepoint(x, y) and state in self.valid_states:
            self.function()

    def start_click_event(self, state, x, y):
        self.game_state = state
        if self.rect.collidepoint(x, y) and state in self.valid_states:
            self.reverse_color = True

    # Handle types, import and draws a list of points for icons (polygon) or render and blit text for text types
    def draw_type(self, debug):
        if self.b_type == 0:
            from icons.rotate import points
        elif self.b_type == 1:
            from icons.left import points
        elif self.b_type == 2:
            from icons.right import points
        elif self.b_type == 3:
            from icons.down import points
        elif self.b_type == 4:
            from icons.bottom import points

        if self.b_type < 5:
            pygame.draw.polygon(self.surface, self.fg_color, points)
        elif self.b_type == 5:
            render = BUTTON_FONT.render("P", True, self.fg_color)
            self.surface.blit(render, pygame.Rect(self.rect_normal.x + (self.rect_normal.width / 2 - render.get_width() / 2),
                                       self.rect_normal.y + (self.rect_normal.width / 2 - render.get_height() / 2), self.rect_normal.width, self.rect_normal.height))
        elif self.b_type == 6:
            render = BUTTON_FONT.render("R", True, self.fg_color)
            self.surface.blit(render, pygame.Rect(self.rect_normal.x + (self.rect_normal.width / 2 - render.get_width() / 2),
                                                  self.rect_normal.y + (self.rect_normal.width / 2 - render.get_height() / 2), self.rect_normal.width, self.rect_normal.height))

    def draw(self, debug, state):
        self.surface.fill((BACK_COLOR))
        if state in self.valid_states:
            width = 0 if self.reverse_color else 2
            if debug >= 2:
                pygame.draw.rect(self.surface, (128, 0, 128), self.rect, 1)
            pygame.draw.rect(self.surface, self.bg_color, self.rect_normal, width)
            self.draw_type(debug)
        self.display.blit(self.surface, self.rect)

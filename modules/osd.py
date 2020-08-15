from modules.globals import *
if PYJSDL:
    import pyjsdl as pygame
else:
    import pygame


####################################################################################
# draws on screen statistics about the current game, e.g level, score and next block
# {pygame.Surface} display - parent surface for blitting
# {pygame.Rect} rect - constraints of the OSD
# {int} line_width - width of lines / rectangles drawn
# {int} rect_pad - amount of padding for non text elements
# (int) text_pad - amount of padding for text elements
class OSD:
    def __init__(self, display, rect, line_width, rect_pad, text_pad):
        self.display = display
        self.surface = pygame.Surface((rect.width, rect.height))
        self.rect = rect
        self.line_width = line_width
        self.pad = rect_pad
        self.text_pad = text_pad
        self.rects = {}
        self.blits = {}
        self.init_display()

    # sets up two dictionaries, rects and blits, rects contains a set of rectangles to be drawn, blits
    # contains an initial set of surfaces and paired (x,y) coords
    def init_display(self):
        # percent of width that middle rect should fill
        c_scale = .4
        # percent of width that remaining two rects should fill
        r_scale = 1 - c_scale * 2

        self.rects['left'] = pygame.Rect(0, self.pad, self.rect.width * c_scale - self.pad,
                                         self.rect.height - self.pad * 2)
        self.rects['middle'] = pygame.Rect(self.rect.width * c_scale + self.pad, self.pad,
                                           self.rect.width * r_scale - self.pad * 2, self.rect.height - self.pad * 2)
        self.rects['right'] = pygame.Rect(self.rect.width - self.rect.width * c_scale + self.pad, self.pad,
                                          self.rect.width * c_scale - self.pad, self.rect.height - self.pad * 2)
        self.blits['score_title'] = (OSD_FONT.render("Score:", True, (255, 255, 255)),
                                     (self.rects['left'].x + self.text_pad, self.rects['left'].y + self.text_pad / 2,
                                      self.rects['left'].width, self.rects['left'].height))
        self.blits['score'] = (OSD_FONT.render("0", True, (255, 255, 255)),
                               (self.rects['left'].x + self.text_pad,
                                self.rects['left'].y + self.rects['left'].height / 2,
                                self.rects['left'].width, self.rects['left'].height))
        self.blits['level_title'] = (OSD_FONT.render("Level:", True, (255, 255, 255)),
                                     (self.rects['right'].x + self.text_pad,
                                      self.rects['right'].y + self.text_pad / 2,
                                      self.rects['right'].width, self.rects['right'].height))
        self.blits['level'] = (OSD_FONT.render("0", True, (255, 255, 255)),
                               (self.rects['right'].x + self.text_pad,
                                self.rects['right'].y + self.rects['right'].height / 2,
                                self.rects['right'].width, self.rects['right'].height))

    # generate new surfaces for dictionary of blits using current game values
    def update_values(self, score, level, next_block):
        self.blits['score'] = (OSD_FONT.render(str(score), True, (255, 255, 255)), self.blits['score'][1])
        self.blits['level'] = (OSD_FONT.render(str(level), True, (255, 255, 255)), self.blits['level'][1])

        # call next_block draw with False flag to generate a surface (next_block.screen)
        # we can then access the drawn tetromino but without blitting to main display
        next_block.draw(DEBUG, False)

        # block type 2 (square tetromino) needs scaled a little differently due to being 2x2 instead of 3x3
        if next_block.block_type == 2:
            scaled_block = pygame.transform.smoothscale(next_block.screen,
                                                        (int(self.rects['middle'].height * .66 - self.pad * 2),
                                                         int(self.rects['middle'].height * .66 - self.pad * 2)))
        else:
            scaled_block = pygame.transform.smoothscale(next_block.screen,
                                                        (int(self.rects['middle'].height - self.pad * 2),
                                                         int(self.rects['middle'].height - self.pad * 2)))
        # store scaled block and calculated x,y coords
        self.blits['block'] = (scaled_block,
                               (self.rects['middle'].x + self.rects['middle'].width / 2 - scaled_block.get_width() / 2,
                                self.rects['middle'].y + self.rects['middle'].height / 2 - scaled_block.get_height() / 2))

    def draw(self, debug):
        self.surface.fill(BACK_COLOR)

        # draw rectangles where we have defined our display elements
        for r in self.rects.values():
            if debug >= 2:
                pygame.draw.rect(self.surface, (128, 0, 128), r)
            pygame.draw.rect(self.surface, OSD_COLOR, r, self.line_width)

        # blit each (surface, position) pair to our internal surface
        for b in self.blits.values():
            self.surface.blit(b[0], b[1])
        # blit the surface to our main display
        self.display.blit(self.surface, self.rect)

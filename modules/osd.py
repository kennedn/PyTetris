from modules.globals import *


# Displays game statistics
class OSD:
    def __init__(self, main_surface, rect, line_width, radius, rect_pad, text_pad, color):
        self.display = main_surface
        self.surface = pygame.Surface((rect.width, rect.height))
        self.rect = rect
        self.line_width = line_width
        self.radius = radius
        self.pad = rect_pad
        self.text_pad = text_pad
        self.color = color

        self.rects = {}
        self.blits = {}
        self.init_display()
        #self.update_values(0, 1, next_block)

    def init_display(self):
        # Generate Rectangles for each display element
        big = .4
        small = 1 - big * 2
        self.rects['left'] = pygame.Rect(self.pad, self.pad, self.rect.width * big - self.pad * 2,
                                         self.rect.height - self.pad * 2)
        self.rects['middle'] = pygame.Rect(self.rect.width * big + self.pad, self.pad,
                                           self.rect.width * small - self.pad * 2, self.rect.height - self.pad * 2)
        self.rects['right'] = pygame.Rect(self.rect.width - self.rect.width * big + self.pad, self.pad,
                                          self.rect.width * big - self.pad * 2, self.rect.height - self.pad * 2)
        self.blits['score_title'] = (OSD_FONT.render("Score:", True, (255, 255, 255)), 
                                     (self.rects['left'].x + self.text_pad, self.rects['left'].y + self.text_pad / 2,
                                      self.rects['left'].width, self.rects['left'].height))
        self.blits['score'] = (OSD_FONT.render("0", True, (255, 255, 255)),
                               (self.rects['left'].x + self.text_pad, self.rects['left'].y + self.rects['left'].height / 2,
                                self.rects['left'].width, self.rects['left'].height))
        self.blits['level_title'] = (OSD_FONT.render("Level:", True, (255, 255, 255)),
                                     (self.rects['right'].x + self.text_pad, self.rects['right'].y + self.text_pad / 2,
                                      self.rects['right'].width, self.rects['right'].height))
        self.blits['level'] = (OSD_FONT.render("0", True, (255, 255, 255)),
                               (self.rects['right'].x + self.text_pad, self.rects['right'].y + self.rects['right'].height / 2,
                                self.rects['right'].width, self.rects['right'].height))

    def update_values(self, score, level, next_block):
        self.blits['score'] = (OSD_FONT.render(str(score), True, (255, 255, 255)), self.blits['score'][1])
        self.blits['level'] = (OSD_FONT.render(str(level), True, (255, 255, 255)), self.blits['level'][1])
        next_block.draw(DEBUG, False)
        if next_block.block_type == 2:
            scaled_block = pygame.transform.smoothscale(next_block.screen,
                                                       (int(self.rects['middle'].height * .66 - self.pad * 2),
                                                        int(self.rects['middle'].height * .66 - self.pad * 2)))
            self.blits['block'] = (scaled_block,
                                   (self.rects['middle'].x + self.rects['middle'].width / 2 - scaled_block.get_width() / 2,
                                    self.rects['middle'].y + self.rects['middle'].height / 2 - scaled_block.get_height() / 2))
        else:
            scaled_block = pygame.transform.smoothscale(next_block.screen,
                                                       (int(self.rects['middle'].height - self.pad * 2),
                                                        int(self.rects['middle'].height - self.pad * 2)))
            #self.blits['block'] = (scaled_block,
            #                       (self.rects['middle'].x + self.pad, self.rects['middle'].y + self.pad))
            self.blits['block'] = (scaled_block,
                                   (self.rects['middle'].x + self.rects['middle'].width / 2 - scaled_block.get_width() / 2,
                                    self.rects['middle'].y + self.rects['middle'].height / 2 - scaled_block.get_height() / 2))

    def draw(self, debug):
        # Call next_block draw with False flag to generate a surface we can access but don't draw it to main display
        self.surface.fill((BACK_COLOR))

        # Draw curved rectangles where we have defined our display elements
        for r in self.rects.values():
            if debug >= 2:
                pygame.draw.rect(self.surface, (128, 0, 128), r)
            pygame.draw.rect(self.surface, self.color, r, self.line_width)

        # Blit each (surface, position) pair to our internal surface
        for b in self.blits.values():
            self.surface.blit(b[0], b[1])
        # Blit the surface to our main display
        self.display.blit(self.surface, self.rect)



import pygame
from globals import *


# Displays game statistics
class OSD:
    def __init__(self, main_surface, next_block, rect, line_width, radius, rect_pad, text_pad, color):
        self.score = 0
        self.level = 1
        self.display = main_surface
        self.surface = pygame.Surface((rect.width, rect.height))
        self.next_block = next_block
        self.rect = rect
        self.line_width = line_width
        self.color = color
        self.radius = radius
        self.pad = rect_pad
        self.text_pad = text_pad

    def draw(self):
        self.surface.fill((0, 0, 0))
        blits = []
        left_rect = pygame.Rect(0 + self.pad, self.pad, self.rect.width * .4 - self.pad * 2,
                                self.rect.height - self.pad * 2)
        pygame.draw.rect(self.surface, self.color, left_rect, self.line_width, self.radius)
        blits.append((OSD_FONT.render("Score:", True, (255, 255, 255)), (left_rect.x + self.text_pad, left_rect.y,
                                                                         left_rect.width, left_rect.height)))
        blits.append((OSD_FONT.render(str(self.score), True, (255, 255, 255)),
                      (left_rect.x + self.text_pad, left_rect.y + left_rect.height / 2,
                       left_rect.width, left_rect.height)))

        right_rect = pygame.Rect(self.rect.width - self.rect.width * .4 + self.pad, self.pad,
                                 self.rect.width * .4 - self.pad * 2,
                                 self.rect.height - self.pad * 2)
        pygame.draw.rect(self.surface, self.color, right_rect, self.line_width, self.radius)
        blits.append((OSD_FONT.render("Level:", True, (255, 255, 255)), (right_rect.x + self.text_pad, right_rect.y,
                                                                         right_rect.width, right_rect.height)))
        blits.append((OSD_FONT.render(str(self.level), True, (255, 255, 255)),
                      (right_rect.x + self.text_pad, right_rect.y + right_rect.height / 2,
                       right_rect.width, right_rect.height)))


        self.next_block.draw(DEBUG, False)
        mid_rect = pygame.Rect(self.rect.width / 2 - self.rect.width * .2 / 2 + self.pad, self.pad,
                                                    self.rect.width * .2 - self.pad * 2,
                                                    self.rect.height - self.pad * 2)
        pygame.draw.rect(self.surface, self.color, mid_rect, self.line_width, self.radius)
        blits.append((pygame.transform.scale(self.next_block.screen,
                                                   (mid_rect.width - self.pad, mid_rect.height - self.pad)), mid_rect))


        for b in blits:
            self.surface.blit(b[0], b[1])
        self.display.blit(self.surface, self.rect)



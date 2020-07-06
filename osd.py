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

    def update_values(self, score, level, next_block):
        self.score = score
        self.level = level
        self.next_block = next_block

    def draw(self, debug):
        # Call next_block draw with False flag to generate a surface we can access but don't draw it to main display
        self.next_block.draw(DEBUG, False)
        self.surface.fill((0, 0, 0))
        blits = []
        # Generate Rectangles for each display element
        left_rect = pygame.Rect(0 + self.pad, self.pad, self.rect.width * .4 - self.pad * 2,
                                self.rect.height - self.pad * 2)
        right_rect = pygame.Rect(self.rect.width - self.rect.width * .4 + self.pad, self.pad,
                                 self.rect.width * .4 - self.pad * 2,
                                 self.rect.height - self.pad * 2)
        mid_rect = pygame.Rect(self.rect.width / 2 - self.rect.width * .2 / 2 + self.pad, self.pad,
                               self.rect.width * .2 - self.pad * 2,
                               self.rect.height - self.pad * 2)
        # Highlight rectangles if in debug
        if debug >= 2:
            pygame.draw.rect(self.surface, (128, 0, 128), left_rect)
            pygame.draw.rect(self.surface, (128, 0, 128), mid_rect)
            pygame.draw.rect(self.surface, (128, 0, 128), right_rect)

        # Draw curved rectangles where we have defined our display elements
        pygame.draw.rect(self.surface, self.color, left_rect, self.line_width, self.radius)
        pygame.draw.rect(self.surface, self.color, right_rect, self.line_width, self.radius)
        pygame.draw.rect(self.surface, self.color, mid_rect, self.line_width, self.radius)

        # Create a list of (surface, position) pairs for elements we want to blit to the display
        blits.append((OSD_FONT.render("Score:", True, (255, 255, 255)), (left_rect.x + self.text_pad, left_rect.y,
                                                                         left_rect.width, left_rect.height)))
        blits.append((OSD_FONT.render(str(self.score), True, (255, 255, 255)),
                      (left_rect.x + self.text_pad, left_rect.y + left_rect.height / 2,
                       left_rect.width, left_rect.height)))
        blits.append((OSD_FONT.render("Level:", True, (255, 255, 255)), (right_rect.x + self.text_pad, right_rect.y,
                                                                         right_rect.width, right_rect.height)))
        blits.append((OSD_FONT.render(str(self.level), True, (255, 255, 255)),
                      (right_rect.x + self.text_pad, right_rect.y + right_rect.height / 2,
                       right_rect.width, right_rect.height)))
        # Scale down a copy of the next_block surface to fit in mid_rect
        # If we are a type 2 tetronimo (2x2 square), scale accordingly to maintain consistency with 3x3 tetronimos
        if self.next_block.block_type == 2:
            scaled_block = pygame.transform.scale(self.next_block.screen,
                                                  (int(mid_rect.width * .66 - self.pad * 2),
                                                   int(mid_rect.width * .66 - self.pad * 2)))
            blits.append((scaled_block, (int(mid_rect.x + mid_rect.width * .166 + self.pad),
                                         int(mid_rect.y + self.pad))))
        else:
            scaled_block = pygame.transform.scale(self.next_block.screen,
                                                  (mid_rect.width - self.pad * 2, mid_rect.width - self.pad * 2))
            blits.append((scaled_block, (mid_rect.x + self.pad, mid_rect.y + self.pad)))

        # Blit each (surface, position) pair to our internal surface
        for b in blits:
            self.surface.blit(b[0], b[1])
        # Blit the surface to our main display
        self.display.blit(self.surface, self.rect)



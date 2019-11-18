# Spawns a text floater - move a piece of text upwards until timeout is reach, instance is then marked as dead
# Should be culled outside of class in a list.
class OSD:
    def __init__(self, screen, timeout, font, color, text, x, y):
        self.text = font.render(str(text), True, color)
        self.position = (x - (self.text.get_width() / 2), y - (self.text.get_height() / 2))
        self.screen = screen
        self.timeout = timeout
        self.counter = 0
        self.alive = True

    def update(self, dt):
        self.counter += dt
        if self.counter < self.timeout:
            self.position = (self.position[0], self.position[1] - 1)
            self.screen.blit(self.text, self.position)
        else:
            self.alive = False

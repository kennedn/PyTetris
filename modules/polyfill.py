# math.clamp implementation using min, max
def clamp(min_x, max_x, x):
    return max(min_x, min(max_x, x))


# enum helper, for 2.7 compatibility
def enum(**enums):
    return type('Enum', (), enums)


# pjsdl doesn't implement pygame.Color.lerp, function takes two tuples and a lerp amount, returns lerped tuple
def lerp_tuple(color1, color2, amount):
    # sanity check passed tuple sizes
    if len(color1) != 3 or len(color2) != 3:
        return 0, 0, 0
    # return a tuple where each lerped color is calculated by doing color2 + difference1&2 * amount
    return tuple([color2[i] + int((color1[i] - color2[i]) * amount) for i in range(len(color1))])

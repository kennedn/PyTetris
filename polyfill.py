def clamp(min_x, max_x, x):
    return max(min_x, min(max_x, x))

def enum(**enums):
    return type('Enum', (), enums)

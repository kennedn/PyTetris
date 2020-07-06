# Math.clamp implementation using min, max
def clamp(min_x, max_x, x):
    return max(min_x, min(max_x, x))


# Enum helper, for 2.7 compatibility
def enum(**enums):
    return type('Enum', (), enums)

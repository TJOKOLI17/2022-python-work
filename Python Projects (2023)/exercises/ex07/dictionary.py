"""EX07 - Making Dictionary Funtions."""
"""python -m mypy exercises/dictionary.py"""  # Shortcut to type check code

__author__ = "730598888" 


def invert(rev: dict[str, str]) -> dict[str, str]:
    """Inverts a dictionary."""
    new_dict: dict[str, str]
    new_dict = {}        
    
    for x in rev:
        new_dict[rev[x]] = x

    if len(new_dict) < len(rev):
        raise KeyError("Two or more key-value pairs share the same value")
    else:
        return new_dict


def favorite_color(colors: dict[str, str]) -> str:
    """Gets the most frequent color in a dictionary OR returns first color if there is a tie."""
    conv: list[str] = list()
    # TURNS COLORS INTO A LIST OF ITS VALUES
    for color in colors:
        conv.append(colors[color])

    # Creates a "new" dictionary with the colors as keys and their frequency as values.
    i: int = 0
    j: int = 0
    count: int = 0
    new: dict[str, int] = {}
    while i < len(conv):
        count = 0
        j = 0
        while j < len(conv):
            if conv[i] == conv[j]:
                count += 1
                j += 1
            else:
                j += 1
        new[conv[i]] = count         
        i += 1

    # Reverses "new" dictionary so that calling the highest number returns the most frequent color.
    final: dict[int, str] = {}
    for x in new:
        final[new[x]] = x

    # Creates a list wiht only the values of the "new" dictionary (the frequencies of the colors) 
    nums: list[int] = []
    for val in new:
        nums.append(new[val])

    # Checks to see if there is a tie for most frequent color
    c: int = 0
    counter: int = 0
    while c < len(nums):
        if nums[c] == max(nums):
            counter += 1
        c += 1

    if counter >= 2:
        return conv[0]
    else:
        return (final[max(nums)])


def count(keys: list[str]) -> dict[str, int]:
    """Creates a dictionary with list-values as keys and their frequencies as values."""
    order: dict[str, int] = {} 
    i: int = 0
    j: int = 0
    value: int = 0

    while i < len(keys):
        value = 0
        j = 0
        value = 0
        j = 0
        while j < len(keys):
            if keys[i] == keys[j]:
                value += 1
                j += 1
            else:
                j += 1
        order[keys[i]] = value         
        i += 1

    return order
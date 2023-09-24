"""EX05 - More List Utility functions - more coding what already exits >:(."""
"""python -m lessons.list"""  # Shortcut to run code

__author__ = "730598888"


def only_evens(xs: list[int]) -> list[int]:
    """Returns only even values in a list."""
    i: int = 0
    evens: list[int] = list()

    while i < len(xs):
        if xs[i] % 2 == 0:
            evens.append(xs[i])
            i += 1
        else:
            i += 1
    return evens


def concat(xs: list[int], ys: list[int]) -> list[int]:
    """Creates a new list with the all the values of the 1st and 2nd list."""
    i: int = 0
    j: int = 0
    new_list: list[int] = []

    while i < len(xs):
        new_list.append(xs[i])
        i += 1
   
    while j < len(ys):
        new_list.append(ys[j])
        j += 1
    
    return new_list


def sub(xs: list[int], y: int, z: int) -> list[int]:
    """Will return the values between 2 indexes.""" 
    if y < 0:
        y = 0

    i: int = y
    subset: list[int] = []
    
    if len(xs) == 0 or y > len(xs) or z <= 0:
        return subset
    
    if z > len(xs) - 1:
        z = len(xs) - 1
        while i >= y and i <= z:
            subset.append(xs[i])
            i += 1
    else:
        while i >= y and i < z:
            subset.append(xs[i])
            i += 1

    print(str(y))
    print(str(z))

    return subset
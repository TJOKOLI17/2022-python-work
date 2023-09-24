"""EX04 - List Utility functions - coding what already exits >:(."""
"""python -m exercises.ex04_utils"""  # Shortcut to run code

__author__ = "730598888"


def all(group: list[int], num: int) -> bool:
    """Checks if all values in the list are equal to the given int."""
    i: int = 0
    is_same: bool = False
    while i < len(group):
        if len(group) == 0:
            return is_same

        if group[i] == num:
            is_same = True
            i += 1
        else:
            is_same = False
            return is_same
    
    return is_same


def max(group: list[int]) -> int:
    """Returns the largest number in the list."""
    j: int = 0
    highest: int = group[0]

    if len(group) == 0:
        raise ValueError("max() arg is an empty List")
    
    while j < len(group):    
        if highest < group[j]:
            highest = group[j]
            j += 1
        else:
            j += 1

    return highest


def is_equal(group1: list[int], group2: list[int]) -> bool:
    """Checks to see if the 2 lists are equal."""
    i: int = 0
    the_same: bool = False

    if len(group1) != len(group2):
        return the_same

    if len(group1) == 0 and len(group2) == 0:
        the_same = True

    while i < len(group1):
        if group1[i] == group2[i]:
            the_same = True
            i += 1
        else:
            the_same = False
            i += 1

    return the_same


print(all([11, 11, 110], 11))

print(is_equal([44, 22], [44, 22]))

print(max([59, 4, 345, 2, 2940]))
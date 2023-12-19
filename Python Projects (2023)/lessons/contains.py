"""An example of a list utility functions"""
"""python -m lessons.contains"""


# Function with 2 parameters
#  needle: value we are searching for
#  haystack: list of values we are searching in
# Return Type: bool
# Start from 1st index
# Loop through each index of list
        # Test: if equal to needle
# Return False

def contains(needle: str, haystack: list[str]) -> bool:
    i: int = 0

    while i < len(haystack):
        if haystack[i] == needle:
            return True
        else:
            i += 1

    return False

print(contains("hillo", ["hallo", "hillo", "hullo", "hollo"]))
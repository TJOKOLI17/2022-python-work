"""An example of a function definition"""
"""python -m lessons.function_def"""

x: int = (int(input("Pick a number for x: ")))
y: int = (int(input("Pick a number for y: ")))
z: int = (int(input("Pick a number for z: ")))

def my_max(a: int, b: int) -> int:
    """Returns the largest argument."""
    if a>= b:
        return a
    else:
        return b

print()
print("The greatest number of " + "(" + str(x) + " + " + str(z) + ")" + " and " + str(y) + " is: " + str(my_max(x+z,y)))

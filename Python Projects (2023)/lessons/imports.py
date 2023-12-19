"""Examples of importing in python"""
"""python -m lessons.imports"""

from lessons import helpers

# Alias a module / imported as another name
from lessons import helpers as hp

# Import names defined globally as a module
from lessons.helpers import powerful

def main() -> None:
    """Entrypoint of program"""
    print(hp.powerful(int(input("enter a number: ")),int(input("enter a number: "))))
    print(f"The answer: {helpers.THE_ANSWER}")

if __name__ == "__main__":
    main() 

"""EX01 - One Shot Wordle - A less cute step towards Wordle."""
"""python -m exercises.ex02_one_shot_wordle"""  # Shortcut to run code

__author__ = "730598888"

WHITE_BOX: str = "\U00002B1C"
GREEN_BOX: str = "\U0001F7E9"
YELLOW_BOX: str = "\U0001F7E8"

code: str = input("Enter a word of any length: ")
c_length: int = len(code)
guess: str = input(f"What is your {c_length}-letter guess: ")
g_length: int = len(guess)
i: int = 0
space: str = ""

while len(guess) != len(code):  # Checks to see is the guess is the same length as the code
    guess = input(f"That is not {c_length} letters! Try again: ")

while i < len(code):
    if guess[i] == code[i]:     # Checking for a right letter, right place
        space += GREEN_BOX
    else:
        j: int = 0      # Lines 23-29 are checking for a right letter, wrong place
        occurs: bool = False
        while occurs == (not True) and j < len(code):
            if guess[i] == code[j]: 
                occurs = True
                if occurs is True:
                    space += YELLOW_BOX
            else:
                j += 1

        if occurs is False:     # Checking for wrong letter, wrong place
            space += WHITE_BOX 
    i += 1

if guess == code:
    print(space + "\n" + "Woo! You got it!") 

else:
    print(space + "\n" + "Not quite. Play again soon!")
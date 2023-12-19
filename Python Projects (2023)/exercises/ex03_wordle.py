"""EX01 - Structured Wordle - basically Wordle."""
"""python -m exercises.ex03_wordle"""  # Shortcut to run code

__author__ = "730598888"

WHITE_BOX: str = "\U00002B1C"
GREEN_BOX: str = "\U0001F7E9"
YELLOW_BOX: str = "\U0001F7E8"

def main() -> None:
    """The entrypoint of the program and the main game loop."""
    code: str = input("Enter a word of any length: ")
    c_length: int = len(code)
    turns: int = 1
    won: bool = False
    while turns <= 6 and won is False:
        print(f"=== Turn {turns}/6 === ")
        guess: str = input_guess(c_length)
        print(emojified(guess, code))
        if guess == code:
            print()
            won = True
        else:
            print()
            turns += 1
    
    if won is True and turns <= 6:
        print(f"You won in {turns}/6 turns!")
    else:
        if won is False and turns > 6:
            print("X/6 - Sorry, try again tomorrow!")
        

def input_guess(g_length: int) -> str:
    """Creates user guess of correct length."""
    guess: str = input(f"Enter a {g_length} character word: ")
    
    while len(guess) != g_length:  # Checks to see is the guess is the same length as the code
        guess = input(f"That wasn't {g_length} chars! Try again: ")
        
    return guess


def contains_char(code: str, char: str) -> bool:
    """Checks to see if the letter occurs in the secret."""
    assert len(char) == 1
    j: int = 0 
    while j < len(code):
        if code[j] == char: 
            return True
        else:            
            j += 1

    return False


def emojified(guess: str, code: str) -> str:
    """Compares secret and answer, then returns emoji string."""
    i: int = 0
    space: str = ""
    assert len(guess) == len(code)

    while i < len(code):
        if guess[i] == code[i]:  # Checking for a right letter, right place
            space += GREEN_BOX
        else:
            if guess[i] != code[i]:
                if contains_char(code, guess[i]) is True:
                    space += YELLOW_BOX

            if contains_char(code, guess[i]) is False:  # Checking for wrong letter, wrong place
                space += WHITE_BOX 
        i += 1

    return space


if __name__ == "__main__":
    main()
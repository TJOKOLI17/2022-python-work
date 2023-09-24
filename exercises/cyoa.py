"""EX06 - Create my own game. Seems creatively independent... at first."""
from random import randint

"""python -m exercises.cyoa""" 

__author__ = "730598888"
points: int = 0
player: str = ""
chain: str = ""
key: str = ""

RED_BOX: str = "\U0001f7e5"
BLUE_BOX: str = "\U0001f7e6"
WHITE_BOX: str = "\U00002B1C"
GREEN_BOX: str = "\U0001F7E9"
YELLOW_BOX: str = "\U0001F7E8"
ORANGE_BOX: str = "\U0001f7e7"
PURPLE_BOX: str = "\U0001f7ea"


def main() -> None:
    """Choose Your Own Adventure!"""
    global points
    global player

    greet()
    user: str = input("Do you want to play (y/n): ")

    while user != "y" and user != "n":
        user = (input("Please press either y or n: "))
    
    if user == "n":
        print("Ok then, maybe next time. Goodbye!")
        quit()

    user = input("Game 1 or Game 2 (1/2): ")

    while user != "1" and user != "2":
        user = input("That is not a valid option. Please try again (1/2): ")

    if user == "1": 
        game1()
    elif user == "2":
        points = game2(points)
    
    while user != "n":
        print()
        user = input(f"{player}, you have {points} points. Do you want to keep going (y/n): ")
        while user != "y" and user != "n": 
            user = (input("Please press either y or n: "))
        if user == "y":
            print()
            user = input("Game 1 or Game 2 (1/2): ")
            while user != "1" and user != "2":
                user = input("That is not a valid option. Please try again (1/2): ")
            if user == "1": 
                game1()
            elif user == "2":
                points = game2(points)

        else:
            print()
            if points <= 0:
                print(f"{player}, you collected a total of {points} points. Sorry.")
            else:
                print(f"{player}, you collected a total of {points} points. CONGRATS!")

    
def greet() -> None:
    """Greets the player and asks for name."""
    global player
    player = input("What is your name: ")
    print()
    print("Hello! " + player)


def game1() -> None:
    """Runs the first game."""
    global chain
    global points
    global key
    rand1: int = randint(1, 2)
    print()
    print("GAME RULES:")
    print("You will make a 10 block color chain.")
    print("A special segement (of 1 or 2 blocks) will be searched for in your chain.")
    print("If the segment is found, you win 100 points, else, you lose 50 points.")
    print("Colors: RED(r), ORANGE(o), YELLOW(y), GREEN(g), BLUE(b), PURPLE(p), and WHITE(w).")
    print()
    key = segment(rand1)   
    create_chain()
    print()

    if key in chain:
        points += 100
        print()
        print(f"{key} was found in {chain}")
        print(f" {player}, YOU WIN!!! You have {points} points")
        print()
    else:
        print()
        points -= 50
        print(f"{key} was not found in {chain}")
        print(f"{player}, YOU LOSE!!! You have {points} points")
        print()


def game2(bonus: int) -> int:
    """Runs the second game and returns uodated points."""
    global player
    print()
    print("GAME RULES:")
    print("A simple game - solve the question.")
    print("If you win and have positive points, your points are doubled.")
    print("If you win and have negative points, your points are only made positive.")
    print("If you lose, you lose 50 points.")
    print()
    rand2: int = randint(0, 5)
    rand3: int = randint(0, 5)
    guess: int = int(input(f"What is {rand2} to the {rand3} power: "))
    
    if guess == rand2 ** rand3:
        print(f"{player}, you got it... RIGHT!")
        if bonus < 0:
            bonus *= -1
        else:
            bonus *= 2

    else:
        print(f"{player}, you got it... WRONG!")
        bonus -= 50
    return bonus


def create_chain() -> None:
    """Player creates their custom color chain."""
    global key
    power: int = 100
    turn: int = 1
    global chain
    chain = ""

    while power > 0:
        print(f"Turn {turn} of 10")
        choice: str = input("What color do you want: ")

        while len(choice) > 1 or (choice != "r" and choice != "o" and choice != "y" and choice != "g" and choice != "b" and choice != "p" and choice != "w"):
            choice = input("Enter a single and valid character: ")
            
        if choice == "r":
            chain += RED_BOX
        elif choice == "o":
            chain += ORANGE_BOX
        elif choice == "y":
            chain += YELLOW_BOX
        elif choice == "g":
            chain += GREEN_BOX
        elif choice == "b":
            chain += BLUE_BOX
        elif choice == "p":
            chain += PURPLE_BOX
        elif choice == "w":
            chain += WHITE_BOX
        print(chain)
        
        if power == 60:
            if key[0] in chain:
                print()
                print(f"YOU'RE ON THE RIGHT TRACK! {key[0]} IS THE FIRST BLOCK OF THE SEGMENT!")
                print()
            else:
                print()
                print(f"HINT: {key[0]} IS THE FIRST BLOCK OF THE SEGMENT!")
                print()
        power -= 10
        if turn < 10:
            turn += 1


def segment(key: int) -> str:
    """Computer creates a hidden segment."""
    color: int = randint(1, 7)
    code: str = ""
    while len(code) < key:
        if color == 1:
            code += RED_BOX
        elif color == 2:
            code += ORANGE_BOX
        elif color == 3:
            code += YELLOW_BOX
        elif color == 4:
            code += GREEN_BOX
        elif color == 5:
            code += BLUE_BOX
        elif color == 6:
            code += PURPLE_BOX
        elif color == 7:
            code += WHITE_BOX
        color = randint(1, 7)
    return code


if __name__ == "__main__":
    main()
"""A tender, loving, message to you"""
"""python -m lessons.love_functions"""


def love(subject: str) -> str:
    """Given the subject as a parameter, returns a loving string."""    

    return f"I love you {subject}"

def spread_love(to: str, n: int) -> str:
    """Generates a str repeating a loving message n times"""
    love_note: str = ""
    count: int = 0
    while count < n:
        love_note += love(to) + "\n"
        count += 1

    return love_note

name: str = input("Enter a name: ")
num: int = (int(input("Enter a number: ")))

print(spread_love(name, num))

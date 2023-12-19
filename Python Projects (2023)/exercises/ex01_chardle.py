"""EX01 - Chardle - A cute step towards Wordle."""
"""python -m exercises.ex01_chardle"""  # Shortcut to run code


__author__ = "730598888"

count: int = 0
word: str = input("Enter a 5 character word: ")
if len(word) > 5 or len(word) < 5:
    print("Error: Word must contain 5 characters.")
    exit()

letter: str = input("Enter a single character: ")
if len(letter) > 1 or len(letter) < 1:
    print("Error: Character must be a single character.")
    exit()

print("Searching for " + letter + " in " + word)

if letter == word[0]:
    count += 1
    print(letter + " found at index 0")

if letter == word[1]:
    count += 1
    print(letter + " found at index 1")

if letter == word[2]:
    count += 1
    print(letter + " found at index 2")

if letter == word[3]:
    count += 1
    print(letter + " found at index 3")

if letter == word[4]:
    count += 1
    print(letter + " found at index 4")

if count > 0:
    if count > 1:
        print((str(count)) + " instances of " + letter + " found in " + word)
    if count == 1:
        print((str(count)) + " instance of " + letter + " found in " + word)
else:
    print("No instances of " + letter + " found in " + word)
"""Examples of using lists in a simple 'game' """
"""python -m lessons.lists_game"""

from random import randint

rolls: list[int] = list()
last_index: int = len(rolls) - 1
i: int = 0
sum:int = 0

while len(rolls) == 0 or rolls[last_index] != 1:
    die: int = randint(1,6)
    rolls.append(die)

print(rolls)

rolls.pop(last_index)
print(rolls)

while i < len(rolls):
    sum += rolls[i]
    i += 1
print(f"Total score is: {sum}")
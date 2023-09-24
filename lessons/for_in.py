"""An example of for in syntax"""
"""python -m lessons.for_in"""


names: list[str] = ["Tamisha", "Taylor", "Tyrone", "Tina"]

print("While loop Output: ")
# Example of iterating through names using a while loop
i: int = 0
while i < len(names):
    name: str = names[i]
    print(name)
    i += 1

print()
print("For in Output: ")
# iterating through names in alost using a for in loop
for name in names:
    if name == "Taylor":
        print("\n" + input("replace name: ") + "\n")
    else:
        print(name + " is a loser" + "\n")


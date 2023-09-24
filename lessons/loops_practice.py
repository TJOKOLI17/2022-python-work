"""python -m lessons.loops_practice"""

x: int = 10
result: str = ""

while x >= 9:
        if x % 3 > 0:
            result = result + str(x)
        else:
            result = str (x) + result
        x -= 1

print(result)

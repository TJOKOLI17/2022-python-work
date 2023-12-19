"""Function to find the longest letter streak in a string."""
"""python -m lessons.final_streaking"""
"""python -m mypy lessons/final_streaking.py"""

def final_streaking(w: str) -> str:
    count: int = 1
    highest: int = 1
    val: str = w[len(w) - 1]

    for i in range(1, len(w)):
        count = 1
        while i < len(w) and w[i - 1] == w[i]:
            count += 1
            if highest <= count:
                highest = count
                val = w[i-1]
            i += 1
    if val == " ":
        val = " spaces"


    return str(highest) + val


print(final_streaking("TARMAGONNA"))
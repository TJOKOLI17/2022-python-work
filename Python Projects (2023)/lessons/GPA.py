"""python -m lessons.GPA"""
"""python -m mypy lessons/GPA.py""" # Shortcut to type check code


def average_grades(xs: dict[str, list[int]]) -> dict[str, float]:
    avg: dict[str, float] = {}
    i: int = 0
    total: int = 0

    for student in xs:
        total = 0
        for grade in xs[student]:
            total += grade
        avg[student] = total / len(xs[student])
    return avg


keys: dict[str, list[int]] = {"Bill": [75, 94, 97], "Annie": [100, 83, 83]}
print(average_grades(keys))
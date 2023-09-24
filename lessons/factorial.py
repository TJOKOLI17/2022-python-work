"""python -m lessons.factorial"""
"""python -m mypy lessons/factorial.py""" # Shortcut to type check code


def factorial(num: int) -> int:
    """Computes the factorial of a positive integer.."""
    if num == 0:
        return 0

    if num < 0:
        raise ValueError("integer must be a positive number.")

    new: int = 1

    if num > new:
        new = num * factorial(num - 1)
    else:
        return new
    
    return new


print(factorial(5))
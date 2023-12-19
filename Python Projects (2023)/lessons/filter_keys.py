"""python -m lessons.filter_keys"""
"""python -m mypy lessons/filter_keys.py""" # Shortcut to type check code

def filter_keys(let: list[str], kv: dict[str, int]):
    """Returns only the 'key-value' pairs of the matching letters in the 'list' parameter."""
    new: dict[str, int] = {}

    for val in let:
            
        if val in kv:
            new[val] = kv[val]
    
    return new


letter: list[str] = ["a", "x", "z"]
letters: dict[str, int] = {"v": 4, "q": 10}

print(filter_keys(letter, letters))

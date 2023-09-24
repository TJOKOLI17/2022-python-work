"""Examples of 'vectorized' operations via magic methods."""
from __future__ import annotations
from typing import Union

"""python -m lessons.strarray"""


class StrArray:
    """Creates an array of string values."""
    items: list[str]

    def __init__(self, items: list[str]):
        self.items = items

    def __repr__(self) -> str:
        return f"StrArray({self.items})"

    def __add__(self, rhs: Union[str, StrArray]) -> StrArray:
        new: StrArray = StrArray([])
        if isinstance(rhs, str):
            for item in self.items:
                new.items.append(item + rhs)
        else:
            assert len(self.items) == len(rhs.items)
            for i in range(len(self.items)):
                new.items.append(self.items[i] + rhs.items[i])

        return new



a: StrArray = StrArray(["Armando", "Pete", "Yamata"])
b: StrArray = StrArray(["Bacot", "Nance", "Nishinotoin"])
c: StrArray = StrArray(["J.", "C.", "S."])

print()
print(a)
print(a + "!")
print(a + " " + c + " " + b)
print()


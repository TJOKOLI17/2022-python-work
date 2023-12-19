"""Utility class for numerical operations."""

from __future__ import annotations

from typing import Union

__author__ = "730598888"


class Simpy:
    """Creates a `list[float]` that behaves like NumPy."""
    values: list[float]

    # TODO: Your constructor and methods will go here.
    def __init__(self, values: list[float]):
        """Initilizes Simpy attribute 'values'."""
        self.values = values
    
    def __repr__(self) -> str:
        """Creates a representation of a Simpy variable."""
        return f"Simpy({self.values})"

    def __len__(self) -> int:
        """Returns the length of a Simpy's value attribute."""
        return len(self.values)
    
    def fill(self, num: float, amount: int) -> None:
        """Fills a Simpy with a specific number a certain amount of times."""
        self.values = []
        for _ in range(amount):
            self.values.append(num)

    def arange(self, start: float, stop: float, step: float = 1.0) -> None:
        """Fills a Simpy with a range of numbers from `start` to `stop` (excluding `stop`) that increment by `step`."""
        assert step != 0.0

        if start > 0 or (start + step) > 0:
            while start < stop:
                self.values.append(start)
                start += step

        if start < 0 or (start + step) < 0:
            while start > stop:
                self.values.append(start)
                start += step

    def sum(self) -> float:
        """Returns the sum of all the values in a Simpy."""
        return sum(self.values)

    def __add__(self, rhs: Union[float, Simpy]) -> Simpy:
        """If float: Adds the value of `rhs` to each value of the `self`. If Simpy: Adds the values of `rhs[i]` to the to the value of `self[i]`."""
        new: Simpy = Simpy([])
        
        if isinstance(rhs, float):
            for val in self.values:
                new.values.append(val + rhs)

        else:
            assert len(self.values) == len(rhs.values)
            for i in range(len(self.values)):
                new.values.append(self.values[i] + rhs.values[i])
        
        return new

    def __pow__(self, rhs: Union[float, Simpy]) -> Simpy:
        """If float: Raises each value in `self` to the  `rhs` power. If Simpy: Raises `self[i]` to the `rhs[i]` power."""
        new: Simpy = Simpy([])
        
        if isinstance(rhs, float):
            for val in self.values:
                new.values.append(val ** rhs)

        else:
            assert len(self.values) == len(rhs.values)
            for i in range(len(self.values)):
                new.values.append(self.values[i] ** rhs.values[i])
        
        return new

    def __eq__(self, rhs: Union[float, Simpy]) -> list[bool]:
        """If float: Returns a list (True or False) if `self[i]` == `rhs`. If Simpy: Returns a list (True or False) if `self[i]` == `rhs[i]`."""
        equal: list[bool] = []

        if isinstance(rhs, float):
            for i in range(len(self.values)):
                equal.append(self.values[i] == rhs)
        else:
            for i in range(len(self.values)):
                equal.append(self.values[i] == rhs.values[i])
        
        return equal

    def __gt__(self, rhs: Union[float, Simpy]) -> list[bool]:
        """If float: Returns a list (True or False) if `self[i]` > `rhs`. If Simpy: Returns a list (True or False) if `self[i]` > `rhs[i]`."""
        greater_than: list[bool] = []

        if isinstance(rhs, float):
            for i in range(len(self.values)):
                greater_than.append(self.values[i] > rhs)
        else:
            for i in range(len(self.values)):
                greater_than.append(self.values[i] > rhs.values[i])
        
        return greater_than

    def __lt__(self, rhs: Union[float, Simpy]) -> list[bool]:
        """If float: Returns a list (True or False) if `self[i]` < `rhs`. If Simpy: Returns a list (True or False) if `self[i]` < `rhs[i]`."""
        less_than: list[bool] = []

        if isinstance(rhs, float):
            for i in range(len(self.values)):
                less_than.append(self.values[i] < rhs)
        else:
            for i in range(len(self.values)):
                less_than.append(self.values[i] < rhs.values[i])
        
        return less_than

    def __getitem__(self, rhs: Union[int, list[bool]]) -> Union[float, Simpy]:
        """If int: Returns the value of a Simpy at a specific index. If Simpy: Returns a Simpy of values where the condition at an index is True."""
        unmask: Simpy = Simpy([])
        if isinstance(rhs, int):
            return self.values[rhs]

        else:
            for i in range(len(rhs)):
                if rhs[i] is True:
                    unmask.values.append(self.values[i])
            return unmask 

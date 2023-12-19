"""EX05 - Testing the list utility functions."""

from utils import only_evens, concat, sub

"""python -m pytest exercises/ex05"""  # Shortcut to run code

__author__ = "730598888"


"""ONLY_EVEN TESTS"""


def test_only_evens_full() -> None:
    """Creating a list of only even numbers."""
    xs: list[int] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    assert only_evens(xs) == [2, 4, 6, 8, 10]


def test_only_evens_no_evens() -> None:
    """Returns an empty list since there are no evens."""
    xs: list[int] = [1, 3, 5, 7, 9]
    assert only_evens(xs) == []


def test_only_evens_empty() -> None:
    """Returns an empty list since there is no list."""
    xs: list[int] = []
    assert only_evens(xs) == []


def test_only_evens_with_a_sum_as_a_list_value() -> None:
    """Creating a list of only even numbers and evaluating a sum of numbers."""
    xs: list[int] = [(17 + 17), 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    assert only_evens(xs) == [34, 2, 4, 6, 8, 10]


"""CONCAT TESTS"""


def test_concat_with_two_lists() -> None:
    """Creates a new list with the values of xs and ys."""
    xs: list[int] = [1, 2, 3, 4, 5]
    ys: list[int] = [6, 7, 8, 9, 10]
    assert concat(xs, ys) == [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


def test_concat_with_two_empty_lists() -> None:
    """Returns an empty list since xs and ys are empty."""
    xs: list[int] = []
    ys: list[int] = []
    assert concat(xs, ys) == []


def test_concat_with_one_empty_lists() -> None:
    """Returns a new list even if one arguement list is empty."""
    xs: list[int] = []
    ys: list[int] = [11]
    assert concat(xs, ys) == [11]


def test_concat_with_different_sized_lists() -> None:
    """Returns a list even though xs and ys have different sizes."""
    xs: list[int] = [1, 2, 3]
    ys: list[int] = [6, 7, 8, 22, 10, 1042]
    assert concat(xs, ys) == [1, 2, 3, 6, 7, 8, 22, 10, 1042]


"""SUB TESTS"""


def test_sub_full() -> None:
    """Returns a subset of xs with the start (inclusive) and end (not inclusive)."""
    xs: list[int] = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
    assert sub(xs, 1, 3) == [20, 30]


def test_sub_empty() -> None:
    """Even though there are int arguments, returns an empty list because xs is empty."""
    xs: list[int] = []
    assert sub(xs, 1, 3) == []


def test_sub_empty_list_conditions() -> None:
    """Returns an empty list because start is greater/end is smaller than xs length."""
    xs: list[int] = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
    assert sub(xs, 50, -50) == []


def test_sub_reassign_int_parameter_conditions() -> None:
    """Reassigns start and end because start is smaller/end is greater than list length."""
    xs: list[int] = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
    assert sub(xs, -100, 100) == [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
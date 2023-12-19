"""EX11 - Testing Linked List Functions."""

import pytest
from exercises.ex11.linked_list import Node, last, value_at, max, linkify, scale

"""python -m pytest exercises/ex11/linked_list_test.py"""


__author__ = "730598888"


def test_last_empty() -> None:
    """Last of an empty Linked List should raise a ValueError."""
    with pytest.raises(ValueError):
        last(None)


def test_last_non_empty() -> None:
    """Last of a non-empty list should return its last data value."""
    linked_list = Node(1, Node(2, Node(3, None)))
    assert last(linked_list) == 3


def test_value_at_normal() -> None:
    """Tests `value_at()` with a full linked list."""
    linked_list = Node(1, Node(2, Node(3, None)))
    assert value_at(linked_list, 2) == 3


def test_value_at_empty() -> None:
    """Tests `value_at()` with a empty linked list."""
    with pytest.raises(IndexError):
        value_at(None, 0)


def test_value_at_out_of_bounds() -> None:
    """Tests `value_at()` with an index out of bounds."""
    linked_list = Node(1, Node(2, Node(3, None)))
    with pytest.raises(IndexError):
        value_at(linked_list, 4)


def test_max_normal() -> None:
    """Tests `max()` with a full linked list."""
    linked_list = Node(1, Node(2, Node(3, None)))
    assert max(linked_list) == 3


def test_max_empty_list() -> None:
    """Tests `max()` with a an empty linked list."""
    with pytest.raises(ValueError):
        max(None)


def test_linkify_normal() -> None:
    """Builds a linked list with a `list[int]`."""
    assert print(linkify([1, 2, 3, 4])) == print("1 -> 2 -> 3 -> 4 -> None")


def test_linkify_with_empyt_list() -> None:
    """Builds a linked list with a `list[int]`."""
    assert print(linkify([])) == print("None")


def test_scale_with_linkify() -> None:
    """Returns a linked list with factored data values."""
    assert print(scale(linkify([1, 2, 3]), 2)) == print("2 -> 4 -> 6 -> None")


def test_scale_with_None() -> None:
    """Returns a linked list with factored data values."""
    assert print(scale(None, 6)) == print("None")
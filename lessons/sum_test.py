"""Tests for the sum function"""
"""python -m pytest lessons/sum_test.py"""

from lessons.sum import sum

def test_sum_empty() -> None:
    xs: list[float] = [0.0]
    assert sum(xs) == 0.0


def test_sum_single_item() -> None:
    xs: list[float] = [110.0]
    assert sum(xs) == 110.0


def test_sum_varies() -> None:
    xs: list[float] = [1.0, 2.0, 3.0]
    assert sum(xs) == 6.0


def test_sum_cancels_out() -> None:
    xs: list[float] = [1.0, 2.0, -1.0, -2.0]
    assert sum(xs) == 0.0


def test_sum_equals_sum_of_list() -> None:
    xs: list[float] = [1.0, 2.0, 3.0]
    assert sum(xs) == (xs[0] + xs[1] + xs[2])
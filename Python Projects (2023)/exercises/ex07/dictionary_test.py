"""EX07 - Testing Dictionary Funtions."""


from dictionary import invert, favorite_color, count
import pytest

"""python -m mypy exercises/dictionary_test.py"""
"""python -m pytest exercises/ex07"""

__author__ = "73059888" 

"""INVERT TESTS"""


def test_invert_full() -> None:
    """Swaps the keys with their corresponding values."""
    my_dictionary = {'Toby': 'Morgan', 'Stan': 'Mitchell'}
    assert invert(my_dictionary) == {'Morgan': 'Toby', 'Mitchell': 'Stan'}


def test_invert_same_value() -> None:
    """Raises an error due to 2 or more key-value pairs having the same value."""
    with pytest.raises(KeyError):
        my_dictionary = {'kris': 'jordan', 'michael': 'jordan'}
        invert(my_dictionary)


def test_invert_all_same() -> None:
    """Should result in only 1 key_value pair due to the nature of dictionaries."""
    my_dictionary = {'jordan': 'jordan', 'jordan': 'jordan'}
    invert(my_dictionary) == {'jordan': 'jordan'}


"""FAVORITE COLOR TESTS"""


def test_favorite_color_normal() -> None:
    """Returns most frequent color in dictionary."""
    colors: dict[str, str] = {"A": "BLUE", "B": "RED", "C": "RED", "D": "ORANGE", "E": "ORANGE", "F": "ORANGE", "G": "YELLOW", "H": "YELLOW"}
    assert (favorite_color(colors)) == "YELLOW"


def test_favorite_color_tie() -> None:
    """Returns first color in dictionry due to tie."""
    colors: dict[str, str] = {"A": "GREEN", "B": "RED", "C": "RED", "D": "ORANGE", "E": "ORANGE", "F": "ORANGE", "G": "YELLOW", "H": "YELLOW", "I": "YELLOW"}
    assert (favorite_color(colors)) == "GREEN"


def test_favorite_color_3_way_tie() -> None:
    """Returns first color in dictionry due to 3 way tie."""
    colors: dict[str, str] = {"A": "WHITE", "B": "RED", "C": "RED", "K": "RED", "D": "ORANGE", "E": "ORANGE", "F": "ORANGE", "G": "YELLOW", "H": "YELLOW", "I": "YELLOW"}
    assert (favorite_color(colors)) == "WHITE"


"""COUNT TESTS"""


def test_count_normal() -> None:
    """Creates a dictionary of the keys and their frequencies in the list."""
    list1: list[str] = ["DOG", "CAT", "SHARK", "HAWK", "DOG", "DOG", "DOG",
                        "SHARK", "SHARK", "SHARK", "SHARK",
                        "SHARK", "HAWK", "HAWK",
                        "CAT", "CAT", "CAT", "CAT", "CAT",
                        "CAT", "CAT", "CAT", "CAT"]
    assert (count(list1)) == {'DOG': 4, 'CAT': 10, 'SHARK': 6, 'HAWK': 3}


def test_count_empty() -> None:
    """Returns an empty dictionary since the list is empty."""
    list1: list[str] = []
    assert (count(list1)) == {}


def test_count_all_same() -> None:
    """Returns only 1 key-value pair since entire list is the same."""
    list1: list[str] = ["SHARK", "SHARK", "SHARK", "SHARK",
                        "SHARK", "SHARK", "SHARK", "SHARK",
                        "SHARK", "SHARK", "SHARK", "SHARK",
                        "SHARK", "SHARK", "SHARK", "SHARK",
                        ]
    assert (count(list1)) == {'SHARK': 16}
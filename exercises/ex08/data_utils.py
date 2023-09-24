"""Dictionary related utility functions."""
from csv import DictReader

__author__ = "730598888"


def read_csv_rows(filename: str) -> list[dict[str, str]]:
    """Read the rows of a CSV into a 'table'."""
    result: list[dict[str, str]] = []

    # Open a handle to the data
    file_handle = open(filename, "r", encoding="utf8")

    # Prepare to the the data file as a CSV rather than just strings
    csv_reader = DictReader(file_handle)

    # Read each row of the CSV line-by-line
    for row in csv_reader:
        result.append(row)

    # Close the file when I'm done, to free its resources.
    file_handle.close()

    return result 


def column_values(table: list[dict[str, str]], column: str) -> list[str]:
    """Produce a list[str] of all values in a single column."""
    result: list[str] = []
    for row in table:
        item: str = row[column]
        result.append(item)

    return result


def columnar(row_table: list[dict[str, str]]) -> dict[str, list[str]]:
    """Transform a row-oriented table to a column-oriented table."""
    result: dict[str, list[str]] = {}

    first_row: dict[str, str] = row_table[0]

    for column in first_row:
        result[column] = column_values(row_table, column)
        
    return result


def head(data: dict[str, list[str]], limit: int) -> dict[str, list[str]]:
    """Produce a new column-based (e.g. `dict[str, list[str]]`) table with only the first `N` (a parameter) rows of data for each column."""
    limited_data: dict[str, list[str]] = {}
    for column in data:
        new: list[str] = []
        i: int = 0

        if len(data[column]) < limit:
            limited_data[column] = data[column]
        else:
            while i < limit:
                new.append(data[column][i])
                i += 1
            limited_data[column] = new
  
    return limited_data


def select(data: dict[str, list[str]], focus: list[str]) -> dict[str, list[str]]:
    """Produces a new column-based (e.g. `dict[str, list[str]]`) table with only a specific subset of the original columns."""
    new: dict[str, list[str]] = {}
    
    for title in focus:
        new[title] = data[title]

    return new


def concat(data: dict[str, list[str]], extra: dict[str, list[str]]) -> dict[str, list[str]]:
    """Produces a new column-based `dict[str, list[str]]` table with two column-based tables combined."""
    merged: dict[str, list[str]] = {}

    for column in data:
        merged[column] = data[column]

    for column in extra:
        if column in merged:
            for val in extra[column]:
                merged[column].append(val)
        else:
            merged[column] = extra[column]

    return merged


def count(keys: list[str]) -> dict[str, int]:
    """Will create a `dict[str, int]` with titles as keys and their frequency in the list as values."""
    order: dict[str, int] = {} 
    i: int = 0
    j: int = 0
    value: int = 0

    while i < len(keys):
        value = 0
        j = 0
        value = 0
        j = 0
        while j < len(keys):
            if keys[i] == keys[j]:
                value += 1
                j += 1
            else:
                j += 1
        order[keys[i]] = value         
        i += 1

    return order
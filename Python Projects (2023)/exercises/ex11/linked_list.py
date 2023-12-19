"""EX11 - Making Linked List Functions."""


from __future__ import annotations
from typing import Optional

__author__ = "730598888"


class Node:
    """An item in a singly-linked list."""
    data: int
    next: Optional[Node]

    def __init__(self, data: int, next: Optional[Node]):
        """Construct a singly linked list. Use None for 2nd argument if tail."""
        self.data = data
        self.next = next

    def __str__(self) -> str:
        """Produce a string visualization of the linked list."""
        if self.next is None:
            return f"{self.data} -> None"
        else:
            return f"{self.data} -> {self.next}"


def is_equal(lhs: Optional[Node], rhs: Optional[Node]) -> bool:
    """Test if two linked lists are deeply (values and order) equal to one another."""
    if lhs is None and rhs is None:
        return True
    elif lhs is None or rhs is None or lhs.data != rhs.data:
        return False
    else:
        return is_equal(lhs.next, rhs.next)
    

def last(head: Optional[Node]) -> int:
    """Returns the last value of a Linked List, or raises a ValueError if the list is empty."""
    if head is None:
        raise ValueError("last cannot be called with None")
    
    if head.next is None:
        return head.data
    else:
        return last(head.next)
            
    
def value_at(head: Optional[Node], i: int) -> int:
    """Given an index, will return the `Node.data` value at the given index."""
    if i < 0 or head is None:
        raise IndexError("Index is out of bounds on the list.")

    if i == 0 and head is not None:
        return head.data
    
    else: 
        return value_at(head.next, i - 1)
    
    
def max(head: Optional[Node]) -> int:
    """Returns the largest value in a Node."""
    if head is None:
        raise ValueError("Cannot call max with None")
    
    if head.next is None:
        return head.data
    else:
        lead: int = max(head.next)
        if (lead > head.data):
            return lead
        else:
            return head.data
        

def linkify(values: list[int]) -> Optional[Node]:
    """Turns a `list[int]` into a linked list of Nodes."""
    head: Node = Node(0, None)

    if values == []:
        return None
        
    head.data = values[0]
    values.pop(0)
    head.next = linkify(values)
    return head
    

def scale(head: Optional[Node], factor: int) -> Optional[Node]:
    """Scales the `data` attribute of a Node by a certain factor."""
    changed: Node = Node(0, None)
    if head is None:
        return None
    
    changed.data = head.data * factor
    if head.next is None:
        changed.data = head.data * factor
    else:
        changed.next = scale(head.next, factor)

    return changed
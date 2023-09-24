"""Building a Linked List"""
from __future__ import annotations
from typing import Optional
"""python -m lessons.build"""

class Node:
    """An item in a singly-linked list."""
    data: int = 0
    next: Optional[Node] = None

    def __str__(self) -> str:
        """Produce a string visualization of the linked list."""
        if self.next is None:
            return f"{self.data} -> None"
        else:
            return f"{self.data} -> {self.next}"


def build(start: int, end: int) -> Optional[Node]:
    """Build a linked list from start to end - 1"""
    if start >= end:
        return None
    else:
        n: Node = Node()
        n.data = start
        n.next = build(start + 1, end)
        return n


print(build(1, 55))
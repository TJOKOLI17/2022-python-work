from __future__ import annotations
from typing import Optional

"""python -m lessons.recursion"""

class Node:
    data: int
    next: Optional[Node] # same as next: Union[Node, None]

    def __init__ (self, data: int, next: Optional[Node]):
        self.data = data
        self.next = next

    def __str__(self) -> str:
        if self.next == None:
            return f"{self.data} -> None"
        else:
            return f"{self.data} -> {self.next}"


def sum(node: Optional[Node]) -> int:
    if node == None:
        return 0
    else:
        return node.data + sum(node.next)


def count(node: Optional[Node], current_count: int = 0) -> int:
    if node == None:
        return current_count
    else:
        return count(node.next, current_count + 1)
head: Node = Node(3, None)
head = Node(2, head)
head = Node(1, head)

print(f" Sum of Nodes: {sum(head)}")
print(f" Count of Nodes: {count(head)}")
print(head)
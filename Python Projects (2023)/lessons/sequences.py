"""Notes and examples of tuple and range sequences types."""
"""python -m lessons.sequences"""


# Declaring a type alias that "invents" the Point2D type
# tuples, because they are 0 sequences, are 0-indexed
# tuples are immutable - they cannot be modified
Point2D = tuple[float, str]

start_position: Point2D = (5.0, "Johnny")
end_position: Point2D = (99.0, "Bucky")
print(start_position)
start_position += start_position
print(start_position)
start_position += end_position
print(start_position)

# examples of ranges
a_range: range = range(0, 10, 1)
zero_start: range = range(20)
names: list[str] = ["Elena", "Mikael", "Neron", "Markova", "Amelia"]

# access its items
print(a_range[0])
print(a_range[1])
print(len(a_range))
for i in a_range:
    print(i)
for i in zero_start:
    print(i)

for i in range(0, len(names), 2):
    print(names[i])
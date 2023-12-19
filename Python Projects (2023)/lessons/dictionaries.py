"""Demonstration of dictionary capabilities"""
"""python -m lessons.dictionaries"""
"""python -m mypy lessons/dictionaries.py"""

# Declaring the type of a dictionary
schools: dict[str, int]
test: dict[str, str]
test = dict()
test["test"] = "PASSED!"

print(test)

# Initialize to an empty dictionary
schools = dict()

# Set a key-value pairing in the dictionary
schools["UNC"] = 19400
schools["Duke"] = 6717
schools["NCSU"] = 26150

# Print a dictionary literal representation
print(schools)

# Access a value by its key -- "lookup"
print(f"UNC has {schools['UNC']} students")

# Remove a key-value pair from a dictionary by its key
schools.pop("Duke")

# Test for existence of a key
is_duke_present: bool = "Duke" in schools
print(f"Duke is present: {is_duke_present}")
print(schools)

# Update / Reassign a key-value pair
schools["UNC"] = 20000
schools["NCSU"] += 200
print(schools)

# Empty dictionary literal
schools = {} # Same as dict()

# Alternatively, initialize key-value pairs
schools = {"UNC": 19400, "Dukie": 6717, "NCSU": 26150 }
print()
print(schools)
print()

for item in schools:
    print(schools[item])

print()
for key in schools:
    print(f"Key: {key} -> Value: {schools[key]}")

print()
for school in schools:
    print(f"Key: {school} -> Value: {schools[school]}")
print(len(schools))


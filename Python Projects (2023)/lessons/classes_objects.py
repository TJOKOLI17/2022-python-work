"""Example of a class and objects instantiation"""
"""python -m lessons.classes_objects"""

class Pizza:
    """Models the idea of a Pizza."""

    # Attribute definitions
    size: str
    toppings: int
    extra_cheese: bool = False
    
    def __init__(self, size: str, toppings: int):
            """Initializes the Pizza attributes"""
            self.size = size
            self.toppings = toppings

    def price(self, tax: float, tip: float) -> float:
        """Calculate price of a Pizza"""
        total: float = 0.0
        
        if self.size == "Xlarge":
            total += 18.0
        elif self.size == "large":
            total += 15.0
        elif self.size == "medium":
            total += 12.0    
        else:
            total += 9.0

        total += self.toppings * 0.75

        if self.extra_cheese:
            total += 1
        
        total *= tax
        total += tip

        return total


a_pizza: Pizza = Pizza("Xlarge", 3)

print(a_pizza)
print(Pizza)
print()
print(f"Price: ${a_pizza.price(1.07, 2.50)}")

b_pizza: Pizza = Pizza("medium", 0)

b_pizza.extra_cheese = True
print(b_pizza.size)
print(f"Price: ${b_pizza.price(0.95, 0.0)}")



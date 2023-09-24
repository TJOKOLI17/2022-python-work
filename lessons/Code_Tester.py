"""python -m lessons.Code_Tester"""
"""python -m mypy DIRECTORY/FILE NAME.py""" # Shortcut to type check code


import random

recipes = [{'name': 'Spaghetti Bolognese', 'ingredients': ['Spaghetti', 'Ground beef', 'Onion', 'Garlic', 'Tomato sauce', 'Salt', 'Pepper']},
           {'name': 'Fried Rice', 'ingredients': ['Rice', 'Eggs', 'Vegetable oil', 'Onion', 'Carrots', 'Peas', 'Soy sauce', 'Salt', 'Pepper']},
           {'name': 'Pizza Margherita', 'ingredients': ['Pizza dough', 'Tomato sauce', 'Mozzarella cheese', 'Basil', 'Salt', 'Pepper']},
           {'name': 'Chocolate chip cookies', 'ingredients': ['All-purpose flour', 'Baking soda', 'Salt', 'Unsalted butter', 'Sugar', 'Brown sugar', 'Eggs', 'Vanilla extract', 'Chocolate chips']}]

def recipe_generator():
    return random.choice(recipes)

# Example usage
print(recipe_generator())


"""The model classes maintain the state and logic of the simulation."""

from __future__ import annotations
from random import random
from exercises.ex09 import constants
from math import sin, cos, pi, sqrt


__author__ = "730598888" 


class Point:
    """A model of a 2-d cartesian coordinate Point."""
    x: float
    y: float

    def __init__(self, x: float, y: float):
        """Construct a point with x, y coordinates."""
        self.x = x
        self.y = y

    def add(self, other: Point) -> Point:
        """Add two Point objects together and return a new Point."""
        x: float = self.x + other.x
        y: float = self.y + other.y
        return Point(x, y)

    def distance(self, other: Point) -> float:
        """Finds the distance between two cells."""
        formula: float = sqrt(((self.x - other.x)**2) + ((self.y - other.y)**2))
        return formula


class Cell:
    """An individual subject in the simulation."""
    location: Point
    direction: Point
    sickness: int = constants.VULNERABLE

    def __init__(self, location: Point, direction: Point):
        """Construct a cell with its location and direction."""
        self.location = location
        self.direction = direction

    def tick(self) -> None:
        """Moves Cells across the screen."""
        self.location = self.direction.add(self.location)
        if self.is_infected():
            self.sickness += 1
        if self.sickness > constants.RECOVERY_PERIOD:
            self.immunize()

    def contract_disease(self) -> None:
        """Vulnerable cell becomes Infected cell."""
        self.sickness = constants.INFECTED
    
    def is_vulnerable(self) -> bool:
        """Checks if a cell is vulnerable."""
        if self.sickness == constants.VULNERABLE:
            return True

        return False

    def is_infected(self) -> bool:
        """Checks if a cell is infected."""
        if self.sickness >= constants.INFECTED:
            return True

        return False

    def contact_with(self, other: Cell) -> None:
        """Triggers a cell to become infected."""
        if self.is_infected() and other.is_vulnerable():
            other.contract_disease()

        if self.is_vulnerable() and other.is_infected():
            self.contract_disease()

    def immunize(self) -> None:
        """Immunizes an Infected cell."""
        self.sickness = constants.IMMUNE

    def is_immune(self) -> bool:
        """Checks if a cell is immune."""
        if self.sickness == constants.IMMUNE:
            return True

        return False

    def color(self) -> str:
        """Return the color representation of a cell."""
        if self.is_infected():
            return "red"

        if self.is_immune():
            return "gold"

        return "gray"

        
class Model:
    """The state of the simulation."""

    population: list[Cell]
    time: int = 0

    def __init__(self, cells: int, speed: float, virus: int, immunes: int = 0):
        """Initialize the cells with random locations and directions."""
        self.population = []
        if virus >= cells or virus <= 0:
            raise ValueError("The number of infected cells must be < the total amount of cells and greater than 0.")
        if immunes >= cells or immunes < 0:
            raise ValueError("The number of immune cells must be < the total amount of cells and greater than -1.")
        
        for _ in range(cells - virus - immunes):
            start_loc: Point = self.random_location()
            start_dir: Point = self.random_direction(speed)
            cell: Cell = Cell(start_loc, start_dir)
            self.population.append(cell)
        
        for _ in range(virus):
            start_loc = self.random_location()
            start_dir = self.random_direction(speed)
            viral: Cell = Cell(start_loc, start_dir)
            viral.contract_disease()
            self.population.append(viral)

        for _ in range(immunes):
            start_loc = self.random_location()
            start_dir = self.random_direction(speed)
            safe: Cell = Cell(start_loc, start_dir)
            safe.immunize()
            self.population.append(safe)

    def tick(self) -> None:
        """Update the state of the simulation by one time step."""
        self.time += 1
        for cell in self.population:
            cell.tick()
            self.enforce_bounds(cell)
        self.check_contacts()

    def random_location(self) -> Point:
        """Generate a random location."""
        start_x: float = random() * constants.BOUNDS_WIDTH - constants.MAX_X
        start_y: float = random() * constants.BOUNDS_HEIGHT - constants.MAX_Y
        return Point(start_x, start_y)

    def random_direction(self, speed: float) -> Point:
        """Generate a 'point' used as a directional vector."""
        random_angle: float = 2.0 * pi * random()
        direction_x: float = cos(random_angle) * speed
        direction_y: float = sin(random_angle) * speed
        return Point(direction_x, direction_y)

    def check_contacts(self) -> None:
        """Checks to see if a cell comes in contact with another cell."""
        for cell in range(len(self.population)):
            for other in range(cell + 1, len(self.population)):
                if self.population[cell].location.distance(self.population[other].location) < constants.CELL_RADIUS:
                    self.population[cell].contact_with(self.population[other])

    def enforce_bounds(self, cell: Cell) -> None:
        """Cause a cell to 'bounce' if it goes out of bounds."""
        if cell.location.x > constants.MAX_X:
            cell.location.x = constants.MAX_X
            cell.direction.x *= -1.0
        
        if cell.location.x < constants.MIN_X:
            cell.location.x = constants.MIN_X
            cell.direction.x *= -1.0
            
        if cell.location.y > constants.MAX_Y:
            cell.location.y = constants.MAX_Y
            cell.direction.y *= -1.0
        
        if cell.location.y < constants.MIN_Y:
            cell.location.y = constants.MIN_Y
            cell.direction.y *= -1.0

    def is_complete(self) -> bool:
        """Method to indicate when the simulation is complete."""
        for cell in self.population:
            if cell.is_infected():
                return False
        return True
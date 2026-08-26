# app/models/materia.py
from dataclasses import dataclass


@dataclass
class Materia:
    id: int
    nombre: str

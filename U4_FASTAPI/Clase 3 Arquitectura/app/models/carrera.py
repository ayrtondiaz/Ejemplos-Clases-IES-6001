# app/models/carrera.py
from dataclasses import dataclass


@dataclass
class Carrera:
    id: int
    nombre: str

# app/models/alumno.py
from dataclasses import dataclass, field


@dataclass
class Alumno:
    id: int
    nombre: str
    edad: int
    email: str | None
    carrera_id: int
    materia_ids: list[int] = field(default_factory=list)

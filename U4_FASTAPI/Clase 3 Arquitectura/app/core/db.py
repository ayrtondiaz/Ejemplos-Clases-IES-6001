# app/core/db.py
# "Base de datos" en memoria (listas). En la Clase 34 se cambia por
# SQLAlchemy + PostgreSQL SIN tocar el resto de las capas.

from app.models.carrera import Carrera
from app.models.materia import Materia
from app.models.alumno  import Alumno

# ---- Tabla "carreras" ----
carreras: list[Carrera] = [
    Carrera(id=1, nombre="Sistemas"),
    Carrera(id=2, nombre="Redes"),
    Carrera(id=3, nombre="Software"),
]

# ---- Tabla "materias" ----
materias: list[Materia] = [
    Materia(id=1, nombre="Programación II"),
    Materia(id=2, nombre="Bases de Datos"),
    Materia(id=3, nombre="Redes I"),
    Materia(id=4, nombre="Análisis de Sistemas"),
]

# ---- Tabla "alumnos" (con carrera_id y materias inscriptas) ----
alumnos: list[Alumno] = [
    Alumno(id=1, nombre="Ana García",   edad=22, email="ana@mail.com",    carrera_id=1, materia_ids=[1, 2]),
    Alumno(id=2, nombre="Carlos López", edad=20, email="carlos@mail.com", carrera_id=2, materia_ids=[3]),
    Alumno(id=3, nombre="Lucía Díaz",   edad=25, email=None,              carrera_id=1, materia_ids=[1, 2, 4]),
]

# Auto-increment para el id de alumnos
_next_id: int = 4

def bump_alumno_id() -> int:
    global _next_id
    nid = _next_id
    _next_id += 1
    return nid

# app/api/v1/alumnos/repository.py
# Repository del recurso Alumno.
# La capa de router NO sabe si los datos vienen de una lista, SQLAlchemy o PostgreSQL.

from app.core import db
from app.models.alumno import Alumno
from .schemas import AlumnoCreate, AlumnoUpdate


# ---------- helpers privados ----------
def _find_carrera(carrera_id: int):
    return next((c for c in db.carreras if c.id == carrera_id), None)


def _find_materias(materia_ids: list[int]):
    return [m for m in db.materias if m.id in materia_ids]


def _to_dict(a: Alumno) -> dict:
    """Compone el AlumnoResponse con carrera y materias resueltas."""
    return {
        "id": a.id,
        "nombre": a.nombre,
        "edad": a.edad,
        "email": a.email,
        "carrera": _find_carrera(a.carrera_id),
        "materias": _find_materias(a.materia_ids),
    }


# ---------- operaciones que consume el router ----------
def list_alumnos() -> list[dict]:
    return [_to_dict(a) for a in db.alumnos]


def get_by_id(alumno_id: int) -> dict | None:
    a = next((x for x in db.alumnos if x.id == alumno_id), None)
    return _to_dict(a) if a else None


def search_by_nombre(query: str) -> list[dict]:
    q = query.lower()
    return [_to_dict(a) for a in db.alumnos if q in a.nombre.lower()]


def filter_by_carrera(carrera_id: int) -> list[dict]:
    return [_to_dict(a) for a in db.alumnos if a.carrera_id == carrera_id]


def ensure_carrera_y_materias(carrera_id: int, materia_ids: list[int]) -> tuple[bool, str]:
    """Validación de negocio: existen la carrera y todas las materias."""
    if _find_carrera(carrera_id) is None:
        return False, f"La carrera {carrera_id} no existe"
    found = {m.id for m in _find_materias(materia_ids)}
    faltantes = [mid for mid in materia_ids if mid not in found]
    if faltantes:
        return False, f"Materias inexistentes: {faltantes}"
    return True, ""


def create(data: AlumnoCreate) -> dict:
    nuevo = Alumno(
        id=db.bump_alumno_id(),
        nombre=data.nombre,
        edad=data.edad,
        email=data.email,
        carrera_id=data.carrera_id,
        materia_ids=list(data.materia_ids),
    )
    db.alumnos.append(nuevo)
    return _to_dict(nuevo)


def update(alumno_id: int, data: AlumnoUpdate) -> dict | None:
    a = next((x for x in db.alumnos if x.id == alumno_id), None)
    if a is None:
        return None
    cambios = data.model_dump(exclude_unset=True)   # solo lo enviado
    for k, v in cambios.items():
        setattr(a, k, v)
    return _to_dict(a)


def delete(alumno_id: int) -> bool:
    a = next((x for x in db.alumnos if x.id == alumno_id), None)
    if a is None:
        return False
    db.alumnos.remove(a)
    return True

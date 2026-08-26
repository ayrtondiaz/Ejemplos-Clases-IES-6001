# app/api/v1/alumnos/schemas.py
# Schemas Pydantic (DTOs) del recurso Alumno.

from pydantic import BaseModel, Field


class AlumnoBase(BaseModel):
    """Campos comunes: nombre y datos básicos."""
    nombre: str = Field(min_length=2, max_length=100, examples=["Ana García"])
    edad: int = Field(ge=16, le=99, description="Edad entre 16 y 99")
    email: str | None = None


class AlumnoCreate(AlumnoBase):
    """Body para CREAR un alumno."""
    carrera_id: int = Field(ge=1)
    materia_ids: list[int] = Field(default_factory=list)


class AlumnoUpdate(BaseModel):
    """Body para ACTUALIZAR (todos los campos opcionales)."""
    nombre: str | None = Field(default=None, min_length=2, max_length=100)
    edad: int | None = Field(default=None, ge=16, le=99)
    email: str | None = None
    carrera_id: int | None = Field(default=None, ge=1)
    materia_ids: list[int] | None = None


class CarreraOut(BaseModel):
    id: int
    nombre: str


class MateriaOut(BaseModel):
    id: int
    nombre: str


class AlumnoResponse(AlumnoBase):
    """Respuesta: incluye carrera y materias ya resueltas."""
    id: int
    carrera: CarreraOut
    materias: list[MateriaOut] = []

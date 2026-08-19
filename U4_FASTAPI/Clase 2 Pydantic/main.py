# main.py
# CLASE 29 — Pydantic + CRUD REST completo
# Por Ing. Díaz Ayrton
#
# Cómo correr (SIN uvicorn):
#   1) python -m venv venv   &&   venv\Scripts\activate
#   2) pip install "fastapi[standard]"
#   3) fastapi dev main.py
#   4) Documentación interactiva:  http://127.0.0.1:8000/docs

from fastapi import FastAPI, HTTPException, status
from pydantic import BaseModel, Field
from typing import Optional
app = FastAPI(
    title="Clase 29 — Pydantic + CRUD",
    description="CRUD de alumnos con validación Pydantic (Prácticas Profesionalizantes II)",
    version="1.0.0",
)

# ===========================================================================
# SCHEMAS (Pydantic) — separados por responsabilidad, usando herencia
# ===========================================================================

class AlumnoBase(BaseModel):
    """Campos comunes a crear y a responder."""
    nombre: str = Field(min_length=2, max_length=100, examples=["Ana García"])
    nombre: str 
    carrera: str = Field(min_length=2, max_length=50, examples=["Sistemas"])


class AlumnoCreate(AlumnoBase):
    """Lo que exigimos al CREAR un alumno (hereda nombre y carrera)."""
    edad: int = Field(ge=16, le=99, description="Debe estar entre 16 y 99")
    email: Optional[str] = None                # campo opcional
    # email: str | None = None                # campo opcional


class AlumnoUpdate(BaseModel):
    """Para ACTUALIZAR: todos los campos son opcionales."""
    nombre: str | None = Field(default=None, min_length=2, max_length=100)
    carrera: str | None = Field(default=None, min_length=2, max_length=50)
    edad: int | None = Field(default=None, ge=16, le=99)
    email: str | None = None


class AlumnoResponse(AlumnoBase):
    """Lo que la API DEVUELVE (incluye el id generado)."""
    id: int
    edad: int
    email: str | None = None


# ===========================================================================
# "Base de datos" en memoria (después usaríamos PostgreSQL)
# ===========================================================================
alumnos_db: list[dict] = []
next_id: int = 1


# ===========================================================================
# CRUD COMPLETO — 5 endpoints
# ===========================================================================


@app.post("/alumnos", response_model=AlumnoResponse, status_code=status.HTTP_201_CREATED)
def crear_alumno(alumno: AlumnoCreate):
    """CREATE → POST · 201. Pydantic valida el body automáticamente."""
    global next_id
    nuevo = {"id": next_id, **alumno.model_dump()}
    alumnos_db.append(nuevo)
    next_id += 1
    return nuevo


@app.get("/alumnos", response_model=list[AlumnoResponse])
def listar_alumnos():
    """READ (lista) → GET · 200."""
    return alumnos_db


@app.get("/alumnos/{alumno_id}", response_model=AlumnoResponse)
def obtener_alumno(alumno_id: int):
    """READ (detalle) → GET · 200, o 404 si no existe."""
    alumno = next((a for a in alumnos_db if a["id"] == alumno_id), None)
    if alumno is None:
        raise HTTPException(status_code=404, detail="Alumno no encontrado")
    return alumno


@app.put("/alumnos/{alumno_id}", response_model=AlumnoResponse)
def actualizar_alumno(alumno_id: int, datos: AlumnoUpdate):
    """UPDATE → PUT · 200. Actualiza SOLO los campos enviados."""
    alumno = next((a for a in alumnos_db if a["id"] == alumno_id), None)
    if alumno is None:
        raise HTTPException(status_code=404, detail="Alumno no encontrado")

    # exclude_unset=True → ignora los campos que no vinieron en el body,
    # así no pisamos con None lo que el usuario no quiso cambiar.
    cambios = datos.model_dump(exclude_unset=True)
    alumno.update(cambios)
    return alumno


@app.delete("/alumnos/{alumno_id}", status_code=status.HTTP_204_NO_CONTENT)
def eliminar_alumno(alumno_id: int):
    """DELETE → DELETE · 204 (sin cuerpo de respuesta)."""
    alumno = next((a for a in alumnos_db if a["id"] == alumno_id), None)
    if alumno is None:
        raise HTTPException(status_code=404, detail="Alumno no encontrado")
    alumnos_db.remove(alumno)
    return None

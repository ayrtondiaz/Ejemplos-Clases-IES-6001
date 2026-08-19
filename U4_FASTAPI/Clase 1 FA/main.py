# main.py
# TP8 - Primer API REST con FastAPI
# Ejercicios 4 y 5  ·  Por Ing. Díaz Ayrton
#
# Cómo correr (SIN uvicorn):
#   1) python -m venv venv   &&   venv\Scripts\activate     (Windows)
#   2) pip install "fastapi[standard]"
#   3) fastapi dev main.py
#   4) Abrí la documentación interactiva en  http://127.0.0.1:8000/docs

from fastapi import FastAPI, HTTPException, Query

app = FastAPI(
    title="TP8 - API de Alumnos",
    description="Primer API REST con FastAPI — Ejercicios 4 y 5 (Prácticas Profesionalizantes II)",
    version="1.0.0",
)

# ---------------------------------------------------------------------------
# "Base de datos" en memoria: lista de alumnos como diccionarios (al menos 5).
# Cada alumno tiene una nota para poder filtrar y calcular estadísticas (ej. 5).
# ---------------------------------------------------------------------------
alumnos_db = [
    {"id": 1, "nombre": "Ana",    "edad": 22, "carrera": "Sistemas", "nota": 8.5},
    {"id": 2, "nombre": "Carlos López",  "edad": 20, "carrera": "Redes",    "nota": 6.0},
    {"id": 3, "nombre": "Lucía Díaz",     "edad": 25, "carrera": "Sistemas", "nota": 4.5},
    {"id": 4, "nombre": "Mateo Pérez",    "edad": 19, "carrera": "Software", "nota": 9.0},
    {"id": 5, "nombre": "Sofía Ruiz",     "edad": 23, "carrera": "Sistemas", "nota": 7.0},
    {"id": 6, "nombre": "Bruno Sosa",     "edad": 21, "carrera": "Redes",    "nota": 3.0},
]

NOTA_APROBADO = 6.0  # nota mínima para considerar aprobado


# ===========================================================================
# EJERCICIO 4 — 3 endpoints GET
# ===========================================================================

@app.get("/")
def inicio():
    return {"message": "Bienvenido a la API de alumnos de Ayrton Díaz 👋"}


@app.get("/alumnos")
def listar_alumnos(
    # ---- EJERCICIO 5: query parameters (opcionales y combinables) ----
    carrera: str | None = Query(
        default=None,
        description="(a) Filtra los alumnos por carrera (ej: Sistemas)",
    ),
    min_nota: float | None = Query(
        default=None,
        ge=0,
        le=10,
        description="(b) Devuelve solo los alumnos con nota mayor o igual a este valor",
    ),
    nombre: str | None = Query(
        default=None,
        description="(a) Filtra los alumnos por carrera (ej: Sistemas)",
    ),
):
    """(b) Lista de alumnos. Sin parámetros devuelve todos.

    Con query params filtra por carrera y/o nota mínima.
    Los filtros son combinables: /alumnos?carrera=Sistemas&min_nota=7
    """
    resultado = alumnos_db

    if carrera is not None:
        resultado = [a for a in resultado if a["carrera"].lower() == carrera.lower()]
    if nombre is not None:
        resultado = [a for a in resultado if a["nombre"].lower() == nombre.lower()]

    if min_nota is not None:
        resultado = [a for a in resultado if a["nota"] >= min_nota]

    return {"total": len(resultado), "alumnos": resultado}


@app.get("/alumnos/{alumno_id}")
def obtener_alumno(alumno_id: int):
    """(c) Devuelve un alumno específico por su id (path parameter).

    Si el id no existe, responde 404 con un detalle del error.
    """
    alumno = next((a for a in alumnos_db if a["id"] == alumno_id), None)
    if alumno is None:
        raise HTTPException(status_code=404, detail=f"No existe el alumno con id {alumno_id}")
    return alumno


# ===========================================================================
# EJERCICIO 5 — (d) Endpoint de estadísticas
# ===========================================================================

@app.get("/estadisticas")
def estadisticas():
    """(d) Resumen de la cohorte: total, promedio, aprobados y desaprobados."""
    total = len(alumnos_db)
    promedio = round(sum(a["nota"] for a in alumnos_db) / total, 2) if total else 0.0
    aprobados = sum(1 for a in alumnos_db if a["nota"] >= NOTA_APROBADO)
    desaprobados = total - aprobados

    return {
        "total_alumnos": total,
        "promedio_general": promedio,
        "aprobados": aprobados,
        "desaprobados": desaprobados,
        "nota_aprobado": NOTA_APROBADO,
    }

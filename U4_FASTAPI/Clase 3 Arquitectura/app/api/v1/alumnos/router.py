# app/api/v1/alumnos/router.py
# Router HTTP del recurso Alumno. Solo request/response; la lógica vive en el repository.

from fastapi import APIRouter, HTTPException, Query, status
from . import repository as repo
from .schemas import AlumnoCreate, AlumnoUpdate, AlumnoResponse

router = APIRouter(prefix="/alumnos", tags=["Alumnos"])


@router.get("/", response_model=list[AlumnoResponse])
def listar(
    query: str | None = Query(default=None, description="Buscar por nombre"),
    carrera_id: int | None = Query(default=None, ge=1, description="Filtrar por carrera"),
):
    """Lista alumnos. Filtros opcionales combinables: ?query=&carrera_id=."""
    resultado = repo.list_alumnos()
    if query:
        resultado = repo.search_by_nombre(query)
    if carrera_id is not None:
        # Se aplica sobre el resultado anterior (permite combinar)
        resultado = [a for a in resultado if a["carrera"] and a["carrera"].id == carrera_id]
    return resultado


@router.get("/{alumno_id}", response_model=AlumnoResponse)
def obtener(alumno_id: int):
    alumno = repo.get_by_id(alumno_id)
    if alumno is None:
        raise HTTPException(status_code=404, detail="Alumno no encontrado")
    return alumno


@router.post("/", response_model=AlumnoResponse, status_code=status.HTTP_201_CREATED)
def crear(data: AlumnoCreate):
    ok, error = repo.ensure_carrera_y_materias(data.carrera_id, data.materia_ids)
    if not ok:
        raise HTTPException(status_code=400, detail=error)
    return repo.create(data)


@router.put("/{alumno_id}", response_model=AlumnoResponse)
def actualizar(alumno_id: int, data: AlumnoUpdate):
    # Si cambia la carrera o las materias, validamos que existan
    if data.carrera_id is not None or data.materia_ids is not None:
        actual = repo.get_by_id(alumno_id)
        if actual is None:
            raise HTTPException(status_code=404, detail="Alumno no encontrado")
        cid = data.carrera_id if data.carrera_id is not None else actual["carrera"].id
        mids = data.materia_ids if data.materia_ids is not None else [m.id for m in actual["materias"]]
        ok, error = repo.ensure_carrera_y_materias(cid, mids)
        if not ok:
            raise HTTPException(status_code=400, detail=error)

    updated = repo.update(alumno_id, data)
    if updated is None:
        raise HTTPException(status_code=404, detail="Alumno no encontrado")
    return updated


@router.delete("/{alumno_id}", status_code=status.HTTP_204_NO_CONTENT)
def eliminar(alumno_id: int):
    if not repo.delete(alumno_id):
        raise HTTPException(status_code=404, detail="Alumno no encontrado")
    return None

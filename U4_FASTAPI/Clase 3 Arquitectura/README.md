# Clase 30 — Alumnos (arquitectura de capas, BD en memoria)

Mismo diseño de la Clase 30 (router / schemas / repository / models + CORS), pero con el dominio de la Unidad 4: **Alumnos**, **Carreras** y **Materias**. La "base de datos" son listas Python (después se reemplaza por SQLAlchemy + PostgreSQL sin tocar el resto).

## Estructura de archivos

```
app/
  main.py                       # app + CORS + include_router
  core/db.py                    # listas: carreras, materias, alumnos
  models/
    carrera.py
    materia.py
    alumno.py
  api/v1/alumnos/
    router.py                   # endpoints /alumnos
    schemas.py                  # Pydantic (Base/Create/Update/Response)
    repository.py               # acceso a datos + validaciones
```

## Instalación y ejecución (sin uvicorn)

```bash
python -m venv venv
venv\Scripts\activate                # Windows
pip install -r requirements.txt
fastapi dev app/main.py
```

- Swagger UI: http://127.0.0.1:8000/docs

## Endpoints

| Método | Ruta | Estado | Descripción |
|--------|------|--------|-------------|
| GET | `/alumnos` | 200 | Lista todos. Filtros: `?query=` (por nombre) y `?carrera_id=` |
| GET | `/alumnos/{id}` | 200 / 404 | Detalle con carrera y materias resueltas |
| POST | `/alumnos` | 201 / 400 | Crea (valida que existan carrera y materias) |
| PUT | `/alumnos/{id}` | 200 / 404 / 400 | Actualiza solo lo enviado (`exclude_unset`) |
| DELETE | `/alumnos/{id}` | 204 / 404 | Elimina |

## Prueba rápida

```bash
# Listar
curl http://127.0.0.1:8000/alumnos

# Buscar por nombre y filtrar por carrera
curl "http://127.0.0.1:8000/alumnos?query=ana&carrera_id=1"

# Crear
curl -X POST http://127.0.0.1:8000/alumnos -H "Content-Type: application/json" -d '{
  "nombre": "Mateo Pérez",
  "edad": 19,
  "email": "mateo@mail.com",
  "carrera_id": 3,
  "materia_ids": [1, 4]
}'

# Actualizar solo el email
curl -X PUT http://127.0.0.1:8000/alumnos/1 -H "Content-Type: application/json" -d '{"email": "ana.garcia@mail.com"}'

# Error controlado: carrera inexistente → 400
curl -X POST http://127.0.0.1:8000/alumnos -H "Content-Type: application/json" -d '{
  "nombre": "Prueba", "edad": 20, "carrera_id": 999, "materia_ids": []
}'
```

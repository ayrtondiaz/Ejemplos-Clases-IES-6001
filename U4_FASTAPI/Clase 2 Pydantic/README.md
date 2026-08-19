# Clase 29 — Pydantic + CRUD REST completo

CRUD de alumnos con **FastAPI + Pydantic**. Se ejecuta con el comando `fastapi` (no se usa `uvicorn`).

## Instalación y ejecución

```bash
python -m venv venv
venv\Scripts\activate                 # Windows
pip install -r requirements.txt       # = pip install "fastapi[standard]"
fastapi dev main.py
```

- Swagger UI: http://127.0.0.1:8000/docs

## Conceptos de la clase que muestra este ejemplo

- **BaseModel + Field**: validación automática de tipos y restricciones (`min_length`, `ge`, `le`).
- **Schemas por responsabilidad (herencia)**: `AlumnoBase` → `AlumnoCreate` (exige `edad`), `AlumnoUpdate` (todo opcional) y `AlumnoResponse` (agrega `id`).
- **CRUD completo** con sus códigos de estado: POST 201, GET 200, PUT 200, DELETE 204.
- **HTTPException(404)** cuando el alumno no existe.
- **`model_dump(exclude_unset=True)`** en el PUT: actualiza solo los campos enviados.
- **Validación 422** automática cuando el body no cumple el schema.

## Endpoints

| Método | Ruta | Éxito | Descripción |
|--------|------|-------|-------------|
| POST | `/alumnos` | 201 | Crear alumno (valida el body) |
| GET | `/alumnos` | 200 | Listar todos |
| GET | `/alumnos/{id}` | 200 / 404 | Obtener uno |
| PUT | `/alumnos/{id}` | 200 / 404 | Actualizar (solo lo enviado) |
| DELETE | `/alumnos/{id}` | 204 / 404 | Eliminar |

## Prueba rápida (curl)

```bash
# Crear
curl -X POST http://127.0.0.1:8000/alumnos \
  -H "Content-Type: application/json" \
  -d '{"nombre": "Ana García", "carrera": "Sistemas", "edad": 22}'

# Listar
curl http://127.0.0.1:8000/alumnos

# Actualizar solo la carrera (exclude_unset)
curl -X PUT http://127.0.0.1:8000/alumnos/1 \
  -H "Content-Type: application/json" \
  -d '{"carrera": "Software"}'

# Eliminar
curl -X DELETE http://127.0.0.1:8000/alumnos/1

# Body inválido → 422 (edad menor a 16, nombre muy corto)
curl -X POST http://127.0.0.1:8000/alumnos \
  -H "Content-Type: application/json" \
  -d '{"nombre": "A", "carrera": "Redes", "edad": 10}'
```

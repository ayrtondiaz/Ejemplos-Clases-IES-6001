# TP8 — Primer API REST con FastAPI (Ejercicios 4 y 5)

API de alumnos hecha con **FastAPI**. Se ejecuta con el comando `fastapi` (no se usa `uvicorn`).

## Requisitos

- Python 3.10 o superior

## Instalación

```bash
# 1) Crear y activar el entorno virtual
python -m venv venv
venv\Scripts\activate          # Windows
# source venv/bin/activate     # Linux / Mac

# 2) Instalar dependencias
pip install -r requirements.txt
# (equivale a:  pip install "fastapi[standard]")
```

## Ejecutar el servidor (sin uvicorn)

```bash
fastapi dev main.py
```

- API: http://127.0.0.1:8000
- **Swagger UI (documentación interactiva):** http://127.0.0.1:8000/docs
- ReDoc: http://127.0.0.1:8000/redoc

> Para un entorno de producción se usaría `fastapi run main.py`.

## Endpoints

### Ejercicio 4 — 3 endpoints GET

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/` | Mensaje de bienvenida con mi nombre |
| GET | `/alumnos` | Lista de alumnos (≥ 5) |
| GET | `/alumnos/{id}` | Un alumno por id (path param) o **404** si no existe |

### Ejercicio 5 — query params y estadísticas

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/alumnos?carrera=Sistemas` | (a) Filtra por carrera (opcional) |
| GET | `/alumnos?min_nota=6` | (b) Filtra por nota mínima |
| GET | `/alumnos?carrera=Sistemas&min_nota=7` | (c) Ambos filtros combinados |
| GET | `/estadisticas` | (d) Total, promedio, aprobados y desaprobados |

## Probar rápido (ejemplos)

```bash
# Lista completa
curl http://127.0.0.1:8000/alumnos

# Alumno por id
curl http://127.0.0.1:8000/alumnos/3

# Filtros combinados
curl "http://127.0.0.1:8000/alumnos?carrera=Sistemas&min_nota=7"

# Estadísticas
curl http://127.0.0.1:8000/estadisticas
```

O directamente desde **/docs** con el botón **"Try it out"**.

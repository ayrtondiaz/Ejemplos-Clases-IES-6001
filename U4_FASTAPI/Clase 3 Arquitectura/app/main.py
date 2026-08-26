# app/main.py
# Punto de entrada: crea la app, monta CORS y monta el router de /alumnos.

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.v1.alumnos.router import router as alumnos_router

app = FastAPI(
    title="Clase 30 — Alumnos (arquitectura de capas)",
    description="CRUD de Alumnos con router / schemas / repository / models — BD en memoria",
    version="1.0.0",
)

# CORS: para que un front en http://localhost:5173 (React) pueda consumir la API
# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["http://localhost:5173"],
#     allow_methods=["*"],
#     allow_headers=["*"],
#     allow_credentials=True,
# )


@app.get("/")
def home():
    return {"message": "API de Alumnos — Clase 30 (capas + CORS)"}


# Se monta el router del recurso Alumnos (queda bajo /alumnos)
app.include_router(alumnos_router)

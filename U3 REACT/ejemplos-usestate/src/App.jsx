import { useState } from "react";
import Contador from "./components/Contador";
import Formulario from "./components/Formulario";
import ListaTareas from "./components/ListaTareas";
import "./App.css";

function App() {
  const [ejemploActivo, setEjemploActivo] = useState("contador");

  return (
    <div className="app">
      <header className="header">
        <h1>3 Ejemplos de <span className="highlight">useState</span></h1>
        <p className="subtitulo">Clase 19 — Practicas Profesionalizantes II</p>
      </header>

      <nav className="nav-ejemplos">
        <button
          className={ejemploActivo === "contador" ? "btn-nav activo" : "btn-nav"}
          onClick={() => setEjemploActivo("contador")}
        >
          1. Contador
        </button>
        <button
          className={ejemploActivo === "formulario" ? "btn-nav activo" : "btn-nav"}
          onClick={() => setEjemploActivo("formulario")}
        >
          2. Formulario
        </button>
        <button
          className={ejemploActivo === "tareas" ? "btn-nav activo" : "btn-nav"}
          onClick={() => setEjemploActivo("tareas")}
        >
          3. Lista de Tareas
        </button>
      </nav>

      <main className="contenido">
        {ejemploActivo === "contador" && <Contador />}
        {ejemploActivo === "formulario" && <Formulario />}
        {ejemploActivo === "tareas" && <ListaTareas />}
      </main>

      <footer className="footer">
        <p>Ing. Diaz Ayrton — React + Vite</p>
      </footer>
    </div>
  );
}

export default App;

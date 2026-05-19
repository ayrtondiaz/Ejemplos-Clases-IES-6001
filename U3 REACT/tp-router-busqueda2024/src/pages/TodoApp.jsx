import { useState } from "react";
import styles from "./TodoApp.module.css";

/*
 * TODOAPP — Ruta /todo (la Todo App del TP6)
 * Incluida como una pagina mas dentro del Router.
 * Demuestra que cada ruta renderiza un componente diferente.
 */

function TodoApp() {
  const [tareas, setTareas] = useState([]);
  const [texto, setTexto] = useState("");

  const agregar = (e) => {
    e.preventDefault();
    if (!texto.trim()) return;
    setTareas([...tareas, { id: Date.now(), texto: texto.trim(), completada: false }]);
    setTexto("");
  };

  const toggle = (id) => {
    setTareas(tareas.map((t) => (t.id === id ? { ...t, completada: !t.completada } : t)));
  };

  const eliminar = (id) => {
    setTareas(tareas.filter((t) => t.id !== id));
  };

  const pendientes = tareas.filter((t) => !t.completada).length;

  return (
    <div>
      <h2 className={styles.titulo}>Todo App</h2>
      <p className={styles.desc}>Ruta <code>/todo</code> — CRUD con useState.</p>

      <form className={styles.form} onSubmit={agregar}>
        <input
          className={styles.input}
          type="text"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          placeholder="Nueva tarea..."
        />
        <button className={styles.btnAdd} type="submit" disabled={!texto.trim()}>
          Agregar
        </button>
      </form>

      {tareas.length > 0 && (
        <p className={styles.counter}>{pendientes} pendientes de {tareas.length}</p>
      )}

      {tareas.length === 0 ? (
        <p className={styles.vacio}>No hay tareas. Agrega una arriba.</p>
      ) : (
        <ul className={styles.lista}>
          {tareas.map((t) => (
            <li key={t.id} className={styles.item}>
              <div
                className={`${styles.check} ${t.completada ? styles.done : ""}`}
                onClick={() => toggle(t.id)}
              >
                {t.completada && "✓"}
              </div>
              <span className={`${styles.texto} ${t.completada ? styles.tachado : ""}`}>
                {t.texto}
              </span>
              <button className={styles.btnDel} onClick={() => eliminar(t.id)}>
                &times;
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TodoApp;

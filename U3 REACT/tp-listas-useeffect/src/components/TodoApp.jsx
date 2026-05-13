import { useState } from "react";

/*
 * EJERCICIO 6: To-Do App Completa (CRUD)
 * =======================================
 * Conceptos: useState con array de objetos, inmutabilidad,
 *            spread operator, .map(), .filter(),
 *            renderizado condicional, estado derivado
 *
 * CRUD = Create (agregar), Read (listar), Update (toggle), Delete (eliminar)
 *
 * REGLA: nunca mutar el array directamente.
 *   Agregar  -> [...tareas, nueva]
 *   Toggle   -> tareas.map(t => t.id === id ? {...t, completada: !t.completada} : t)
 *   Eliminar -> tareas.filter(t => t.id !== id)
 */

function TodoApp() {
  // Estado del array de tareas
  const [tareas, setTareas] = useState([]);

  // Estado del input
  const [texto, setTexto] = useState("");

  // CREAR: agregar tarea
  const agregar = (e) => {
    e.preventDefault();
    if (!texto.trim()) return; // no agregar vacias

    const nueva = {
      id: Date.now(),
      texto: texto.trim(),
      completada: false,
    };

    setTareas([...tareas, nueva]); // spread: copia todo + agrega
    setTexto(""); // limpiar input
  };

  // ACTUALIZAR: toggle completada con spread
  const toggleTarea = (id) => {
    setTareas(
      tareas.map((t) =>
        t.id === id ? { ...t, completada: !t.completada } : t
      )
    );
  };

  // ELIMINAR: filter saca el item
  const eliminarTarea = (id) => {
    setTareas(tareas.filter((t) => t.id !== id));
  };

  // Estado derivado: contador de pendientes
  const pendientes = tareas.filter((t) => !t.completada).length;

  return (
    <div>
      <h2>Ejercicio 6: To-Do App</h2>
      <p className="desc">
        CRUD completo con <code>useState</code>. Agregar usa{" "}
        <code>[...spread]</code>, toggle usa <code>.map()</code>, eliminar
        usa <code>.filter()</code>. El contador de pendientes es estado derivado.
      </p>

      {/* Formulario para agregar */}
      <form className="todo-form" onSubmit={agregar}>
        <input
          type="text"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          placeholder="Nueva tarea..."
        />
        <button type="submit" disabled={!texto.trim()}>
          Agregar
        </button>
      </form>

      {/* Contador de pendientes */}
      {tareas.length > 0 && (
        <p className="pendientes-badge">
          {pendientes} pendiente{pendientes !== 1 && "s"} de {tareas.length}
        </p>
      )}

      {/* Renderizado condicional: lista o mensaje vacio */}
      {tareas.length === 0 ? (
        <p className="vacio">No hay tareas. Agrega una arriba.</p>
      ) : (
        <div>
          {tareas.map((tarea) => (
            <div key={tarea.id} className="todo-item">
              {/* Checkbox visual */}
              <div
                className={`todo-check ${tarea.completada ? "done" : ""}`}
                onClick={() => toggleTarea(tarea.id)}
              >
                {tarea.completada && "✓"}
              </div>

              {/* Texto con tachado condicional */}
              <span className={`todo-texto ${tarea.completada ? "tachado" : ""}`}>
                {tarea.texto}
              </span>

              {/* Boton eliminar */}
              <button
                className="todo-borrar"
                onClick={() => eliminarTarea(tarea.id)}
              >
                &times;
              </button>
            </div>
          ))}
        </div>
      )}

      <div className="codigo">
        <span className="cm">{"// Toggle con spread (inmutable):"}</span><br />
        <span className="fn">setTareas</span>(tareas.<span className="fn">map</span>(t =&gt;<br />
        &nbsp;&nbsp;t.id === id ? {"{"} ...t, <span className="st">completada</span>: !t.completada {"}"} : t<br />
        ));
      </div>
    </div>
  );
}

export default TodoApp;

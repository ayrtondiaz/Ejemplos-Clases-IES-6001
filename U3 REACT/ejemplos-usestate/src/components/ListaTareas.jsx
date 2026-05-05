import { useState } from "react";

function ListaTareas() {
  const [tareas, setTareas] = useState([
    { id: 1, texto: "Aprender useState", completada: true },
    { id: 2, texto: "Practicar con formularios", completada: false },
    { id: 3, texto: "Hacer el TP6", completada: false },
  ]);
  const [nuevaTarea, setNuevaTarea] = useState("");
  const [filtro, setFiltro] = useState("todas");

  const agregar = (e) => {
    e.preventDefault();
    if (!nuevaTarea.trim()) return;
    setTareas([...tareas, { id: Date.now(), texto: nuevaTarea.trim(), completada: false }]);
    setNuevaTarea("");
  };

  const toggleTarea = (id) => {
    setTareas(tareas.map((t) => t.id === id ? { ...t, completada: !t.completada } : t));
  };

  const eliminarTarea = (id) => {
    setTareas(tareas.filter((t) => t.id !== id));
  };

  const limpiarCompletadas = () => {
    setTareas(tareas.filter((t) => !t.completada));
  };

  const totalTareas = tareas.length;
  const completadas = tareas.filter((t) => t.completada).length;
  const pendientes = totalTareas - completadas;

  const tareasFiltradas = tareas.filter((tarea) => {
    if (filtro === "pendientes") return !tarea.completada;
    if (filtro === "completadas") return tarea.completada;
    return true;
  });

  return (
    <div>
      <h2 className="ejemplo-titulo">Ejemplo 3: Lista de Tareas</h2>
      <p className="ejemplo-descripcion">
        Estado con <strong>arrays de objetos</strong>. Agregar usa{" "}
        <code>[...spread]</code>, modificar usa <code>.map()</code>, eliminar usa{" "}
        <code>.filter()</code>. Nunca se muta el array original.
      </p>

      <form className="tareas-form" onSubmit={agregar}>
        <input type="text" value={nuevaTarea} onChange={(e) => setNuevaTarea(e.target.value)}
          placeholder="Escribi una nueva tarea..." />
        <button type="submit" className="btn btn-azul">Agregar</button>
      </form>

      <div className="tareas-stats">
        <span className="stat-badge stat-total">Total: {totalTareas}</span>
        <span className="stat-badge stat-completadas">Completadas: {completadas}</span>
        <span className="stat-badge stat-pendientes">Pendientes: {pendientes}</span>
      </div>

      <div className="tareas-filtros">
        <button className={`btn-filtro ${filtro === "todas" ? "activo" : ""}`}
          onClick={() => setFiltro("todas")}>Todas</button>
        <button className={`btn-filtro ${filtro === "pendientes" ? "activo" : ""}`}
          onClick={() => setFiltro("pendientes")}>Pendientes</button>
        <button className={`btn-filtro ${filtro === "completadas" ? "activo" : ""}`}
          onClick={() => setFiltro("completadas")}>Completadas</button>
        {completadas > 0 && (
          <button className="btn-filtro" onClick={limpiarCompletadas}
            style={{ marginLeft: "auto", color: "#ef4444" }}>Limpiar completadas</button>
        )}
      </div>

      <ul className="tareas-lista">
        {tareasFiltradas.length === 0 ? (
          <li className="tareas-vacio">
            {filtro === "todas" ? "No hay tareas. Agrega una arriba." : `No hay tareas ${filtro}.`}
          </li>
        ) : (
          tareasFiltradas.map((tarea) => (
            <li key={tarea.id} className="tarea-item">
              <div className={`tarea-checkbox ${tarea.completada ? "completada" : ""}`}
                onClick={() => toggleTarea(tarea.id)}>
                {tarea.completada && "✓"}
              </div>
              <span className={`tarea-texto ${tarea.completada ? "completada" : ""}`}>
                {tarea.texto}
              </span>
              <button className="tarea-eliminar" onClick={() => eliminarTarea(tarea.id)}
                title="Eliminar tarea">&times;</button>
            </li>
          ))
        )}
      </ul>

      <div className="codigo-info">
        <span className="comment">{"// Agregar (spread):"}</span><br />
        <span className="func">setTareas</span>([...tareas, nuevaTarea]);<br /><br />
        <span className="comment">{"// Modificar (map):"}</span><br />
        <span className="func">setTareas</span>(tareas.<span className="func">map</span>(t =&gt; t.id === id ? {"{"} ...t, done: !t.done {"}"} : t));<br /><br />
        <span className="comment">{"// Eliminar (filter):"}</span><br />
        <span className="func">setTareas</span>(tareas.<span className="func">filter</span>(t =&gt; t.id !== id));
      </div>
    </div>
  );
}

export default ListaTareas;

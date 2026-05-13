import { useState, useEffect } from "react";

/*
 * EJEMPLO PRACTICO useEffect #1: Fetch de una API
 * ================================================
 * Conceptos: useEffect con array vacio [], fetch + async/await,
 *            estados de carga (loading), manejo de errores
 *
 * useEffect(() => { ... }, [])
 *   - Se ejecuta UNA sola vez cuando el componente se monta
 *   - El array vacio [] significa "sin dependencias"
 *   - Es el lugar correcto para hacer fetch de datos
 *
 * Por que useEffect y no directamente en el cuerpo?
 *   - El cuerpo del componente se ejecuta en CADA render
 *   - Sin useEffect, harias un fetch infinito:
 *     fetch -> setState -> re-render -> fetch -> setState -> ...
 *   - useEffect controla CUANDO se ejecuta el efecto
 */

function FetchUsuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  // useEffect con [] = se ejecuta solo al montar el componente
  useEffect(() => {
    // Funcion async dentro del useEffect
    async function cargarUsuarios() {
      try {
        setCargando(true);
        const respuesta = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

        if (!respuesta.ok) {
          throw new Error("Error al cargar los datos");
        }

        const datos = await respuesta.json();
        setUsuarios(datos);
      } catch (err) {
        setError(err.message);
      } finally {
        setCargando(false);
      }
    }

    cargarUsuarios();
  }, []); // <-- array vacio: solo se ejecuta UNA vez

  return (
    <div>
      <h2>useEffect: Fetch de API</h2>
      <p className="desc">
        <code>useEffect</code> con <code>[]</code> se ejecuta al montar
        el componente. Ideal para <code>fetch</code> de datos. Usamos 3 estados:
        datos, cargando y error.
      </p>

      {/* Renderizado condicional segun el estado */}
      {cargando ? (
        <p className="cargando">Cargando usuarios...</p>
      ) : error ? (
        <p className="cargando" style={{ color: "#ef4444" }}>Error: {error}</p>
      ) : (
        <ul className="usuarios-lista">
          {usuarios.map((user) => (
            <li key={user.id}>
              <strong>{user.name}</strong>
              <span style={{ color: "#666", marginLeft: "0.5rem", fontSize: "0.85rem" }}>
                {user.email}
              </span>
            </li>
          ))}
        </ul>
      )}

      <div className="codigo">
        <span className="cm">{"// useEffect con array vacio = ejecutar al montar:"}</span><br />
        <span className="fn">useEffect</span>(() =&gt; {"{"}<br />
        &nbsp;&nbsp;<span className="kw">async function</span> <span className="fn">cargar</span>() {"{"}<br />
        &nbsp;&nbsp;&nbsp;&nbsp;<span className="kw">const</span> res = <span className="kw">await</span> <span className="fn">fetch</span>(<span className="st">"url"</span>);<br />
        &nbsp;&nbsp;&nbsp;&nbsp;<span className="kw">const</span> datos = <span className="kw">await</span> res.<span className="fn">json</span>();<br />
        &nbsp;&nbsp;&nbsp;&nbsp;<span className="fn">setUsuarios</span>(datos);<br />
        &nbsp;&nbsp;{"}"}<br />
        &nbsp;&nbsp;<span className="fn">cargar</span>();<br />
        {"}"}, <span className="st">[]</span>); <span className="cm">{"// <-- [] = solo una vez"}</span>
      </div>
    </div>
  );
}

export default FetchUsuarios;

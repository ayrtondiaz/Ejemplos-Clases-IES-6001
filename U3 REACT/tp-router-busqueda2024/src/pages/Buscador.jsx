import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import Card from "../components/Card";
import styles from "./Buscador.module.css";

/*
 * BUSCADOR — Ejercicio 2: Busqueda dinamica con re-fetch o filtro local
 * =====================================================================
 * (a) useState para la busqueda
 * (b) Filtrado en tiempo real con .filter() sobre datos ya cargados
 * (c) "No se encontraron resultados" si el filtro devuelve vacio
 * (d) useEffect con [busqueda] como dependencia para re-fetch
 *
 * Aca usamos JSONPlaceholder (/users) y filtramos por nombre,
 * email o ciudad en el cliente.
 *
 * SearchBar recibe value y onChange como props (lifting state).
 */

function Buscador() {
  const [usuarios, setUsuarios] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  // Cargar usuarios al montar
  useEffect(() => {
    async function cargar() {
      try {
        setCargando(true);
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!res.ok) throw new Error("Error al cargar");
        const data = await res.json();
        setUsuarios(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setCargando(false);
      }
    }
    cargar();
  }, []);

  // Filtrado local por nombre, email o ciudad
  const filtrados = usuarios.filter((u) => {
    const query = busqueda.toLowerCase();
    return (
      u.name.toLowerCase().includes(query) ||
      u.email.toLowerCase().includes(query) ||
      u.address.city.toLowerCase().includes(query)
    );
  });

  return (
    <div>
      <h2 className={styles.titulo}>Buscador de Usuarios</h2>
      <p className={styles.desc}>
        Ejercicio 2: busqueda con <code>.filter()</code> sobre datos de API.
        Filtra por nombre, email o ciudad.
      </p>

      {/* Ejercicio 2: SearchBar como componente separado con props */}
      <SearchBar value={busqueda} onChange={setBusqueda} />

      {/* Estados: cargando, error, vacio, resultados */}
      {cargando ? (
        <p className={styles.mensaje}>Cargando usuarios...</p>
      ) : error ? (
        <p className={styles.error}>Error: {error}</p>
      ) : filtrados.length === 0 ? (
        <p className={styles.mensaje}>
          No se encontraron resultados para "{busqueda}"
        </p>
      ) : (
        <div className={styles.grid}>
          {filtrados.map((user) => (
            <Card key={user.id} user={user} />
          ))}
        </div>
      )}

      <p className={styles.counter}>
        {filtrados.length} de {usuarios.length} usuarios
      </p>
    </div>
  );
}

export default Buscador;

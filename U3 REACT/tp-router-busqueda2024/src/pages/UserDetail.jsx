import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import styles from "./UserDetail.module.css";

/*
 * USERDETAIL — Ejercicio 4: Ruta dinamica con useParams
 * =====================================================
 * useParams() extrae el :id de la URL /usuario/:id
 * Hace fetch a jsonplaceholder.typicode.com/users/{id}
 * Muestra toda la info del usuario: nombre, email, telefono,
 * empresa, direccion.
 *
 * useEffect + useState para loading/error.
 */

function UserDetail() {
  const { id } = useParams(); // Extrae el :id de la URL
  const [usuario, setUsuario] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function cargar() {
      try {
        setCargando(true);
        setError(null);
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        if (!res.ok) throw new Error("Usuario no encontrado");
        const data = await res.json();
        setUsuario(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setCargando(false);
      }
    }
    cargar();
  }, [id]); // Se re-ejecuta si cambia el id

  if (cargando) return <p className={styles.mensaje}>Cargando...</p>;
  if (error) return <p className={styles.error}>Error: {error}</p>;
  if (!usuario) return null;

  return (
    <div>
      <Link to="/buscador" className={styles.volver}>
        ← Volver al buscador
      </Link>

      <div className={styles.card}>
        <div className={styles.avatar}>
          {usuario.name.charAt(0).toUpperCase()}
        </div>
        <h2 className={styles.nombre}>{usuario.name}</h2>
        <p className={styles.username}>@{usuario.username}</p>

        <div className={styles.datos}>
          <div className={styles.campo}>
            <span className={styles.label}>Email</span>
            <span>{usuario.email}</span>
          </div>
          <div className={styles.campo}>
            <span className={styles.label}>Telefono</span>
            <span>{usuario.phone}</span>
          </div>
          <div className={styles.campo}>
            <span className={styles.label}>Empresa</span>
            <span>{usuario.company.name}</span>
          </div>
          <div className={styles.campo}>
            <span className={styles.label}>Ciudad</span>
            <span>{usuario.address.city}</span>
          </div>
          <div className={styles.campo}>
            <span className={styles.label}>Direccion</span>
            <span>
              {usuario.address.street}, {usuario.address.suite}
            </span>
          </div>
          <div className={styles.campo}>
            <span className={styles.label}>Web</span>
            <span>{usuario.website}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDetail;

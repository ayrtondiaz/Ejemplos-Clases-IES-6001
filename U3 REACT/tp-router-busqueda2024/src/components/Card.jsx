import { Link } from "react-router-dom";
import styles from "./Card.module.css";

/*
 * CARD — Componente reutilizable (Ejercicio 6: usado en Home y Buscador)
 * Ejercicio 4: cada tarjeta tiene un <Link to={`/usuario/${user.id}`}>
 *              que lleva a la ruta dinamica /usuario/:id
 * Ejercicio 5: estilizado con CSS Modules (Card.module.css)
 *              hover effects con transition
 */

function Card({ user }) {
  return (
    <Link to={`/usuario/${user.id}`} className={styles.card}>
      <div className={styles.avatar}>
        {user.name.charAt(0).toUpperCase()}
      </div>
      <div className={styles.info}>
        <h3 className={styles.name}>{user.name}</h3>
        <p className={styles.email}>{user.email}</p>
        <p className={styles.city}>{user.address?.city || "Sin ciudad"}</p>
      </div>
    </Link>
  );
}

export default Card;

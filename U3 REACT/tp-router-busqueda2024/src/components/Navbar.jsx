import { Link, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";

/*
 * NAVBAR — Ejercicio 3: usar <Link to="/ruta"> (no <a href>)
 * Ejercicio 5: estilizado con CSS Modules (Navbar.module.css)
 *
 * <Link> de React Router cambia la URL SIN recargar la pagina.
 * <a href> recargaria toda la app y perderia el estado.
 *
 * useLocation() nos da la ruta actual para marcar el link activo.
 */

function Navbar() {
  const location = useLocation();

  const links = [
    { to: "/", label: "Inicio" },
    { to: "/buscador", label: "Buscador" },
    { to: "/todo", label: "Todo App" },
  ];

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          TP React
        </Link>
        <div className={styles.links}>
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`${styles.link} ${
                location.pathname === link.to ? styles.activo : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

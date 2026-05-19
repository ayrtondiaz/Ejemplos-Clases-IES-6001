import { Link } from "react-router-dom";

/*
 * NOTFOUND — Ejercicio 3: ruta * (catch-all) para pagina 404
 * Cualquier URL que no coincida con las rutas definidas
 * cae aca. El usuario puede volver al inicio con <Link>.
 */

function NotFound() {
  return (
    <div style={{ textAlign: "center", padding: "3rem" }}>
      <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>404</div>
      <h2 style={{ color: "#1e3a5f", marginBottom: "0.5rem" }}>
        Pagina no encontrada
      </h2>
      <p style={{ color: "#9ca3af", marginBottom: "1.5rem" }}>
        La ruta que buscas no existe.
      </p>
      <Link
        to="/"
        style={{
          padding: "0.6rem 1.5rem",
          background: "#3b82f6",
          color: "white",
          borderRadius: "8px",
          fontWeight: 600,
        }}
      >
        Volver al inicio
      </Link>
    </div>
  );
}

export default NotFound;

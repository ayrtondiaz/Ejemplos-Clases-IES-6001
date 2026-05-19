import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";

/*
 * HOME — Ejercicio 6: pagina de inicio atractiva
 * (a) Seccion hero con titulo, subtitulo y boton CTA
 *     useNavigate() permite navegar programaticamente
 * (b) Seccion "Features" con 3 tarjetas Card reutilizables
 * (c) Diseno responsive (CSS Modules con media queries)
 */

function Home() {
  const navigate = useNavigate();

  const features = [
    {
      emoji: "🔍",
      titulo: "Busqueda en tiempo real",
      desc: "Filtra usuarios de una API mientras escribis. useEffect con dependencia [busqueda].",
    },
    {
      emoji: "✅",
      titulo: "Gestion de tareas",
      desc: "CRUD completo con useState: agregar, completar y eliminar tareas.",
    },
    {
      emoji: "🧭",
      titulo: "Navegacion SPA",
      desc: "React Router con rutas dinamicas, useParams y pagina 404.",
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className={styles.hero}>
        <h1 className={styles.titulo}>TP React Completo</h1>
        <p className={styles.subtitulo}>
          Busqueda dinamica, React Router, CSS Modules y mas
        </p>
        <button className={styles.cta} onClick={() => navigate("/buscador")}>
          Ir al Buscador
        </button>
      </section>

      {/* Features */}
      <section className={styles.features}>
        {features.map((f) => (
          <div key={f.titulo} className={styles.featureCard}>
            <span className={styles.emoji}>{f.emoji}</span>
            <h3 className={styles.featureTitulo}>{f.titulo}</h3>
            <p className={styles.featureDesc}>{f.desc}</p>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Home;

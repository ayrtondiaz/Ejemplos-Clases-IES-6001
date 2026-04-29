// ═══════════════════════════════════════════════════════════════
//  App.jsx — Componente principal (raíz)
// ═══════════════════════════════════════════════════════════════
//  Acá COMPONEMOS todos los componentes hijos.
//  Fijate cómo el MISMO <Card /> se usa 3 veces con props distintas.
//  Eso es la magia de React: 1 componente → muchos resultados.
// ═══════════════════════════════════════════════════════════════

// 1) IMPORTAMOS los componentes desde la carpeta /components
import Header from './components/Header'
import Card from './components/Card'
import Boton from './components/Boton'
import Footer from './components/Footer'

function App() {
  return (
    // <> ... </>  =  Fragment de React (envoltorio invisible)
    // sirve cuando querés devolver varios elementos sin <div> extra.
    <>
      {/* ── Componente con UNA prop ─────────────────────────── */}
      <Header titulo="Mi Portfolio" />

      <main className="contenido">
        <h2 className="seccion-titulo">Mis servicios</h2>

        <section className="cards">
          {/* ── Mismo componente <Card />, distintas props ──── */}

          {/* Card 1: sin children */}
          <Card
            emoji="💻"
            titulo="Web"
            descripcion="Sitios modernos y rápidos"
          />

          {/* Card 2: con children (un <Boton /> adentro) */}
          <Card
            emoji="📱"
            titulo="Apps"
            descripcion="Apps móviles nativas"
          >
            <Boton texto="Ver más" color="#2E75B6" />
          </Card>

          {/* Card 3: sin children */}
          <Card
            emoji="🎨"
            titulo="Diseño"
            descripcion="UI/UX profesional"
          />
        </section>

        <h2 className="seccion-titulo">Botones (mismo componente, distintas props)</h2>
        <div className="botones-demo">
          <Boton />                                {/* usa los DEFAULTS */}
          <Boton texto="Enviar" color="green" />
          <Boton texto="Eliminar" color="#DC2626" />
        </div>
      </main>

      {/* ── Footer SIN prop → usa el valor por defecto ──────── */}
      <Footer/>
    </>
  )
}

export default App

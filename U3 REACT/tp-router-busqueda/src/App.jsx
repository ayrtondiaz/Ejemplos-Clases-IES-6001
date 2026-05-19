import { Routes, Route, Link, useLocation, Navigate } from 'react-router-dom'
import Ej2Busqueda from './pages/Ej2Busqueda'
import Ej3Router from './pages/Ej3Router'
import Ej4Params from './pages/Ej4Params'
import Ej5Modules from './pages/Ej5Modules'
import Ej6Home from './pages/Ej6Home'
import UserDetail from './pages/UserDetail'

const ejercicios = [
  { path: '/ej2', label: 'Ej 2: Busqueda Dinamica' },
  { path: '/ej3', label: 'Ej 3: React Router' },
  { path: '/ej4', label: 'Ej 4: useParams' },
  { path: '/ej5', label: 'Ej 5: CSS Modules' },
  { path: '/ej6', label: 'Ej 6: Pagina Home' },
]

export default function App() {
  const location = useLocation()

  return (
    <>
      {/* Header institucional */}
      <header className="header">
        <h1>Busqueda Dinamica, React Router y CSS Modules</h1>
        <p className="subtitulo">
          Practicas Profesionalizantes II — Programador Junior
        </p>
        <p className="profesor">Por Ing. Diaz Ayrton — Unidad 4</p>
      </header>

      {/* Navegacion por ejercicio (usa Link de React Router) */}
      <nav className="nav">
        {ejercicios.map((ej) => (
          <Link
            key={ej.path}
            to={ej.path}
            className={location.pathname.startsWith(ej.path) ? 'activo' : ''}
          >
            {ej.label}
          </Link>
        ))}
      </nav>

      {/* Panel de contenido */}
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/ej2" replace />} />
          <Route path="/ej2" element={<Ej2Busqueda />} />
          <Route path="/ej3" element={<Ej3Router />} />
          <Route path="/ej4" element={<Ej4Params />} />
          <Route path="/ej4/usuario/:id" element={<UserDetail />} />
          <Route path="/ej5" element={<Ej5Modules />} />
          <Route path="/ej6" element={<Ej6Home />} />
          <Route path="*" element={
            <div className="panel" style={{ textAlign: 'center' }}>
              <h2>404 — Pagina no encontrada</h2>
              <p style={{ margin: '16px 0' }}>La ruta no existe.</p>
              <Link to="/ej2" className="btn btn-azul" style={{ textDecoration: 'none' }}>
                Volver al inicio
              </Link>
            </div>
          } />
        </Routes>
      </main>

      {/* Footer institucional */}
      <footer className="footer">
        <strong>Ing. Diaz Ayrton</strong> — Practicas Profesionalizantes II — 2026
      </footer>
    </>
  )
}

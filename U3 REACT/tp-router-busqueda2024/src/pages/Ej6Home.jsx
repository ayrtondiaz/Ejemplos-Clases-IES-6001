import { useNavigate } from 'react-router-dom'

export default function Ej6Home() {
  const navigate = useNavigate()

  return (
    <div className="panel">
      <h2>Ejercicio 6 — Pagina Home con useNavigate</h2>
      <p className="desc">
        El hook <code>useNavigate()</code> permite navegar programaticamente
        desde JavaScript, sin necesidad de un <code>{'<Link>'}</code>. Es util
        para redirigir despues de un evento (clic en boton, envio de formulario,
        login exitoso). Se usa asi: <code>{'const navigate = useNavigate()'}</code>{' '}
        y luego <code>{'navigate("/ruta")'}</code>. En esta pagina Home
        demostramos botones que redirigen a cada seccion de la app.
      </p>

      {/* Demo interactiva */}
      <div className="demo">
        <div className="hero">
          <h2>Bienvenido a la App de Ejercicios</h2>
          <p>
            Explora los conceptos de React Router, Busqueda Dinamica y CSS Modules
          </p>
          <button
            className="btn btn-azul"
            onClick={() => navigate('/ej2')}
            style={{ marginTop: 4 }}
          >
            Ir al Buscador (useNavigate)
          </button>
        </div>

        <div className="features-grid">
          <div className="feature-card" onClick={() => navigate('/ej2')} style={{ cursor: 'pointer' }}>
            <div className="icono">🔍</div>
            <h4>Busqueda Dinamica</h4>
            <p>Filtra datos en tiempo real con .filter()</p>
          </div>
          <div className="feature-card" onClick={() => navigate('/ej3')} style={{ cursor: 'pointer' }}>
            <div className="icono">🧭</div>
            <h4>React Router</h4>
            <p>Navegacion SPA con Routes y Link</p>
          </div>
          <div className="feature-card" onClick={() => navigate('/ej4')} style={{ cursor: 'pointer' }}>
            <div className="icono">👤</div>
            <h4>useParams</h4>
            <p>Rutas dinamicas con parametros</p>
          </div>
          <div className="feature-card" onClick={() => navigate('/ej5')} style={{ cursor: 'pointer' }}>
            <div className="icono">🎨</div>
            <h4>CSS Modules</h4>
            <p>Estilos con alcance por componente</p>
          </div>
          <div className="feature-card" onClick={() => navigate('/ej6')} style={{ cursor: 'pointer' }}>
            <div className="icono">🏠</div>
            <h4>useNavigate</h4>
            <p>Navegacion programatica</p>
          </div>
          <div className="feature-card">
            <div className="icono">🚫</div>
            <h4>404 Not Found</h4>
            <p>Ruta catch-all para paginas inexistentes</p>
          </div>
        </div>
      </div>

      {/* Bloque de codigo explicativo */}
      <div className="codigo-info">
        <span className="comment">{'// useNavigate: navegacion programatica'}</span>{'\n\n'}
        <span className="keyword">import</span> {'{ useNavigate }'} <span className="keyword">from</span> <span className="string">'react-router-dom'</span>{'\n\n'}
        <span className="keyword">const</span> navigate = <span className="func">useNavigate</span>(){'\n\n'}
        <span className="comment">{'// Navegar al hacer clic en un boton'}</span>{'\n'}
        <span className="tag">{'<button'}</span> <span className="attr">onClick</span>={'={() => navigate("/ej2")}'}<span className="tag">{'>'}</span>{'\n'}
        {'  '}Ir al Buscador{'\n'}
        <span className="tag">{'</button>'}</span>{'\n\n'}
        <span className="comment">{'// Tambien sirve para redirigir despues de un evento'}</span>{'\n'}
        <span className="keyword">const</span> <span className="func">handleLogin</span> = () ={'>'} {'{'}{'\n'}
        {'  '}<span className="comment">{'// ... logica de login'}</span>{'\n'}
        {'  '}<span className="func">navigate</span>(<span className="string">'/dashboard'</span>){'\n'}
        {'}'}
      </div>
    </div>
  )
}

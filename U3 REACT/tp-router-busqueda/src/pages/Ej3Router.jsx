import { useState } from 'react'

export default function Ej3Router() {
  const [tareas, setTareas] = useState([
    { id: 1, texto: 'Aprender React Router', completada: true },
    { id: 2, texto: 'Crear rutas con Route', completada: false },
    { id: 3, texto: 'Usar Link para navegacion', completada: false },
  ])
  const [nueva, setNueva] = useState('')

  const agregar = () => {
    if (!nueva.trim()) return
    setTareas([...tareas, { id: Date.now(), texto: nueva.trim(), completada: false }])
    setNueva('')
  }

  const toggleCompletar = (id) => {
    setTareas(tareas.map((t) => (t.id === id ? { ...t, completada: !t.completada } : t)))
  }

  const eliminar = (id) => {
    setTareas(tareas.filter((t) => t.id !== id))
  }

  const pendientes = tareas.filter((t) => !t.completada).length

  return (
    <div className="panel">
      <h2>Ejercicio 3 — React Router y Lista de Tareas</h2>
      <p className="desc">
        <code>React Router</code> permite crear una SPA (Single Page Application) con
        multiples vistas sin recargar la pagina. Se configura con{' '}
        <code>BrowserRouter</code>, <code>Routes</code> y <code>Route</code>.
        La navegacion se hace con <code>{'<Link to="...">'}</code> en lugar de{' '}
        <code>{'<a href>'}</code>. Esta misma app usa Router: los botones de
        arriba son componentes <code>Link</code> de React Router.
        Aqui ademas practicamos CRUD con <code>spread</code>, <code>map</code>{' '}
        y <code>filter</code>.
      </p>

      <div className="demo">
        <div style={{ display: 'flex', gap: 8, marginBottom: 14 }}>
          <input
            className="search-input"
            type="text"
            placeholder="Nueva tarea..."
            value={nueva}
            onChange={(e) => setNueva(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && agregar()}
          />
          <button className="btn btn-azul" onClick={agregar}>
            Agregar
          </button>
        </div>

        <p style={{ fontSize: '0.85rem', color: '#777', marginBottom: 10 }}>
          {pendientes} tarea(s) pendiente(s) de {tareas.length} total
        </p>

        {tareas.length === 0 ? (
          <p style={{ textAlign: 'center', color: '#999' }}>No hay tareas. Agrega una.</p>
        ) : (
          tareas.map((t) => (
            <div className={`todo-item ${t.completada ? 'completada' : ''}`} key={t.id}>
              <input
                type="checkbox"
                checked={t.completada}
                onChange={() => toggleCompletar(t.id)}
              />
              <span>{t.texto}</span>
              <button onClick={() => eliminar(t.id)} title="Eliminar">
                ✕
              </button>
            </div>
          ))
        )}
      </div>

      <div className="codigo-info">
        <span className="comment">{'// Configuracion de React Router (main.jsx)'}</span>{'\n\n'}
        <span className="keyword">import</span> {'{ BrowserRouter }'} <span className="keyword">from</span> <span className="string">'react-router-dom'</span>{'\n\n'}
        <span className="tag">{'<BrowserRouter>'}</span>{'\n'}
        {'  '}<span className="tag">{'<App />'}</span>{'\n'}
        <span className="tag">{'</BrowserRouter>'}</span>{'\n\n'}
        <span className="comment">{'// Definir rutas en App.jsx'}</span>{'\n'}
        <span className="keyword">import</span> {'{ Routes, Route, Link }'} <span className="keyword">from</span> <span className="string">'react-router-dom'</span>{'\n\n'}
        <span className="tag">{'<Link'}</span> <span className="attr">to</span>=<span className="string">"/ej3"</span><span className="tag">{'>'}</span>Ejercicio 3<span className="tag">{'</Link>'}</span>{'\n\n'}
        <span className="tag">{'<Routes>'}</span>{'\n'}
        {'  '}<span className="tag">{'<Route'}</span> <span className="attr">path</span>=<span className="string">"/ej3"</span> <span className="attr">element</span>={'={<Ej3Router />}'} <span className="tag">{'/>'}</span>{'\n'}
        <span className="tag">{'</Routes>'}</span>
      </div>
    </div>
  )
}

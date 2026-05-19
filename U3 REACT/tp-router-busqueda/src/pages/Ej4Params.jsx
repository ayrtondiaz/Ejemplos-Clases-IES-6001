import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Ej4Params() {
  const [usuarios, setUsuarios] = useState([])
  const [cargando, setCargando] = useState(true)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => {
        setUsuarios(data)
        setCargando(false)
      })
      .catch(() => setCargando(false))
  }, [])

  return (
    <div className="panel">
      <h2>Ejercicio 4 — useParams y Rutas Dinamicas</h2>
      <p className="desc">
        Con <code>useParams()</code> accedemos a los parametros de la URL.
        Definimos una ruta dinamica como <code>{'/usuario/:id'}</code> donde{' '}
        <code>:id</code> es un segmento variable. Al hacer clic en un usuario,
        navegamos a <code>/ej4/usuario/3</code> y el componente destino lee
        el valor con <code>{'const { id } = useParams()'}</code>. Luego
        hacemos <code>fetch</code> al endpoint con ese <code>id</code> para
        traer los datos completos.
      </p>

      <div className="demo">
        <p style={{ fontSize: '0.9rem', color: '#555', marginBottom: 12 }}>
          Haz clic en un usuario para ver su detalle (navega con useParams):
        </p>
        {cargando ? (
          <p style={{ textAlign: 'center', color: '#999' }}>Cargando...</p>
        ) : (
          usuarios.map((u) => (
            <Link
              to={`/ej4/usuario/${u.id}`}
              className="user-card"
              key={u.id}
            >
              <img
                src={`https://ui-avatars.com/api/?name=${encodeURIComponent(u.name)}&background=e3f2fd&color=0d47a1`}
                alt={u.name}
              />
              <div className="info">
                <h4>{u.name}</h4>
                <p>{u.email} — {u.address.city}</p>
              </div>
              <span className="badge">ID: {u.id}</span>
            </Link>
          ))
        )}
      </div>

      <div className="codigo-info">
        <span className="comment">{'// Ruta dinamica en App.jsx'}</span>{'\n'}
        <span className="tag">{'<Route'}</span> <span className="attr">path</span>=<span className="string">"/usuario/:id"</span> <span className="attr">element</span>={'={<UserDetail />}'} <span className="tag">{'/>'}</span>{'\n\n'}
        <span className="comment">{'// Link que pasa el parametro'}</span>{'\n'}
        <span className="tag">{'<Link'}</span> <span className="attr">to</span>={'{`/usuario/${u.id}`}'}<span className="tag">{'>'}</span>{'\n'}
        {'  '}{'{u.name}'}{'\n'}
        <span className="tag">{'</Link>'}</span>{'\n\n'}
        <span className="comment">{'// Leer el parametro en el componente destino'}</span>{'\n'}
        <span className="keyword">import</span> {'{ useParams }'} <span className="keyword">from</span> <span className="string">'react-router-dom'</span>{'\n'}
        <span className="keyword">const</span> {'{ id }'} = <span className="func">useParams</span>(){'\n'}
        <span className="comment">{'// fetch(`https://api.com/users/${id}`)'}</span>
      </div>
    </div>
  )
}

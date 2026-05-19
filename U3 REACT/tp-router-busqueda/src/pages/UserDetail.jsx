import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

export default function UserDetail() {
  const { id } = useParams()
  const [usuario, setUsuario] = useState(null)
  const [cargando, setCargando] = useState(true)

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setUsuario(data)
        setCargando(false)
      })
      .catch(() => setCargando(false))
  }, [id])

  if (cargando) {
    return (
      <div className="panel" style={{ textAlign: 'center' }}>
        <p>Cargando usuario...</p>
      </div>
    )
  }

  if (!usuario) {
    return (
      <div className="panel" style={{ textAlign: 'center' }}>
        <p>Usuario no encontrado</p>
        <Link to="/ej4" style={{ color: 'var(--azul)' }}>Volver</Link>
      </div>
    )
  }

  return (
    <div className="panel">
      <Link to="/ej4" className="volver-btn">← Volver a la lista</Link>
      <div className="detalle-usuario">
        <img
          src={`https://ui-avatars.com/api/?name=${encodeURIComponent(usuario.name)}&background=e3f2fd&color=0d47a1&size=100`}
          alt={usuario.name}
        />
        <h3>{usuario.name}</h3>
        <p style={{ color: '#777' }}>@{usuario.username}</p>

        <div className="info-grid">
          <div className="info-item">
            <label>Email</label>
            <span>{usuario.email}</span>
          </div>
          <div className="info-item">
            <label>Telefono</label>
            <span>{usuario.phone}</span>
          </div>
          <div className="info-item">
            <label>Ciudad</label>
            <span>{usuario.address.city}</span>
          </div>
          <div className="info-item">
            <label>Empresa</label>
            <span>{usuario.company.name}</span>
          </div>
          <div className="info-item">
            <label>Sitio Web</label>
            <span>{usuario.website}</span>
          </div>
          <div className="info-item">
            <label>Direccion</label>
            <span>{usuario.address.street}, {usuario.address.suite}</span>
          </div>
        </div>
      </div>

      {/* Bloque de codigo */}
      <div className="codigo-info" style={{ marginTop: 24 }}>
        <span className="comment">{'// Este componente usa useParams() para leer el ID de la URL'}</span>{'\n\n'}
        <span className="keyword">const</span> {'{ id }'} = <span className="func">useParams</span>()  <span className="comment">{'// id = "'}{id}{'"'}</span>{'\n\n'}
        <span className="func">useEffect</span>(() ={'>'} {'{'}{'\n'}
        {'  '}<span className="func">fetch</span>(<span className="string">{`\`https://jsonplaceholder.typicode.com/users/\${id}\``}</span>){'\n'}
        {'    '}.<span className="func">then</span>(res ={'>'} res.<span className="func">json</span>()){'\n'}
        {'    '}.<span className="func">then</span>(data ={'>'} <span className="func">setUsuario</span>(data)){'\n'}
        {'}'}, [id])  <span className="comment">{'// Se re-ejecuta si cambia el id'}</span>
      </div>
    </div>
  )
}

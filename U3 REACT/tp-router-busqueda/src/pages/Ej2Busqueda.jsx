import { useState, useEffect } from 'react'

export default function Ej2Busqueda() {
  const [usuarios, setUsuarios] = useState([])
  const [busqueda, setBusqueda] = useState('')
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

  const filtrados = usuarios.filter((u) => {
    const texto = busqueda.toLowerCase()
    return (
      u.name.toLowerCase().includes(texto) ||
      u.email.toLowerCase().includes(texto) ||
      u.address.city.toLowerCase().includes(texto)
    )
  })

  return (
    <div className="panel">
      <h2>Ejercicio 2 — Busqueda Dinamica con filter()</h2>
      <p className="desc">
        Implementamos un buscador que filtra datos en tiempo real. Usamos{' '}
        <code>useState</code> para almacenar el texto de busqueda y{' '}
        <code>.filter()</code> para recorrer el array de usuarios comparando
        nombre, email y ciudad. El componente <code>SearchBar</code> es un input
        controlado que recibe <code>value</code> y <code>onChange</code> como
        props (patron <em>lifting state up</em>).
      </p>

      <div className="demo">
        <input
          className="search-input"
          type="text"
          placeholder="Buscar por nombre, email o ciudad..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
        {busqueda && (
          <p style={{ margin: '8px 0 0', fontSize: '0.85rem', color: '#777' }}>
            {filtrados.length} resultado(s) para &quot;{busqueda}&quot;
          </p>
        )}
        <div style={{ marginTop: 12 }}>
          {cargando ? (
            <p style={{ textAlign: 'center', color: '#999' }}>Cargando usuarios...</p>
          ) : filtrados.length === 0 ? (
            <p style={{ textAlign: 'center', color: '#999' }}>No se encontraron resultados.</p>
          ) : (
            filtrados.map((u) => (
              <div className="user-card" key={u.id}>
                <img
                  src={`https://ui-avatars.com/api/?name=${encodeURIComponent(u.name)}&background=e3f2fd&color=0d47a1`}
                  alt={u.name}
                />
                <div className="info">
                  <h4>{u.name}</h4>
                  <p>{u.email} — {u.address.city}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      <div className="codigo-info">
        <span className="comment">{'// Patron: Busqueda dinamica con filter()'}</span>{'\n\n'}
        <span className="keyword">const</span> [busqueda, setBusqueda] = <span className="func">useState</span>(<span className="string">''</span>){'\n'}
        <span className="keyword">const</span> [usuarios, setUsuarios] = <span className="func">useState</span>([]){'\n\n'}
        <span className="comment">{'// Filtrar array segun texto ingresado'}</span>{'\n'}
        <span className="keyword">const</span> filtrados = usuarios.<span className="func">filter</span>((u) ={'>'}{'\n'}
        {'  '}u.name.<span className="func">toLowerCase</span>().<span className="func">includes</span>(busqueda.<span className="func">toLowerCase</span>()){'\n'}
        ){'\n\n'}
        <span className="comment">{'// Input controlado (lifting state up)'}</span>{'\n'}
        <span className="tag">{'<input'}</span>{'\n'}
        {'  '}<span className="attr">value</span>={'{busqueda}'}{'\n'}
        {'  '}<span className="attr">onChange</span>={'={(e) => setBusqueda(e.target.value)}'}{'\n'}
        <span className="tag">{'/>'}</span>
      </div>
    </div>
  )
}

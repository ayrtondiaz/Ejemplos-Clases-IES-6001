import { useState } from 'react'

export default function Ej5Modules() {
  const [activo, setActivo] = useState('global')

  return (
    <div className="panel">
      <h2>Ejercicio 5 — CSS Modules: Estilos con Alcance</h2>
      <p className="desc">
        <code>CSS Modules</code> permite escribir estilos que solo afectan al
        componente que los importa, evitando colisiones de nombres. Se crean
        archivos <code>.module.css</code> y se importan como un objeto:{' '}
        <code>{'import styles from "./Card.module.css"'}</code>. Luego se usan
        con <code>{'className={styles.card}'}</code>. Vite los soporta de forma
        nativa. A continuacion, comparamos estilos globales vs CSS Modules.
      </p>

      <div className="demo">
        <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
          <button
            className={`btn ${activo === 'global' ? 'btn-azul' : ''}`}
            style={activo !== 'global' ? { border: '2px solid var(--azul)', color: 'var(--azul)', background: 'white' } : {}}
            onClick={() => setActivo('global')}
          >
            CSS Global
          </button>
          <button
            className={`btn ${activo === 'modules' ? 'btn-azul' : ''}`}
            style={activo !== 'modules' ? { border: '2px solid var(--azul)', color: 'var(--azul)', background: 'white' } : {}}
            onClick={() => setActivo('modules')}
          >
            CSS Modules
          </button>
        </div>

        {activo === 'global' ? (
          <div>
            <div className="modules-demo">
              <div className="ejemplo-card" style={{ background: '#ffebee', border: '2px solid #ef5350' }}>
                <h4 style={{ color: '#c62828', marginBottom: 6 }}>Problema: CSS Global</h4>
                <p style={{ fontSize: '0.85rem', color: '#555' }}>
                  Si dos componentes usan la clase <code>.card</code>, los estilos
                  se pisan entre si. Esto causa bugs visuales dificiles de rastrear.
                </p>
                <div style={{ marginTop: 10, padding: 8, background: '#fff', borderRadius: 6, fontFamily: 'monospace', fontSize: '0.8rem' }}>
                  {`/* ComponenteA.css */`}<br/>
                  {`.card { background: red; }`}<br/><br/>
                  {`/* ComponenteB.css */`}<br/>
                  {`.card { background: blue; }`}<br/>
                  <span style={{ color: '#c62828' }}>{`/* Conflicto! Ambos usan .card */`}</span>
                </div>
              </div>
              <div className="ejemplo-card" style={{ background: '#e8f5e9', border: '2px solid #66bb6a' }}>
                <h4 style={{ color: '#2e7d32', marginBottom: 6 }}>Ventaja: Sin conflictos</h4>
                <p style={{ fontSize: '0.85rem', color: '#555' }}>
                  Con CSS Modules cada clase se transforma a un nombre unico
                  automaticamente, como <code>Card_card__x7kQ2</code>.
                </p>
                <div style={{ marginTop: 10, padding: 8, background: '#fff', borderRadius: 6, fontFamily: 'monospace', fontSize: '0.8rem' }}>
                  {`/* Card.module.css */`}<br/>
                  {`.card { background: blue; }`}<br/><br/>
                  {`/* Se genera: */`}<br/>
                  <span style={{ color: '#2e7d32' }}>{`.Card_card__x7kQ2 { ... }`}</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className="modules-demo">
              <div className="ejemplo-card" style={{ background: '#e3f2fd', border: '2px solid var(--azul)' }}>
                <h4 style={{ color: 'var(--azul-oscuro)', marginBottom: 6 }}>1. Crear archivo .module.css</h4>
                <div style={{ marginTop: 8, padding: 8, background: '#fff', borderRadius: 6, fontFamily: 'monospace', fontSize: '0.8rem' }}>
                  {`/* Navbar.module.css */`}<br/>
                  {`.nav { display: flex; gap: 10px; }`}<br/>
                  {`.link { color: blue; }`}<br/>
                  {`.activo { font-weight: bold; }`}
                </div>
              </div>
              <div className="ejemplo-card" style={{ background: '#e3f2fd', border: '2px solid var(--azul)' }}>
                <h4 style={{ color: 'var(--azul-oscuro)', marginBottom: 6 }}>2. Importar como objeto</h4>
                <div style={{ marginTop: 8, padding: 8, background: '#fff', borderRadius: 6, fontFamily: 'monospace', fontSize: '0.8rem' }}>
                  {`import styles from`}<br/>
                  {`  './Navbar.module.css'`}<br/><br/>
                  {`<nav className={styles.nav}>`}<br/>
                  {`  <a className={styles.link}>`}<br/>
                  {`    Inicio`}<br/>
                  {`  </a>`}<br/>
                  {`</nav>`}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="codigo-info">
        <span className="comment">{'// Paso 1: Crear archivo con extension .module.css'}</span>{'\n'}
        <span className="comment">{'// Ejemplo: Navbar.module.css'}</span>{'\n\n'}
        .<span className="func">nav</span> {'{'} <span className="attr">display</span>: flex; <span className="attr">gap</span>: 10px; {'}'}{'\n'}
        .<span className="func">link</span> {'{'} <span className="attr">color</span>: <span className="string">blue</span>; {'}'}{'\n'}
        .<span className="func">activo</span> {'{'} <span className="attr">font-weight</span>: <span className="string">bold</span>; {'}'}{'\n\n'}
        <span className="comment">{'// Paso 2: Importar como objeto en el componente'}</span>{'\n'}
        <span className="keyword">import</span> styles <span className="keyword">from</span> <span className="string">'./Navbar.module.css'</span>{'\n\n'}
        <span className="comment">{'// Paso 3: Usar con className={styles.nombre}'}</span>{'\n'}
        <span className="tag">{'<nav'}</span> <span className="attr">className</span>={'{styles.nav}'}<span className="tag">{'>'}</span>{'\n'}
        {'  '}<span className="tag">{'<a'}</span> <span className="attr">className</span>={'{styles.link}'}<span className="tag">{'>'}</span>Inicio<span className="tag">{'</a>'}</span>{'\n'}
        <span className="tag">{'</nav>'}</span>
      </div>
    </div>
  )
}

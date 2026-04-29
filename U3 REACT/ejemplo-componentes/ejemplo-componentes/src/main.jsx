// ═══════════════════════════════════════════════════════════════
//  main.jsx — Punto de entrada de la aplicación
// ═══════════════════════════════════════════════════════════════
//  Acá React "monta" el componente <App /> dentro del <div id="root">
//  que está en index.html. Es el ÚNICO lugar donde se hace esto.
// ═══════════════════════════════════════════════════════════════

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

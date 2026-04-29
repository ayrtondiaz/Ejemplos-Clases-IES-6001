// ═══════════════════════════════════════════════════════════════
//  Header.jsx — EJEMPLO 1: Componente con UNA prop
// ═══════════════════════════════════════════════════════════════
//  Concepto: una prop = un dato que el padre le pasa al hijo.
//  Acá recibimos { titulo } usando DESTRUCTURING.
//
//  Sin destructuring sería:
//     function Header(props) {
//       return <h1>{props.titulo}</h1>
//     }
//
//  Con destructuring (más limpio, el estándar):
//     function Header({ titulo }) {
//       return <h1>{titulo}</h1>
//     }
// ═══════════════════════════════════════════════════════════════

function Header({ titulo }) {
  return (
    <header className="header">
      <h1>{titulo}</h1>
      <nav>
        <a href="#">Inicio</a>
        <a href="#">Servicios</a>
        <a href="#">Contacto</a>
      </nav>
    </header>
  )
}

// export default = exportamos el componente para poder importarlo en App.jsx
export default Header

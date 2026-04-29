// ═══════════════════════════════════════════════════════════════
//  Card.jsx — EJEMPLO 3: Múltiples props + la prop especial CHILDREN
// ═══════════════════════════════════════════════════════════════
//  - emoji, titulo, descripcion → props normales (datos simples)
//  - children                    → prop ESPECIAL: contiene TODO lo
//                                  que pongamos ENTRE las etiquetas
//                                  <Card> ... acá adentro ... </Card>
//
//  Ejemplo de uso:
//     <Card emoji="💻" titulo="Web" descripcion="Sitios modernos" />
//
//     <Card emoji="📱" titulo="Apps" descripcion="Apps móviles">
//        <Boton texto="Ver más" color="blue" />   ← esto es children
//     </Card>
//
//  La diferencia: el primer Card no tiene children, el segundo sí.
// ═══════════════════════════════════════════════════════════════

function Card({ emoji, titulo, descripcion, children }) {
  return (
    <article className="card">
      <span className="card-icon">{emoji}</span>
      <h3>{titulo}</h3>
      <p>{descripcion}</p>

      {/* children solo se renderiza si el padre le mandó algo adentro */}
      {children}
    </article>
  )
}

export default Card

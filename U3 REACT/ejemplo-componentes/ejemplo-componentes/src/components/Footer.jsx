// ═══════════════════════════════════════════════════════════════
//  Footer.jsx — EJEMPLO 4: prop simple con valor por defecto
// ═══════════════════════════════════════════════════════════════
//  Si nadie pasa la prop "texto", se usa "© 2026 Mi App".
// ═══════════════════════════════════════════════════════════════

function Footer({ texto = '© 2026 Mi App' }) {
  return (
    <footer className="footer">
      <p>{texto}</p>
    </footer>
  )
}

export default Footer

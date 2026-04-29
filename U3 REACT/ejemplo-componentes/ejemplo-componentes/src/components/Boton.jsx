// ═══════════════════════════════════════════════════════════════
//  Boton.jsx — EJEMPLO 2: Props con VALORES POR DEFECTO
// ═══════════════════════════════════════════════════════════════
//  Si el padre NO pasa la prop, se usa el valor por defecto.
//  Esto se hace en el destructuring con  =  (igual).
//
//  Ej:  <Boton />                       → "Click aquí" / azul
//       <Boton texto="Enviar" />        → "Enviar"     / azul
//       <Boton texto="Borrar" color="red" /> → "Borrar" / rojo
//
//  El MISMO componente se ve distinto según las props que reciba.
//  Eso es REUTILIZACIÓN.
// ═══════════════════════════════════════════════════════════════

function Boton({ texto = 'Click aquí', color = 'blue' }) {
  // Definimos el estilo en línea usando la prop "color"
  const estilo = {
    backgroundColor: color,
    color: 'white',
    border: 'none',
    padding: '8px 18px',
    borderRadius: '6px',
    fontWeight: 600,
    cursor: 'pointer',
  }

  return <button style={estilo}>{texto}</button>
}

export default Boton

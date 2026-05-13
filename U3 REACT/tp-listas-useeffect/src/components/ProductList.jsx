import { useState } from "react";

/*
 * EJERCICIO 5: Lista de Productos con Filtrado
 * =============================================
 * Conceptos: .map() con key, .filter(), estado derivado,
 *            renderizado condicional, <select> y checkbox controlados
 *
 * Los productos NUNCA se modifican. Los filtros crean un array
 * derivado (productosFiltrados) que es el que se renderiza.
 */

// Datos fijos (no necesitan useState porque no cambian)
const PRODUCTOS = [
  { id: 1, nombre: "Notebook Lenovo",   precio: 850000, categoria: "Electronica", enStock: true },
  { id: 2, nombre: "Remera Nike",       precio: 35000,  categoria: "Ropa",        enStock: true },
  { id: 3, nombre: "Mouse Logitech",    precio: 28000,  categoria: "Electronica", enStock: false },
  { id: 4, nombre: "Zapatillas Adidas", precio: 120000, categoria: "Ropa",        enStock: true },
  { id: 5, nombre: "Monitor Samsung",   precio: 320000, categoria: "Electronica", enStock: true },
  { id: 6, nombre: "Campera Columbia",  precio: 180000, categoria: "Ropa",        enStock: false },
  { id: 7, nombre: "Teclado Redragon",  precio: 45000,  categoria: "Electronica", enStock: true },
  { id: 8, nombre: "Auriculares Sony",  precio: 95000,  categoria: "Electronica", enStock: false },
];

// Sacamos las categorias unicas del array
const CATEGORIAS = ["Todas", ...new Set(PRODUCTOS.map((p) => p.categoria))];

function ProductList() {
  // Estado de los filtros
  const [categoria, setCategoria] = useState("Todas");
  const [soloEnStock, setSoloEnStock] = useState(false);

  // Estado derivado: filtramos sin modificar el array original
  // Ambos filtros se aplican combinados (uno tras otro)
  const productosFiltrados = PRODUCTOS.filter((p) => {
    // Filtro 1: por categoria
    if (categoria !== "Todas" && p.categoria !== categoria) return false;
    // Filtro 2: por stock
    if (soloEnStock && !p.enStock) return false;
    return true;
  });

  return (
    <div>
      <h2>Ejercicio 5: Lista de Productos</h2>
      <p className="desc">
        Filtrado combinado con <code>.filter()</code>. Cada card se renderiza
        con <code>.map()</code> y <code>key={"{producto.id}"}</code>.
        Renderizado condicional si no hay resultados.
      </p>

      {/* Controles de filtro */}
      <div className="filtros">
        <select
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
        >
          {CATEGORIAS.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>

        <label>
          <input
            type="checkbox"
            checked={soloEnStock}
            onChange={(e) => setSoloEnStock(e.target.checked)}
          />
          Solo en stock
        </label>

        <span style={{ marginLeft: "auto", fontSize: "0.85rem", color: "#666" }}>
          {productosFiltrados.length} producto{productosFiltrados.length !== 1 && "s"}
        </span>
      </div>

      {/* Lista de productos o mensaje vacio */}
      <div className="productos-grid">
        {productosFiltrados.length === 0 ? (
          <p className="vacio">No hay productos con esos filtros.</p>
        ) : (
          productosFiltrados.map((producto) => (
            <div
              key={producto.id}
              className={`producto-card ${!producto.enStock ? "sin-stock" : ""}`}
            >
              <div className="nombre">{producto.nombre}</div>
              <div className="precio">${producto.precio.toLocaleString("es-AR")}</div>
              <div className="categoria">{producto.categoria}</div>
              <span className={`badge-stock ${producto.enStock ? "badge-si" : "badge-no"}`}>
                {producto.enStock ? "En stock" : "Sin stock"}
              </span>
            </div>
          ))
        )}
      </div>

      <div className="codigo">
        <span className="cm">{"// Filtrado combinado (categoria + stock):"}</span><br />
        <span className="kw">const</span> filtrados = PRODUCTOS.<span className="fn">filter</span>((p) =&gt; {"{"}<br />
        &nbsp;&nbsp;<span className="kw">if</span> (categoria !== <span className="st">"Todas"</span> &amp;&amp; p.categoria !== categoria) <span className="kw">return false</span>;<br />
        &nbsp;&nbsp;<span className="kw">if</span> (soloEnStock &amp;&amp; !p.enStock) <span className="kw">return false</span>;<br />
        &nbsp;&nbsp;<span className="kw">return true</span>;<br />
        {"}"});
      </div>
    </div>
  );
}

export default ProductList;

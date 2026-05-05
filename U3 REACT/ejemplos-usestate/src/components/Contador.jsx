import { useState } from "react";

function Contador() {
  const [contador, setContador] = useState(0);
  const [paso, setPaso] = useState(1);

  const incrementar = () => setContador(contador + paso);
  const decrementar = () => setContador(contador - paso);
  const resetear = () => setContador(0);
  const duplicar = () => setContador(contador * 2);

  return (
    <div>
      <h2 className="ejemplo-titulo">Ejemplo 1: Contador Interactivo</h2>
      <p className="ejemplo-descripcion">
        Cada boton llama al <strong>setter</strong> (setContador) con un valor
        nuevo. React detecta el cambio y <strong>re-renderiza</strong> el
        componente mostrando el numero actualizado.
      </p>

      <div className="contador-display">
        <div
          className="contador-numero"
          style={{ color: contador > 0 ? "#10b981" : contador < 0 ? "#ef4444" : "#3b82f6" }}
        >
          {contador}
        </div>

        <div className="contador-botones">
          <button className="btn btn-rojo" onClick={decrementar}>- {paso}</button>
          <button className="btn btn-gris" onClick={resetear}>Reset</button>
          <button className="btn btn-verde" onClick={incrementar}>+ {paso}</button>
          <button className="btn btn-naranja" onClick={duplicar}>x2</button>
        </div>

        <div style={{ marginTop: "1.5rem" }}>
          <label style={{ fontWeight: 600, marginRight: "0.5rem" }}>Paso:</label>
          <select
            value={paso}
            onChange={(e) => setPaso(Number(e.target.value))}
            style={{
              padding: "0.4rem 0.8rem",
              borderRadius: "8px",
              border: "2px solid #e5e7eb",
              fontSize: "0.95rem",
            }}
          >
            <option value={1}>1</option>
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={100}>100</option>
          </select>
        </div>
      </div>

      <div className="codigo-info">
        <span className="comment">{"// Asi se usa useState:"}</span><br />
        <span className="keyword">const</span> [contador, setContador] ={" "}
        <span className="func">useState</span>(<span className="string">0</span>);<br /><br />
        <span className="comment">{"// Para cambiar el valor:"}</span><br />
        <span className="func">setContador</span>(contador + 1);{" "}
        <span className="comment">{"// nunca hacer contador = valor"}</span>
      </div>
    </div>
  );
}

export default Contador;

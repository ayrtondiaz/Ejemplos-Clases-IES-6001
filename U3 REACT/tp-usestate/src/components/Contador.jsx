import { useState } from "react";

function Contador() {
  const [count, setCount] = useState(0);

  // Color: verde si > 0, rojo si === 0
  const color = count > 0 ? "green" : "red";

  return (
    <div>
      <h2>Contador</h2>

      <p style={{ fontSize: "3rem", textAlign: "center", color: color }}>
        {count}
      </p>

      <div style={{ display: "flex", gap: "0.5rem", justifyContent: "center" }}>
        <button
          onClick={() => setCount(count - 1)}
          disabled={count === 0}
        >
          -1
        </button>

        <button onClick={() => setCount(0)}>
          Reset
        </button>

        <button onClick={() => setCount(count + 1)}>
          +1
        </button>
      </div>
    </div>
  );
}

export default Contador;

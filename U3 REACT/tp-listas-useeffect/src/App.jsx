import { useState } from "react";
import ProductList from "./components/ProductList";
import TodoApp from "./components/TodoApp";
import FetchUsuarios from "./components/FetchUsuarios";
import Cronometro from "./components/Cronometro";

function App() {
  const [vista, setVista] = useState("productos");

  const vistas = {
    productos: <ProductList />,
    todo: <TodoApp />,
    fetch: <FetchUsuarios />,
    cronometro: <Cronometro />,
  };

  const botones = [
    { id: "productos", label: "Ej 5: Productos" },
    { id: "todo", label: "Ej 6: Todo App" },
    { id: "fetch", label: "useEffect: Fetch" },
    { id: "cronometro", label: "useEffect: Timer" },
  ];

  return (
    <div className="app">
      <h1>Listas, Condicional y useEffect</h1>
      <p className="subtitulo">4 ejercicios para practicar React</p>

      <nav className="nav">
        {botones.map((b) => (
          <button
            key={b.id}
            className={vista === b.id ? "activo" : ""}
            onClick={() => setVista(b.id)}
          >
            {b.label}
          </button>
        ))}
      </nav>

      <div className="panel">
        {vistas[vista]}
      </div>
    </div>
  );
}

export default App;

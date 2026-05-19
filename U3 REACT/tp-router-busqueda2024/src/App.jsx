import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Buscador from "./pages/Buscador";
import TodoApp from "./pages/TodoApp";
import UserDetail from "./pages/UserDetail";
import NotFound from "./pages/NotFound";

/*
 * APP.JSX — Ejercicio 3: React Router
 * ====================================
 * BrowserRouter envuelve la app en main.jsx.
 * Aca definimos las rutas con <Routes> y <Route>.
 * El Navbar esta FUERA de <Routes>, asi aparece en todas las paginas.
 *
 * Rutas:
 *   /           → Home (pagina de inicio)
 *   /buscador   → Buscador con API
 *   /todo       → Todo App del TP6
 *   /usuario/:id → Detalle de usuario (ruta dinamica)
 *   *           → 404 Not Found
 */

function App() {
  return (
    <div>
      {/* Navbar visible en TODAS las paginas (fuera de Routes) */}
      <Navbar />

      {/* Ejercicio 3: definir rutas */}
      <main style={{ maxWidth: "900px", margin: "0 auto", padding: "1.5rem 1rem" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/buscador" element={<Buscador />} />
          <Route path="/todo" element={<TodoApp />} />
          <Route path="/usuario/:id" element={<UserDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

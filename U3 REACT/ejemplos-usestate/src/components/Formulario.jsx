import { useState } from "react";

function Formulario() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [rol, setRol] = useState("Frontend");
  const [bio, setBio] = useState("");
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nombre.trim() || !email.trim()) {
      alert("Por favor completa nombre y email");
      return;
    }
    setEnviado(true);
    setTimeout(() => {
      setEnviado(false);
      setNombre("");
      setEmail("");
      setRol("Frontend");
      setBio("");
    }, 3000);
  };

  if (enviado) {
    return (
      <div>
        <h2 className="ejemplo-titulo">Ejemplo 2: Formulario Controlado</h2>
        <div style={{ textAlign: "center", padding: "3rem", background: "#d1fae5", borderRadius: "12px" }}>
          <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>&#10003;</div>
          <h3 style={{ color: "#065f46", marginBottom: "0.5rem" }}>Formulario enviado</h3>
          <p style={{ color: "#047857" }}>Hola <strong>{nombre}</strong>, recibimos tus datos.</p>
          <p style={{ color: "#6b7280", fontSize: "0.85rem", marginTop: "1rem" }}>Volviendo al formulario en 3 segundos...</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h2 className="ejemplo-titulo">Ejemplo 2: Formulario Controlado</h2>
      <p className="ejemplo-descripcion">
        Cada input tiene <code>value={"{estado}"}</code> y{" "}
        <code>onChange={"{(e) => setEstado(e.target.value)}"}</code>.
        El <strong>preview</strong> de la derecha se actualiza en{" "}
        <strong>tiempo real</strong> mientras escribis.
      </p>

      <div className="formulario-grid">
        <form onSubmit={handleSubmit}>
          <div className="form-grupo">
            <label htmlFor="nombre">Nombre completo</label>
            <input id="nombre" type="text" value={nombre}
              onChange={(e) => setNombre(e.target.value)} placeholder="Ej: Ana Garcia" />
          </div>
          <div className="form-grupo">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" value={email}
              onChange={(e) => setEmail(e.target.value)} placeholder="ana@ejemplo.com" />
          </div>
          <div className="form-grupo">
            <label htmlFor="rol">Rol</label>
            <select id="rol" value={rol} onChange={(e) => setRol(e.target.value)}>
              <option value="Frontend">Frontend Developer</option>
              <option value="Backend">Backend Developer</option>
              <option value="Fullstack">Fullstack Developer</option>
              <option value="UX/UI">UX/UI Designer</option>
            </select>
          </div>
          <div className="form-grupo">
            <label htmlFor="bio">Bio (opcional)</label>
            <textarea id="bio" value={bio} onChange={(e) => setBio(e.target.value)}
              placeholder="Contanos sobre vos..." rows={3} />
          </div>
          <button type="submit" className="btn btn-azul" style={{ width: "100%" }}>Enviar datos</button>
        </form>

        <div className="preview-card">
          <h3>Preview en vivo</h3>
          <div className="preview-nombre">{nombre || "Tu nombre..."}</div>
          <div className="preview-campo">{email || "tu@email.com"}</div>
          <div className="preview-campo">{rol} Developer</div>
          {bio && <div className="preview-bio">"{bio}"</div>}
          <div style={{ marginTop: "1rem", fontSize: "0.75rem", opacity: 0.6 }}>
            Caracteres escritos: {nombre.length + email.length + bio.length}
          </div>
        </div>
      </div>

      <div className="codigo-info">
        <span className="comment">{"// Input controlado:"}</span><br />
        {"<input "}
        <span className="keyword">value</span>={"{nombre}"}{" "}
        <span className="keyword">onChange</span>={"{(e) => "}
        <span className="func">setNombre</span>(e.target.value){"}"} /><br /><br />
        <span className="comment">{"// El valor SIEMPRE viene del estado. onChange lo actualiza en cada tecla."}</span>
      </div>
    </div>
  );
}

export default Formulario;

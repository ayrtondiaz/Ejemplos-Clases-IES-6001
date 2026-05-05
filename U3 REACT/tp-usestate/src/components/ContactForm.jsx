import { useState } from "react";

function ContactForm() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");

  // Validacion: todos los campos deben tener contenido
  const formularioValido = nombre.trim() && email.trim() && mensaje.trim();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ nombre, email, mensaje });
  };

  return (
    <div>
      <h2>Formulario con Preview</h2>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "0.8rem" }}>
          <label>Nombre</label>
          <br />
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Tu nombre"
            style={{ width: "100%", padding: "0.4rem" }}
          />
        </div>

        <div style={{ marginBottom: "0.8rem" }}>
          <label>Email</label>
          <br />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="tu@email.com"
            style={{ width: "100%", padding: "0.4rem" }}
          />
        </div>

        <div style={{ marginBottom: "0.8rem" }}>
          <label>Mensaje</label>
          <br />
          <textarea
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            placeholder="Escribi tu mensaje..."
            rows={3}
            style={{ width: "100%", padding: "0.4rem" }}
          />
        </div>

        <button type="submit" disabled={!formularioValido}>
          Enviar
        </button>
      </form>

      {/* Preview en vivo */}
      <div
        style={{
          marginTop: "1.5rem",
          padding: "1rem",
          background: "#e8f0fe",
          borderRadius: "8px",
        }}
      >
        <h3>Preview en vivo</h3>
        <p><strong>Nombre:</strong> {nombre || "---"}</p>
        <p><strong>Email:</strong> {email || "---"}</p>
        <p><strong>Mensaje:</strong> {mensaje || "---"}</p>
      </div>
    </div>
  );
}

export default ContactForm;

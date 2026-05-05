import Contador from "./components/Contador";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <div style={{ maxWidth: "600px", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>
        TP - Ejercicios useState
      </h1>
      

      <Contador />

      <hr style={{ margin: "2rem 0", border: "1px solid #ddd" }} />

      <ContactForm />
    </div>
  );
}

export default App;

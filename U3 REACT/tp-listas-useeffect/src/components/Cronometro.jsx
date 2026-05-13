import { useState, useEffect } from "react";

/*
 * EJEMPLO PRACTICO useEffect #2: Cronometro con Cleanup
 * =====================================================
 * Conceptos: useEffect con dependencias, setInterval,
 *            funcion de CLEANUP (return), re-render cada segundo
 *
 * CLEANUP: la funcion que retornamos dentro de useEffect
 * se ejecuta cuando:
 *   1. El componente se DESMONTA (desaparece del DOM)
 *   2. ANTES de volver a ejecutar el efecto (si cambian las deps)
 *
 * Sin cleanup, al pausar y reanudar el timer se acumularian
 * multiples setInterval corriendo a la vez (memory leak).
 *
 *   useEffect(() => {
 *     const id = setInterval(...);
 *     return () => clearInterval(id);  // <-- CLEANUP
 *   }, [dependencia]);
 */

function Cronometro() {
  const [segundos, setSegundos] = useState(0);
  const [corriendo, setCorriendo] = useState(false);

  // useEffect que depende de "corriendo"
  // Cada vez que "corriendo" cambia, el efecto se re-ejecuta
  useEffect(() => {
    // Solo crear el interval si esta corriendo
    if (!corriendo) return; // no hace nada si esta pausado

    const intervalId = setInterval(() => {
      setSegundos((prev) => prev + 1); // usar forma funcional
    }, 1000);

    // CLEANUP: limpiar el interval cuando:
    // - "corriendo" cambie (ej: pause)
    // - el componente se desmonte
    return () => clearInterval(intervalId);
  }, [corriendo]); // <-- se re-ejecuta cuando "corriendo" cambia

  // Formatear segundos a MM:SS
  const minutos = Math.floor(segundos / 60);
  const segs = segundos % 60;
  const formato = `${String(minutos).padStart(2, "0")}:${String(segs).padStart(2, "0")}`;

  const resetear = () => {
    setCorriendo(false);
    setSegundos(0);
  };

  return (
    <div>
      <h2>useEffect: Cronometro</h2>
      <p className="desc">
        <code>useEffect</code> con dependencia <code>[corriendo]</code>.
        El <strong>cleanup</strong> (<code>return () =&gt; clearInterval()</code>)
        evita que se acumulen timers. Sin cleanup = memory leak.
      </p>

      {/* Display del tiempo */}
      <div className="reloj-numero">{formato}</div>

      {/* Controles */}
      <div className="reloj-estado">
        {!corriendo ? (
          <button
            onClick={() => setCorriendo(true)}
            style={{ background: "#10b981", color: "white" }}
          >
            {segundos === 0 ? "Iniciar" : "Reanudar"}
          </button>
        ) : (
          <button
            onClick={() => setCorriendo(false)}
            style={{ background: "#f59e0b", color: "white" }}
          >
            Pausar
          </button>
        )}
        <button
          onClick={resetear}
          style={{ background: "#e5e7eb", color: "#333" }}
        >
          Reset
        </button>
      </div>

      <div className="codigo">
        <span className="cm">{"// useEffect con cleanup:"}</span><br />
        <span className="fn">useEffect</span>(() =&gt; {"{"}<br />
        &nbsp;&nbsp;<span className="kw">if</span> (!corriendo) <span className="kw">return</span>;<br />
        &nbsp;&nbsp;<span className="kw">const</span> id = <span className="fn">setInterval</span>(() =&gt; {"{"}<br />
        &nbsp;&nbsp;&nbsp;&nbsp;<span className="fn">setSegundos</span>(prev =&gt; prev + 1);<br />
        &nbsp;&nbsp;{"}"}, <span className="st">1000</span>);<br />
        &nbsp;&nbsp;<span className="kw">return</span> () =&gt; <span className="fn">clearInterval</span>(id); <span className="cm">{"// cleanup!"}</span><br />
        {"}"}, [corriendo]); <span className="cm">{"// dep: se re-ejecuta si cambia"}</span>
      </div>
    </div>
  );
}

export default Cronometro;

import styles from "./SearchBar.module.css";

/*
 * SEARCHBAR — Ejercicio 2: componente separado
 * Recibe value y onChange como PROPS (lifting state).
 * El estado de busqueda vive en el padre (Buscador.jsx).
 * Este componente es UI pura: solo muestra el input.
 */

function SearchBar({ value, onChange }) {
  return (
    <div className={styles.wrapper}>
      <input
        type="text"
        className={styles.input}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Buscar usuarios por nombre..."
      />
      {value && (
        <button className={styles.clear} onClick={() => onChange("")}>
          &times;
        </button>
      )}
    </div>
  );
}

export default SearchBar;

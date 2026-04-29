# Clase 18 — Ejemplo de Componentes y Props

Proyecto de ejemplo en **React + Vite** para **Prácticas Profesionalizantes II — Programador Junior**.

---

## 🎯 Qué vas a ver acá

Este proyecto muestra los conceptos **clave** de la Clase 18:

- Cómo crear un **componente** (función que devuelve JSX).
- Cómo **exportarlo** y **importarlo** entre archivos (`export default` / `import`).
- Cómo pasar **props** del padre al hijo.
- Cómo usar **destructuring** en las props (`{ titulo }` en vez de `props.titulo`).
- Cómo poner **valores por defecto** a las props.
- Cómo funciona la prop especial **`children`**.
- Cómo el **mismo componente** se puede usar muchas veces con datos distintos (reutilización).

---

## 🚀 Cómo correrlo

```bash
# 1. Instalar dependencias
npm install

# 2. Levantar servidor de desarrollo
npm run dev
```

Después abrí en el navegador la URL que te muestra Vite (normalmente `http://localhost:5173/`).

---

## 📂 Estructura del proyecto

```
ejemplo-componentes/
├── index.html              ← HTML base (Vite arranca acá)
├── package.json            ← dependencias y scripts (dev, build...)
├── vite.config.js          ← configuración de Vite
└── src/
    ├── main.jsx            ← punto de entrada: monta <App /> en #root
    ├── App.jsx             ← componente raíz: COMPONE todo lo demás
    ├── index.css           ← estilos
    └── components/
        ├── Header.jsx      ← Ejemplo 1: una prop simple
        ├── Boton.jsx       ← Ejemplo 2: props con valores por defecto
        ├── Card.jsx        ← Ejemplo 3: múltiples props + children
        └── Footer.jsx      ← Ejemplo 4: prop con default
```

> 📌 **Regla:** todo tu código va dentro de `src/`. La carpeta `node_modules/` NO se toca y NO se sube a Git.

---

## 🧩 Recorrido por los componentes (en orden didáctico)

### 1) `Header.jsx` — la prop más simple
```jsx
function Header({ titulo }) {
  return <h1>{titulo}</h1>
}
```
Recibe **una sola prop** llamada `titulo`. El padre se la pasa así:
```jsx
<Header titulo="Mi Portfolio" />
```

### 2) `Boton.jsx` — valores por defecto
```jsx
function Boton({ texto = 'Click aquí', color = 'blue' }) { ... }
```
Si no le paso props, usa los valores por defecto. Mismo componente, distintos resultados:
```jsx
<Boton />                                  // → "Click aquí" / azul
<Boton texto="Enviar" color="green" />     // → "Enviar"     / verde
<Boton texto="Borrar" color="red" />       // → "Borrar"     / rojo
```

### 3) `Card.jsx` — múltiples props + `children`
```jsx
function Card({ emoji, titulo, descripcion, children }) { ... }
```
- `emoji`, `titulo`, `descripcion` → datos comunes.
- `children` → **todo lo que pongas ENTRE las etiquetas** `<Card>...</Card>`.

```jsx
<Card emoji="💻" titulo="Web" descripcion="Sitios modernos" />

<Card emoji="📱" titulo="Apps" descripcion="Apps móviles">
  <Boton texto="Ver más" color="blue" />   {/* ← esto es children */}
</Card>
```

### 4) `Footer.jsx` — caso minimal
Solo una prop con default. Si nadie le pasa nada, muestra `© 2026 Mi App`.

---

## 🪄 La composición: `App.jsx`

`App.jsx` es donde se ve **todo el flujo**. Acá:

1. **Importamos** los componentes desde `./components/`.
2. **Componemos** la UI usándolos como si fueran etiquetas HTML.
3. Cada componente recibe sus **props** desde `App` (el padre).

Mostrale a los alumnos especialmente esta parte:

```jsx
<Card emoji="💻" titulo="Web" descripcion="Sitios modernos" />
<Card emoji="📱" titulo="Apps" descripcion="Apps móviles">
  <Boton texto="Ver más" color="#2E75B6" />
</Card>
<Card emoji="🎨" titulo="Diseño" descripcion="UI/UX profesional" />
```

**Mismo `<Card />` × 3 = tres tarjetas distintas.** Eso es reutilización.

---

## 🎓 Ejercicios sugeridos para los alumnos

1. **Fácil** — Agregá una cuarta `<Card />` con tu propio servicio.
2. **Fácil** — Cambiá los textos del `<Header titulo=... />` y del `<Footer texto=... />`.
3. **Medio** — Agregá una nueva prop al `Boton` llamada `tamaño` (`"chico"`, `"mediano"`, `"grande"`) que cambie el `padding` y `fontSize`.
4. **Medio** — Hacé que el `<Card />` reciba una prop `precio` y la muestre con estilo (verde, en negrita).
5. **Desafío** — Creá un componente nuevo `<Etiqueta texto="..." color="..." />` y usalo dentro del `children` de un `<Card />`.

---

## 📌 Lo que NO está acá (todavía)

- `useState` → estado local. Lo van a ver en la **Clase 19**.
- Eventos (`onClick` que hagan algo). También Clase 19.
- Listas con `.map()` y la prop `key`. Clase 19/20.

Por ahora, lo importante es entender **componentes + props**: la base de todo lo que viene.

---

_Por Ing. Díaz Ayrton — PP2 · Programador Junior · 2026_

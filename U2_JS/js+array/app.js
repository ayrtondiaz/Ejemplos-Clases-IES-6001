// ═══════════════════════════════════════════════════════════════════
// CLASE 13 & 14 — JavaScript ES6+ Ejemplos Prácticos Interactivos
// Prácticas Profesionalizantes II · Programador Junior
// ═══════════════════════════════════════════════════════════════════

// ─── Helper: escribir en la consola simulada ─────────────────────
const log = (id, text, type = "result") => {
  const el = document.getElementById(id);
  const span = document.createElement("span");
  span.className = `log-line log-${type}`;
  span.textContent = text;
  el.appendChild(span);
};

const limpiar = (id) => {
  document.getElementById(id).innerHTML = "";
};

const logComment = (id, text) => log(id, `// ${text}`, "comment");
const logResult = (id, text) => log(id, `→ ${text}`, "result");


// ═══════════════════════════════════════════════════════════════════
// CLASE 13, SLIDE 4 — Variables: const y let
// ═══════════════════════════════════════════════════════════════════

const ejemploConstLet = () => {
  limpiar("consola-constlet");
  const id = "consola-constlet";

  // const
  const nombre = "Ana";
  const PI = 3.14159;
  logComment(id, "const nombre = \"Ana\"");
  logResult(id, `nombre = "${nombre}"`);
  logComment(id, "const PI = 3.14159");
  logResult(id, `PI = ${PI}`);

  // let
  let edad = 20;
  logComment(id, "let edad = 20");
  logResult(id, `edad = ${edad}`);
  edad = 21;
  logComment(id, "edad = 21  (reasignar let ✅)");
  logResult(id, `edad = ${edad}`);

  let contador = 0;
  contador++;
  logComment(id, "let contador = 0 → contador++");
  logResult(id, `contador = ${contador}`);

  logComment(id, "PI = 3  →  ERROR: no se puede reasignar const ❌");
};


// ═══════════════════════════════════════════════════════════════════
// CLASE 13, SLIDE 4 — Template Literals
// ═══════════════════════════════════════════════════════════════════

const ejemploTemplateLiterals = () => {
  limpiar("consola-template");
  const id = "consola-template";

  const nombre = "Ana";
  const edad = 21;

  logComment(id, "Forma vieja (concatenación):");
  logResult(id, "Hola " + nombre + ", tenés " + edad + " años");

  logComment(id, "Template literals (backticks):");
  logResult(id, `Hola ${nombre}, tenés ${edad} años`);

  logComment(id, "Evaluar expresiones:");
  logResult(id, `2 + 3 = ${2 + 3}`);
  logResult(id, `Precio con IVA: $${100 * 1.21}`);
};


// ═══════════════════════════════════════════════════════════════════
// CLASE 13, SLIDE 5 — Tipos de datos
// ═══════════════════════════════════════════════════════════════════

const ejemploTipos = () => {
  limpiar("consola-tipos");
  const id = "consola-tipos";

  logComment(id, "typeof 42");
  logResult(id, `"${typeof 42}"`);
  logComment(id, "typeof 3.14");
  logResult(id, `"${typeof 3.14}"`);
  logComment(id, 'typeof "Hola"');
  logResult(id, `"${typeof "Hola"}"`);
  logComment(id, "typeof true");
  logResult(id, `"${typeof true}"`);
  logComment(id, "typeof null");
  logResult(id, `"${typeof null}"  ← bug histórico de JS!`);
  logComment(id, "typeof undefined");
  logResult(id, `"${typeof undefined}"`);
};


// ═══════════════════════════════════════════════════════════════════
// CLASE 13, SLIDE 5 — Condicionales
// ═══════════════════════════════════════════════════════════════════

const ejemploCondicional = () => {
  limpiar("consola-nota");
  const id = "consola-nota";

  const nota = Number(document.getElementById("input-nota").value);

  logComment(id, `const nota = ${nota}`);

  if (nota >= 6) {
    logResult(id, `Aprobado ✅ (nota ${nota} >= 6)`);
  } else if (nota >= 4) {
    logResult(id, `Recupera ⚠️ (nota ${nota} >= 4 pero < 6)`);
  } else {
    logResult(id, `Desaprobado ❌ (nota ${nota} < 4)`);
  }

  // Ternario
  const estado = nota >= 6 ? "Aprobado" : "Desaprobado";
  logComment(id, "Ternario: nota >= 6 ? \"Aprobado\" : \"Desaprobado\"");
  logResult(id, `estado = "${estado}"`);
};


// ═══════════════════════════════════════════════════════════════════
// CLASE 13, SLIDE 5 — === vs ==
// ═══════════════════════════════════════════════════════════════════

const ejemploIgualdad = () => {
  limpiar("consola-igualdad");
  const id = "consola-igualdad";

  logComment(id, "== (doble) — hace conversiones raras:");
  logResult(id, `"5" == 5    → ${("5" == 5)}   😱`);
  logResult(id, `0 == false  → ${(0 == false)}   😱`);
  logResult(id, `"" == false → ${("" == false)}   😱`);

  log(id, "", "comment");
  logComment(id, "=== (triple) — compara valor Y tipo:");
  logResult(id, `"5" === 5    → ${("5" === 5)}  ✅`);
  logResult(id, `0 === false  → ${(0 === false)}  ✅`);
  logResult(id, `"" === false → ${("" === false)}  ✅`);
};


// ═══════════════════════════════════════════════════════════════════
// CLASE 13, SLIDE 6 — Funciones
// ═══════════════════════════════════════════════════════════════════

const ejemploFunciones = () => {
  limpiar("consola-funciones");
  const id = "consola-funciones";

  // Arrow functions
  const saludar = (nombre) => `Hola, ${nombre}!`;
  const doble = (n) => n * 2;
  const sumar = (a, b) => a + b;

  logComment(id, 'saludar("Ana")');
  logResult(id, saludar("Ana"));
  logComment(id, "doble(7)");
  logResult(id, `${doble(7)}`);
  logComment(id, "sumar(3, 5)");
  logResult(id, `${sumar(3, 5)}`);

  // Parámetros por defecto
  const calcularTotal = (precio, iva = 21) => {
    return precio * (1 + iva / 100);
  };

  logComment(id, "calcularTotal(100)  — IVA por defecto 21%");
  logResult(id, `$${calcularTotal(100)}`);
  logComment(id, "calcularTotal(100, 10.5)  — IVA 10.5%");
  logResult(id, `$${calcularTotal(100, 10.5)}`);
};


// ═══════════════════════════════════════════════════════════════════
// CLASE 13 — Calculadora interactiva
// ═══════════════════════════════════════════════════════════════════

const ejemploCalculadora = () => {
  limpiar("consola-calc");
  const id = "consola-calc";

  const precio = Number(document.getElementById("input-precio").value);
  const iva = Number(document.getElementById("input-iva").value);

  const calcularTotal = (precio, iva = 21) => precio * (1 + iva / 100);

  const total = calcularTotal(precio, iva);

  logComment(id, `calcularTotal(${precio}, ${iva})`);
  logResult(id, `Precio: $${precio}`);
  logResult(id, `IVA: ${iva}% ($${(precio * iva / 100).toFixed(2)})`);
  logResult(id, `Total: $${total.toFixed(2)}`);
};


// ═══════════════════════════════════════════════════════════════════
// CLASE 14, SLIDE 2 — Arrays
// ═══════════════════════════════════════════════════════════════════

const ejemploArrays = () => {
  limpiar("consola-arrays");
  const id = "consola-arrays";

  const frutas = ["manzana", "banana", "naranja"];
  logComment(id, 'const frutas = ["manzana", "banana", "naranja"]');
  logResult(id, `[${frutas.join(", ")}]`);

  frutas.push("uva");
  logComment(id, 'frutas.push("uva")  — agregar al final');
  logResult(id, `[${frutas.join(", ")}]`);

  frutas.pop();
  logComment(id, "frutas.pop()  — eliminar último");
  logResult(id, `[${frutas.join(", ")}]`);

  frutas.unshift("fresa");
  logComment(id, 'frutas.unshift("fresa")  — agregar al inicio');
  logResult(id, `[${frutas.join(", ")}]`);

  logComment(id, 'frutas.includes("banana")');
  logResult(id, `${frutas.includes("banana")}`);

  logComment(id, 'frutas.indexOf("naranja")');
  logResult(id, `${frutas.indexOf("naranja")}`);

  logComment(id, "frutas.length");
  logResult(id, `${frutas.length}`);
};


// ═══════════════════════════════════════════════════════════════════
// CLASE 14, SLIDE 2 — Destructuring + Spread
// ═══════════════════════════════════════════════════════════════════

const ejemploDestructuring = () => {
  limpiar("consola-destruct");
  const id = "consola-destruct";

  const colores = ["rojo", "azul", "verde", "amarillo"];
  logComment(id, 'const colores = ["rojo", "azul", "verde", "amarillo"]');

  const [primero, segundo, ...resto] = colores;
  logComment(id, "const [primero, segundo, ...resto] = colores");
  logResult(id, `primero = "${primero}"`);
  logResult(id, `segundo = "${segundo}"`);
  logResult(id, `resto = [${resto.join(", ")}]`);

  log(id, "", "comment");
  const masColores = [...colores, "violeta", "naranja"];
  logComment(id, 'const masColores = [...colores, "violeta", "naranja"]');
  logResult(id, `[${masColores.join(", ")}]`);
};


// ═══════════════════════════════════════════════════════════════════
// CLASE 14, SLIDE 3 — map()
// ═══════════════════════════════════════════════════════════════════

const ejemploMap = () => {
  limpiar("consola-map");
  const id = "consola-map";

  const numeros = [1, 2, 3, 4, 5];
  logComment(id, "const numeros = [1, 2, 3, 4, 5]");

  const dobles = numeros.map(n => n * 2);
  logComment(id, "numeros.map(n => n * 2)");
  logResult(id, `[${dobles.join(", ")}]`);

  const textos = numeros.map(n => `Número ${n}`);
  logComment(id, "numeros.map(n => `Número ${n}`)");
  logResult(id, `[${textos.join(", ")}]`);

  const cuadrados = numeros.map(n => n ** 2);
  logComment(id, "numeros.map(n => n ** 2)");
  logResult(id, `[${cuadrados.join(", ")}]`);
};


// ═══════════════════════════════════════════════════════════════════
// CLASE 14, SLIDE 3 — filter()
// ═══════════════════════════════════════════════════════════════════

const ejemploFilter = () => {
  limpiar("consola-filter");
  const id = "consola-filter";

  const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  logComment(id, "const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]");

  const pares = numeros.filter(n => n % 2 === 0);
  logComment(id, "numeros.filter(n => n % 2 === 0)  — pares");
  logResult(id, `[${pares.join(", ")}]`);

  const grandes = numeros.filter(n => n > 5);
  logComment(id, "numeros.filter(n => n > 5)  — mayores que 5");
  logResult(id, `[${grandes.join(", ")}]`);

  const imparesMenor8 = numeros.filter(n => n % 2 !== 0 && n < 8);
  logComment(id, "numeros.filter(n => n % 2 !== 0 && n < 8)  — impares < 8");
  logResult(id, `[${imparesMenor8.join(", ")}]`);
};


// ═══════════════════════════════════════════════════════════════════
// CLASE 14, SLIDE 3 — find()
// ═══════════════════════════════════════════════════════════════════

const ejemploFind = () => {
  limpiar("consola-find");
  const id = "consola-find";

  const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  logComment(id, "const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]");

  const primerMayor5 = numeros.find(n => n > 5);
  logComment(id, "numeros.find(n => n > 5)  — el PRIMERO que cumple");
  logResult(id, `${primerMayor5}`);

  log(id, "", "comment");

  const usuarios = [
    { nombre: "Ana", edad: 22 },
    { nombre: "Luis", edad: 17 },
    { nombre: "Pedro", edad: 30 }
  ];
  logComment(id, "usuarios.find(u => u.edad < 18)  — primer menor");
  const menor = usuarios.find(u => u.edad < 18);
  logResult(id, `{ nombre: "${menor.nombre}", edad: ${menor.edad} }`);

  logComment(id, "usuarios.find(u => u.nombre === \"Pedro\")");
  const pedro = usuarios.find(u => u.nombre === "Pedro");
  logResult(id, `{ nombre: "${pedro.nombre}", edad: ${pedro.edad} }`);
};


// ═══════════════════════════════════════════════════════════════════
// CLASE 14, SLIDE 3 — reduce()
// ═══════════════════════════════════════════════════════════════════

const ejemploReduce = () => {
  limpiar("consola-reduce");
  const id = "consola-reduce";

  const numeros = [1, 2, 3, 4, 5];
  logComment(id, "const numeros = [1, 2, 3, 4, 5]");

  const suma = numeros.reduce((acc, n) => acc + n, 0);
  logComment(id, "numeros.reduce((acc, n) => acc + n, 0)  — sumar");
  logResult(id, `${suma}`);

  const producto = numeros.reduce((acc, n) => acc * n, 1);
  logComment(id, "numeros.reduce((acc, n) => acc * n, 1)  — multiplicar");
  logResult(id, `${producto}`);

  const max = numeros.reduce((a, b) => a > b ? a : b);
  logComment(id, "numeros.reduce((a, b) => a > b ? a : b)  — máximo");
  logResult(id, `${max}`);
};


// ═══════════════════════════════════════════════════════════════════
// CLASE 14, SLIDE 4 — Objetos
// ═══════════════════════════════════════════════════════════════════

const ejemploObjetos = () => {
  limpiar("consola-objetos");
  const id = "consola-objetos";

  const alumno = {
    nombre: "María",
    edad: 22,
    carrera: "Sistemas",
    materias: ["Prog II", "Redes"],
    presentarse() {
      return `Soy ${this.nombre}, ${this.edad} años`;
    }
  };

  logComment(id, "alumno.nombre");
  logResult(id, `"${alumno.nombre}"`);
  logComment(id, "alumno.carrera");
  logResult(id, `"${alumno.carrera}"`);
  logComment(id, "alumno.materias[0]");
  logResult(id, `"${alumno.materias[0]}"`);
  logComment(id, "alumno.materias");
  logResult(id, `[${alumno.materias.join(", ")}]`);
  logComment(id, "alumno.presentarse()");
  logResult(id, `"${alumno.presentarse()}"`);
};


// ═══════════════════════════════════════════════════════════════════
// CLASE 14, SLIDE 4 — Spread de Objetos
// ═══════════════════════════════════════════════════════════════════

const ejemploSpreadObj = () => {
  limpiar("consola-spreadobj");
  const id = "consola-spreadobj";

  const alumno = { nombre: "María", edad: 22, carrera: "Sistemas" };

  logComment(id, "Destructuring:");
  const { nombre, edad, carrera } = alumno;
  logResult(id, `nombre = "${nombre}"`);
  logResult(id, `edad = ${edad}`);
  logResult(id, `carrera = "${carrera}"`);

  log(id, "", "comment");
  logComment(id, "Spread: { ...alumno, edad: 23, promedio: 8.5 }");
  const actualizado = { ...alumno, edad: 23, promedio: 8.5 };
  logResult(id, JSON.stringify(actualizado, null, 0));
  logComment(id, "El objeto original NO se modifica:");
  logResult(id, `alumno.edad sigue siendo ${alumno.edad}`);
};


// ═══════════════════════════════════════════════════════════════════
// CLASE 14, SLIDE 5 — Chaining (Sistema de productos)
// ═══════════════════════════════════════════════════════════════════

const productos = [
  { nombre: "Laptop",  precio: 1200, stock: true,  emoji: "💻" },
  { nombre: "Mouse",   precio: 25,   stock: true,  emoji: "🖱️" },
  { nombre: "Monitor", precio: 350,  stock: false, emoji: "🖥️" },
  { nombre: "Teclado", precio: 60,   stock: true,  emoji: "⌨️" },
  { nombre: "Webcam",  precio: 80,   stock: true,  emoji: "📷" },
];

// Renderizar productos al cargar
const renderProductos = (filtrados = []) => {
  const grid = document.getElementById("productos-grid");
  grid.innerHTML = "";
  productos.forEach(p => {
    const esActivo = filtrados.length === 0 || filtrados.includes(p.nombre);
    const div = document.createElement("div");
    div.className = `producto-card ${esActivo ? "activo" : "filtrado"}`;
    div.innerHTML = `
      <div class="producto-emoji">${p.emoji}</div>
      <div class="producto-nombre">${p.nombre}</div>
      <div class="producto-precio">$${p.precio}</div>
      <div class="producto-stock">${p.stock ? "✅ En stock" : "❌ Sin stock"}</div>
    `;
    grid.appendChild(div);
  });
};

const ejemploChaining = () => {
  limpiar("consola-chaining");
  const id = "consola-chaining";

  const precioMin = Number(document.getElementById("input-preciomin").value);
  const soloStock = document.getElementById("input-stock").checked;

  logComment(id, "productos");
  logComment(id, `  .filter(p => p.stock)  → solo con stock: ${soloStock}`);
  logComment(id, `  .filter(p => p.precio > ${precioMin})  → precio > $${precioMin}`);

  let resultado = productos;

  if (soloStock) {
    resultado = resultado.filter(p => p.stock);
  }
  resultado = resultado.filter(p => p.precio > precioMin);

  const nombres = resultado.map(p => p.nombre);
  logComment(id, "  .map(p => p.nombre)");
  logResult(id, `Productos: [${nombres.join(", ")}]`);

  const precios = resultado.map(p => p.precio);
  logComment(id, "  .map(p => p.precio)");
  logResult(id, `Precios: [${precios.join(", ")}]`);

  const total = precios.reduce((acc, p) => acc + p, 0);
  logComment(id, "  .reduce((acc, precio) => acc + precio, 0)");
  logResult(id, `Total: $${total}`);

  log(id, "", "comment");
  logResult(id, `${resultado.length} productos encontrados de ${productos.length}`);

  // Actualizar tarjetas visuales
  renderProductos(nombres);
};

// Inicializar productos al cargar
document.addEventListener("DOMContentLoaded", () => {
  renderProductos();
});

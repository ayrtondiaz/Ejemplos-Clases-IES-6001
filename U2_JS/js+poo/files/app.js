// ═══════════════════════════════════════════════════════════════════
// Clase 14 — Ejemplos interactivos (index.html)
// ═══════════════════════════════════════════════════════════════════

const log = (id, text, type = "result") => {
  const span = document.createElement("span");
  span.className = `log-line log-${type}`;
  span.textContent = text;
  document.getElementById(id).appendChild(span);
};
const clear = (id) => { document.getElementById(id).innerHTML = ""; };
const comment = (id, t) => log(id, `// ${t}`, "comment");
const result = (id, t) => log(id, `→ ${t}`, "result");

// ═══ Arrays ═══
const runArrays = () => {
  clear("c-arrays");
  const frutas = ["manzana", "banana", "naranja"];
  comment("c-arrays", 'frutas = ["manzana", "banana", "naranja"]');
  frutas.push("uva");
  comment("c-arrays", 'frutas.push("uva")');
  result("c-arrays", `[${frutas.join(", ")}]`);
  frutas.pop();
  comment("c-arrays", "frutas.pop()");
  result("c-arrays", `[${frutas.join(", ")}]`);
  frutas.unshift("fresa");
  comment("c-arrays", 'frutas.unshift("fresa")');
  result("c-arrays", `[${frutas.join(", ")}]`);
  comment("c-arrays", 'frutas.includes("banana")');
  result("c-arrays", `${frutas.includes("banana")}`);
  comment("c-arrays", "frutas.length");
  result("c-arrays", `${frutas.length}`);
};

// ═══ Destructuring ═══
const runDestruct = () => {
  clear("c-destruct");
  const colores = ["rojo", "azul", "verde", "amarillo"];
  const [primero, segundo, ...resto] = colores;
  comment("c-destruct", "const [primero, segundo, ...resto] = colores");
  result("c-destruct", `primero = "${primero}"`);
  result("c-destruct", `segundo = "${segundo}"`);
  result("c-destruct", `resto = [${resto.join(", ")}]`);
  log("c-destruct", "", "comment");
  const mas = [...colores, "violeta", "naranja"];
  comment("c-destruct", '[...colores, "violeta", "naranja"]');
  result("c-destruct", `[${mas.join(", ")}]`);
};

// ═══ map ═══
const runMap = () => {
  clear("c-map");
  const nums = [1, 2, 3, 4, 5];
  comment("c-map", "nums.map(n => n * 2)");
  result("c-map", `[${nums.map(n => n * 2).join(", ")}]`);
  comment("c-map", 'nums.map(n => `Nro ${n}`)');
  result("c-map", `[${nums.map(n => `Nro ${n}`).join(", ")}]`);
  comment("c-map", "nums.map(n => n ** 2)");
  result("c-map", `[${nums.map(n => n ** 2).join(", ")}]`);
};

// ═══ filter ═══
const runFilter = () => {
  clear("c-filter");
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  comment("c-filter", "filter(n => n % 2 === 0)  — pares");
  result("c-filter", `[${nums.filter(n => n % 2 === 0).join(", ")}]`);
  comment("c-filter", "filter(n => n > 5)  — mayores que 5");
  result("c-filter", `[${nums.filter(n => n > 5).join(", ")}]`);
};

// ═══ find ═══
const runFind = () => {
  clear("c-find");
  const usuarios = [
    { nombre: "Ana", edad: 22 },
    { nombre: "Luis", edad: 17 },
    { nombre: "Pedro", edad: 30 }
  ];
  const menor = usuarios.find(u => u.edad < 18);
  comment("c-find", "usuarios.find(u => u.edad < 18)");
  result("c-find", `{ nombre: "${menor.nombre}", edad: ${menor.edad} }`);
  const pedro = usuarios.find(u => u.nombre === "Pedro");
  comment("c-find", 'usuarios.find(u => u.nombre === "Pedro")');
  result("c-find", `{ nombre: "${pedro.nombre}", edad: ${pedro.edad} }`);
};

// ═══ reduce ═══
const runReduce = () => {
  clear("c-reduce");
  const nums = [1, 2, 3, 4, 5];
  comment("c-reduce", "reduce((acc, n) => acc + n, 0)  — sumar");
  result("c-reduce", `${nums.reduce((a, n) => a + n, 0)}`);
  comment("c-reduce", "reduce((acc, n) => acc * n, 1)  — multiplicar");
  result("c-reduce", `${nums.reduce((a, n) => a * n, 1)}`);
  comment("c-reduce", "reduce((a, b) => a > b ? a : b)  — máximo");
  result("c-reduce", `${nums.reduce((a, b) => a > b ? a : b)}`);
};

// ═══ Objetos ═══
const runObjetos = () => {
  clear("c-objetos");
  const alumno = {
    nombre: "María", edad: 22, carrera: "Sistemas",
    materias: ["Prog II", "Redes"],
    presentarse() { return `Soy ${this.nombre}, ${this.edad} años`; }
  };
  comment("c-objetos", "alumno.nombre");
  result("c-objetos", `"${alumno.nombre}"`);
  comment("c-objetos", "alumno.materias");
  result("c-objetos", `[${alumno.materias.join(", ")}]`);
  comment("c-objetos", "alumno.presentarse()");
  result("c-objetos", `"${alumno.presentarse()}"`);
};

// ═══ Spread objetos ═══
const runSpread = () => {
  clear("c-spread");
  const alumno = { nombre: "María", edad: 22, carrera: "Sistemas" };
  const { nombre, edad, carrera } = alumno;
  comment("c-spread", "Destructuring:");
  result("c-spread", `nombre = "${nombre}", edad = ${edad}, carrera = "${carrera}"`);
  log("c-spread", "", "comment");
  const act = { ...alumno, edad: 23, promedio: 8.5 };
  comment("c-spread", "{ ...alumno, edad: 23, promedio: 8.5 }");
  result("c-spread", JSON.stringify(act));
  comment("c-spread", "Original NO se modifica:");
  result("c-spread", `alumno.edad sigue siendo ${alumno.edad}`);
};

// ═══ Chaining (TP5 Consigna 1) ═══
const runChaining = () => {
  clear("c-chaining");
  const alumnos = [
    { nombre: "Ana", nota: 8 }, { nombre: "Carlos", nota: 5 },
    { nombre: "María", nota: 9 }, { nombre: "Juan", nota: 3 },
    { nombre: "Lucía", nota: 7 }, { nombre: "Pedro", nota: 6 },
  ];

  // (a) Promedio
  const notas = alumnos.map(a => a.nota);
  const promedio = notas.reduce((a, n) => a + n, 0) / notas.length;
  comment("c-chaining", "(a) calcularPromedio con map + reduce");
  result("c-chaining", `Notas: [${notas.join(", ")}]`);
  result("c-chaining", `Promedio: ${promedio.toFixed(2)}`);

  log("c-chaining", "", "comment");

  // (b) Aprobados
  const aprobados = alumnos.filter(a => a.nota >= 6);
  comment("c-chaining", "(b) filtrarAprobados con filter(nota >= 6)");
  result("c-chaining", `[${aprobados.map(a => `${a.nombre}(${a.nota})`).join(", ")}]`);

  log("c-chaining", "", "comment");

  // (c) Formatear
  const formateados = alumnos.map(a => `${a.nombre}: ${a.nota}`);
  comment("c-chaining", "(c) formatearAlumnos con map");
  formateados.forEach(f => result("c-chaining", f));

  log("c-chaining", "", "comment");

  // (d) Buscar
  const maria = alumnos.find(a => a.nombre === "María");
  comment("c-chaining", '(d) buscarAlumno("María") con find');
  result("c-chaining", `{ nombre: "${maria.nombre}", nota: ${maria.nota} }`);
};

//EJERCICIO 1

//  DATOS DE PRUEBA 

const alumnos = [
{ nombre: "Ana", nota: 8 },
{ nombre: "Carlos", nota: 5 },
{ nombre: "María", nota: 9 },
{ nombre: "Juan", nota: 3 },
{ nombre: "Lucía", nota: 7 },
{ nombre: "Pedro", nota: 6 },
];
// (a) Promedio con reduce
const calcularPromedio = (notas) =>
notas.reduce((acc, n) => acc + n, 0) / notas.length;
const soloNotas = alumnos.map(a => a.nota);
console.log("Promedio:", calcularPromedio(soloNotas).toFixed(2));
// (b) Filtrar aprobados con filter
const filtrarAprobados = (lista) => lista.filter(a => a.nota >= 6);
console.log("Aprobados:", filtrarAprobados(alumnos));
// (c) Formatear con map
const formatearAlumnos = (lista) =>
lista.map(a => `Nombre: ${a.nombre} - Nota: ${a.nota}`);
console.log(formatearAlumnos(alumnos));
// (d) Buscar con find
const buscarAlumno = (lista, nombre) =>
lista.find(a => a.nombre === nombre);
console.log("Buscar María:", buscarAlumno(alumnos, "María"));

// //EJERCICIO 2
// const productos = [
//   { nombre: "Laptop",  precio: 1200, stock: true },
//   { nombre: "Mouse",   precio: 25,   stock: true },
//   { nombre: "Monitor", precio: 350,  stock: false },
//   { nombre: "Teclado", precio: 60,   stock: true },
//   { nombre: "Webcam",  precio: 80,   stock: true },
// ];

// // Chaining: filtrar → transformar → acumular
// const totalDisponible = productos
//   .filter(p => p.stock)             // solo con stock
//   .filter(p => p.precio > 30)       // precio > $30
//   .map(p => p.precio)               // extraer precios
//   .reduce((acc, precio) => acc + precio, 0);  // sumar

// // Obtener nombres
// const nombres = productos
//   .filter(p => p.stock)
//   .map(p => p.nombre)
//   .join(", ");
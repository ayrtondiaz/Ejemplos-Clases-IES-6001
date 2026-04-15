const productos = [
  { id: 1, nombre: "Laptop", precio: 1200, categoria: "Electrónica", enStock: true },
  { id: 2, nombre: "Mouse", precio: 25, categoria: "Electrónica", enStock: true },
  { id: 3, nombre: "Camiseta", precio: 30, categoria: "Ropa", enStock: false },
  { id: 4, nombre: "Monitor", precio: 350, categoria: "Electrónica", enStock: true },
  { id: 5, nombre: "Zapatillas", precio: 80, categoria: "Ropa", enStock: true },
  { id: 6, nombre: "Teclado", precio: 60, categoria: "Electrónica", enStock: true },
  { id: 7, nombre: "Mochila", precio: 45, categoria: "Accesorios", enStock: true },
  { id: 8, nombre: "Auriculares", precio: 90, categoria: "Electrónica", enStock: false },
];

// ========================================
// (a) Mostrar todos los productos
// ========================================
// console.log("=== TODOS LOS PRODUCTOS ===");
// productos.forEach(p => {
//   console.log(`${p.nombre} - $${p.precio} - ${p.categoria} - ${p.enStock ? "En stock" : "Sin stock"}`);
// });

// ========================================
// (b) Filtrar por categoría
// ========================================
const filtrarPorCategoria = (categoria) => {
  return productos.filter(p => p.categoria === categoria);
};

console.log("\n=== FILTRO: Electrónica ===");
console.log(filtrarPorCategoria("Electrónica"));

// console.log("\n=== FILTRO: Ropa ===");
// console.log(filtrarPorCategoria("Ropa"));

// ========================================
// (c) Filtrar por precio máximo
// ========================================
// const filtrarPorPrecioMax = (max) => {
//   return productos.filter(p => p.precio <= max);
// };

// console.log("\n=== FILTRO: Precio <= $100 ===");
// console.log(filtrarPorPrecioMax(100));

// ========================================
// (d) Filtrar solo productos en stock
// ========================================
// const filtrarEnStock = () => {
//   return productos.filter(p => p.enStock);
// };

// console.log("\n=== FILTRO: Solo en stock ===");
// console.log(filtrarEnStock());

// ========================================
// (e) Buscar por nombre
// ========================================
// const buscarPorNombre = (texto) => {
//   return productos.filter(p =>
//     p.nombre.toLowerCase().includes(texto.toLowerCase())
//   );
// };

// console.log('\n=== BÚSQUEDA: "mo" ===');
// console.log(buscarPorNombre("mo"));

// ========================================
// COMBO: Todos los filtros combinados
// ========================================
// const filtrarProductos = (categoria, precioMax, soloStock, busqueda) => {
//   return productos.filter(p => {
//     const pasaCategoria = categoria === "todas" || p.categoria === categoria;
//     const pasaPrecio = p.precio <= precioMax;
//     const pasaStock = !soloStock || p.enStock;
//     const pasaBusqueda = p.nombre.toLowerCase().includes(busqueda.toLowerCase());

//     return pasaCategoria && pasaPrecio && pasaStock && pasaBusqueda;
//   });
// };

// console.log("\n=== COMBO: Electrónica + max $100 + en stock + sin búsqueda ===");
// console.log(filtrarProductos("Electrónica", 100, true, ""));

// console.log("\n=== COMBO: Todas + max $500 + en stock + buscar 'a' ===");
// console.log(filtrarProductos("todas", 500, true, "a"));
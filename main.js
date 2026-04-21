 
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

    const imagenes = [
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg",
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-02.jpg",
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-03.jpg",
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-04.jpg",
    ];

    function renderProductos() {
      const app = document.getElementById("app");

      const cards = productos.map((producto, index) => {
        const img = imagenes[index % imagenes.length];
        const stockBadge = producto.enStock
          ? `<span class="inline-block rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700">En stock</span>`
          : `<span class="inline-block rounded-full bg-red-100 px-2 py-0.5 text-xs font-medium text-red-700">Sin stock</span>`;

        return `
          <div class="group relative">
            <img src="${img}" alt="${producto.nombre}" class="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80" />
            <div class="mt-4 flex justify-between">
              <div>
                <h3 class="text-sm text-gray-700">
                  <a href="#">
                    <span aria-hidden="true" class="absolute inset-0"></span>
                    ${producto.nombre}
                  </a>
                </h3>
                <p class="mt-1 text-sm text-gray-500">${producto.categoria} · ${stockBadge}</p>
              </div>
              <p class="text-sm font-medium text-gray-900">$${producto.precio}</p>
            </div>
          </div>
        `;
      }).join("");

      app.innerHTML = `
        <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 class="text-2xl font-bold tracking-tight text-gray-900">Productos</h2>
          <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            ${cards}
          </div>
        </div>
      `;
    }

    renderProductos();

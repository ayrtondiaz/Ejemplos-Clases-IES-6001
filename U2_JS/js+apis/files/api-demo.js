// ═══════════════════════════════════════════════════════════════════
// TP5 Consignas 4-5 — Fetch API + Buscador Dinámico
// 3 ejemplos: Rick and Morty, PokéAPI, REST Countries
// ═══════════════════════════════════════════════════════════════════

// ─── DOM ─────────────────────────────────────────────────────────
const container   = document.querySelector("#api-resultados");
const estadoEl    = document.querySelector("#api-estado");
const vacioEl     = document.querySelector("#api-vacio");
const inputBusq   = document.querySelector("#busqueda-api");
const hintEl      = document.querySelector("#buscador-hint");

// ─── ESTADO GLOBAL ───────────────────────────────────────────────
let apiActiva = "rick";
let datosCache = [];    // cache de datos para filtrar localmente

// ─── HELPERS DE ESTADO VISUAL ────────────────────────────────────
const mostrarLoading = (msg = "Cargando...") => {
  container.innerHTML = "";
  vacioEl.style.display = "none";
  estadoEl.innerHTML = `<div class="loading-spinner"><div class="spinner"></div><span>${msg}</span></div>`;
};

const mostrarError = (msg) => {
  container.innerHTML = "";
  vacioEl.style.display = "none";
  estadoEl.innerHTML = `<div class="error-box"><span class="error-icon">❌</span><p>${msg}</p><button class="btn-retry" onclick="cargarAPI()">Reintentar</button></div>`;
};

const mostrarVacio = () => {
  container.innerHTML = "";
  estadoEl.innerHTML = "";
  vacioEl.style.display = "block";
};

const limpiarEstado = () => {
  estadoEl.innerHTML = "";
  vacioEl.style.display = "none";
};

// ═══════════════════════════════════════════════════════════════════
// API 1: RICK AND MORTY
// rickandmortyapi.com/api/character
// ═══════════════════════════════════════════════════════════════════

const cargarRickAndMorty = async () => {
  mostrarLoading("Cargando personajes de Rick and Morty...");

  try {
    // (a) función async + fetch
    const response = await fetch("https://rickandmortyapi.com/api/character");

    // (b) verificar response.ok
    if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);

    const data = await response.json();
    datosCache = data.results;

    renderRickAndMorty(datosCache);

  } catch (error) {
    // (f) mostrar error visible
    mostrarError(`No se pudieron cargar los personajes: ${error.message}`);
  }
};

const renderRickAndMorty = (lista) => {
  if (lista.length === 0) { mostrarVacio(); return; }
  limpiarEstado();

  // (e) renderizar con .map()
  container.innerHTML = lista.map(p => `
    <article class="api-card-result rick-card">
      <img src="${p.image}" alt="${p.name}" class="api-card-img" loading="lazy">
      <div class="api-card-body">
        <h3>${p.name}</h3>
        <p class="api-card-detail">
          <span class="status-dot ${p.status === 'Alive' ? 'dot-alive' : p.status === 'Dead' ? 'dot-dead' : 'dot-unknown'}"></span>
          ${p.status} — ${p.species}
        </p>
        <p class="api-card-meta">📍 ${p.location.name}</p>
        <p class="api-card-meta">🎬 ${p.episode.length} episodios</p>
      </div>
    </article>
  `).join("");
};

const buscarRickAndMorty = (texto) => {
  // Filtrar localmente con .filter()
  const filtrados = datosCache.filter(p =>
    p.name.toLowerCase().includes(texto) ||
    p.species.toLowerCase().includes(texto) ||
    p.location.name.toLowerCase().includes(texto)
  );
  renderRickAndMorty(filtrados);
};


// ═══════════════════════════════════════════════════════════════════
// API 2: PokéAPI
// pokeapi.co/api/v2/pokemon?limit=30
// ═══════════════════════════════════════════════════════════════════

const cargarPokemon = async () => {
  mostrarLoading("Cargando pokémon...");

  try {
    // Obtener lista de nombres
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=24");
    if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);
    const data = await response.json();

    // Fetch individual para cada pokémon (obtener detalles)
    const detalles = await Promise.all(
      data.results.map(async (p) => {
        const res = await fetch(p.url);
        return res.json();
      })
    );

    datosCache = detalles;
    renderPokemon(datosCache);

  } catch (error) {
    mostrarError(`No se pudieron cargar los pokémon: ${error.message}`);
  }
};

const renderPokemon = (lista) => {
  if (lista.length === 0) { mostrarVacio(); return; }
  limpiarEstado();

  container.innerHTML = lista.map(p => {
    const tipos = p.types.map(t => t.type.name);
    const tipoClase = tipos[0] || "normal";
    return `
      <article class="api-card-result pokemon-card pokemon-${tipoClase}">
        <div class="pokemon-id">#${String(p.id).padStart(3, '0')}</div>
        <img src="${p.sprites.other['official-artwork'].front_default || p.sprites.front_default}" 
             alt="${p.name}" class="pokemon-img" loading="lazy">
        <div class="api-card-body">
          <h3>${p.name.charAt(0).toUpperCase() + p.name.slice(1)}</h3>
          <div class="pokemon-tipos">
            ${tipos.map(t => `<span class="pokemon-tipo tipo-${t}">${t}</span>`).join("")}
          </div>
          <div class="pokemon-stats">
            <span>❤️ HP: ${p.stats[0].base_stat}</span>
            <span>⚔️ ATK: ${p.stats[1].base_stat}</span>
            <span>🛡️ DEF: ${p.stats[2].base_stat}</span>
          </div>
        </div>
      </article>
    `;
  }).join("");
};

const buscarPokemon = (texto) => {
  const filtrados = datosCache.filter(p =>
    p.name.toLowerCase().includes(texto) ||
    p.types.some(t => t.type.name.toLowerCase().includes(texto))
  );
  renderPokemon(filtrados);
};


// ═══════════════════════════════════════════════════════════════════
// API 3: REST Countries
// restcountries.com/v3.1/all
// ═══════════════════════════════════════════════════════════════════

const cargarCountries = async () => {
  mostrarLoading("Cargando países del mundo...");

  try {
    const response = await fetch("https://restcountries.com/v3.1/all?fields=name,flags,capital,population,region,languages");
    if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);

    let data = await response.json();
    // Ordenar por población descendente, tomar 30
    data = data.sort((a, b) => b.population - a.population).slice(0, 30);
    datosCache = data;

    renderCountries(datosCache);

  } catch (error) {
    mostrarError(`No se pudieron cargar los países: ${error.message}`);
  }
};

const renderCountries = (lista) => {
  if (lista.length === 0) { mostrarVacio(); return; }
  limpiarEstado();

  container.innerHTML = lista.map(p => {
    const idiomas = p.languages ? Object.values(p.languages).slice(0, 2).join(", ") : "—";
    const capital = p.capital ? p.capital[0] : "—";
    const poblacion = p.population.toLocaleString("es-AR");
    return `
      <article class="api-card-result country-card">
        <img src="${p.flags.svg}" alt="Bandera de ${p.name.common}" class="country-flag" loading="lazy">
        <div class="api-card-body">
          <h3>${p.name.common}</h3>
          <p class="api-card-detail">🏛️ ${capital}</p>
          <p class="api-card-meta">🌎 ${p.region}</p>
          <p class="api-card-meta">👥 ${poblacion}</p>
          <p class="api-card-meta">🗣️ ${idiomas}</p>
        </div>
      </article>
    `;
  }).join("");
};

const buscarCountries = (texto) => {
  const filtrados = datosCache.filter(p =>
    p.name.common.toLowerCase().includes(texto) ||
    p.region.toLowerCase().includes(texto) ||
    (p.capital && p.capital[0].toLowerCase().includes(texto))
  );
  renderCountries(filtrados);
};


// ═══════════════════════════════════════════════════════════════════
// CONTROLADOR — Cambiar entre APIs
// ═══════════════════════════════════════════════════════════════════

const placeholders = {
  rick: "Buscar personaje (nombre, especie, ubicación)...",
  pokemon: "Buscar pokémon (nombre o tipo)...",
  countries: "Buscar país (nombre, capital, región)...",
};

const cargarAPI = () => {
  inputBusq.value = "";
  hintEl.textContent = "Escribí al menos 3 caracteres";
  hintEl.style.display = "block";

  if (apiActiva === "rick") cargarRickAndMorty();
  else if (apiActiva === "pokemon") cargarPokemon();
  else if (apiActiva === "countries") cargarCountries();
};

const cambiarAPI = (api) => {
  apiActiva = api;
  inputBusq.placeholder = placeholders[api];

  // Actualizar tabs
  document.querySelectorAll(".api-tab").forEach(t => t.classList.remove("activo"));
  document.getElementById(`tab-${api}`).classList.add("activo");

  cargarAPI();
};

// ═══════════════════════════════════════════════════════════════════
// BUSCADOR DINÁMICO — addEventListener("input")
// ═══════════════════════════════════════════════════════════════════

inputBusq.addEventListener("input", (e) => {
  const texto = e.target.value.trim().toLowerCase();

  // (a) Si está vacío, mostrar todos
  if (texto.length === 0) {
    hintEl.textContent = "Escribí al menos 3 caracteres";
    hintEl.style.display = "block";
    if (apiActiva === "rick") renderRickAndMorty(datosCache);
    else if (apiActiva === "pokemon") renderPokemon(datosCache);
    else renderCountries(datosCache);
    return;
  }

  // (a) No buscar con menos de 3 caracteres
  if (texto.length < 3) {
    hintEl.textContent = `Escribí ${3 - texto.length} caracter${3 - texto.length !== 1 ? 'es' : ''} más...`;
    hintEl.style.display = "block";
    return;
  }

  hintEl.style.display = "none";

  // (c) Filtrar según la API activa
  if (apiActiva === "rick") buscarRickAndMorty(texto);
  else if (apiActiva === "pokemon") buscarPokemon(texto);
  else buscarCountries(texto);
});


// ═══════════════════════════════════════════════════════════════════
// INICIALIZAR
// ═══════════════════════════════════════════════════════════════════
window.cambiarAPI = cambiarAPI;
cargarAPI();

// ============================================
//  Reto 23: Eventos del DOM - click, hover y keydown
// ============================================
// Completa cada función según las instrucciones.
// Ejecuta los tests con: npx vitest src/23-eventos-dom-click-hover-keydown
// ============================================


// --- Reto 1: Crear Estado Inicial
// Retorna objeto → {likes: 0, isHovering: false}
function crearEstadoInicial() {
  // tu codigo aqui
  const state = {likes: 0,
    isHovering: false
  }

  return state;
}

console.log(crearEstadoInicial());

// --- Reto 2: Obtener Mensaje Estado
// Usa condicionales (if) y template literals para retornar:
// - "Aún no hay likes. Haz clic en me gusta" si likes === 0
// - "Tienes un like. Buen inicio" si likes === 1
// - "Tienes {likes} likes. Sigue así" si likes > 1
function obtenerMensajeEstado(state) {
  // tu codigo aqui

  if (state.likes === 0) {
    return 'Aún no hay Likes. Haz clic en "Me gusta"'
  } else if (state.likes === 1) {
    return 'Tienes un Like. Buen inicio.'
  } else if (state.likes > 1) {
    return `Tienes ${state.likes} likes. Sigue así.`
  }

}

const estado = {likes: 1, isHovering: false}

console.log(obtenerMensajeEstado(estado));

function renderizarEstado(state) {
  const status = document.querySelector('.status');
  const btnReset = document.querySelector('.btn-reset');
  const hoverZone = document.querySelector('.hover-zone');
  const hoverPill = document.querySelector('.hover-pill');
  const hoverTitle = document.querySelector('.hover-title');
  const hoverText = document.querySelector('.hover-text');

  if (status) status.textContent = obtenerMensajeEstado(state);
  
  if (btnReset) {
    btnReset.disabled = state.likes === 0;
    btnReset.style.opacity = state.likes === 0 ? 0.55 : 1;
  }

  if (hoverZone) {
    hoverZone.classList.toggle('is-hover', state.isHovering);
  }

  if (hoverPill) hoverPill.textContent = obtenerTextoHover(state.isHovering);
  if (hoverTitle) hoverTitle.textContent = obtenerTituloHover(state.isHovering);
  if (hoverText) {
    hoverText.textContent = state.isHovering
      ? 'Este cambio se disparó por el mouse enter del DOM'
      : 'Cuando entras, sales, cambias una clase y el texto';
  }
}

// --- Reto 4: Configurar Evento Like
// .btn-like → addEventListener('click', ...) → state.likes += 1 → renderizar
// Usa función anónima
function configurarEventoLike(state) {
  // tu codigo aqui
    const btnLike = document.querySelector('.btn-like');

    btnLike.addEventListener('click', () =>  {
        state.likes += 1;
        renderizarEstado(state);
    });
}

// --- Reto 5: Configurar Evento Reset
// .btn-reset → addEventListener('click', ...) → state.likes = 0 → renderizar
function configurarEventoReset(state) {
  // tu codigo aqui
  const btnReset = document.querySelector('.btn-reset');

  btnReset.addEventListener('click', () =>  {
    state.likes = 0;
    renderizarEstado(state);
  })
}

// --- Reto 6: Configurar Eventos Hover
// .hover-zone → mouseenter: state.isHovering = true → renderizar
//              → mouseleave: state.isHovering = false → renderizar
function configurarEventosHover(state) {
  // tu codigo aqui
  const hoverzone = document.querySelector('.hover-zone');

  hoverzone.addEventListener('mouseenter', () => {
    state.isHovering = true;
    renderizarEstado(state);
  })

  hoverzone.addEventListener('mouseleave', () => {
    state.isHovering = false;
    renderizarEstado(state);
  })
}


// --- Reto 7: Configurar Evento Teclado
// document → addEventListener('keydown', ...) 
// Si event.key === 'l' o 'L' → state.likes += 1 → renderizar
// usa event.key.toLowerCase() !== 'l' return
function configurarEventoTeclado(state) {
  // tu codigo aqui
  document.addEventListener('keydown', (event) => {
    if (event.key?.toLowerCase() !== 'l') return;
    state.likes += 1;
    renderizarEstado(state);
  })
}

// --- Reto 8: Inicializar Aplicación
// 1. Crea estado inicial
// 2. Configura todos los eventos (Like, Reset, Hover, Teclado)
// 3. Renderiza estado
// 4. Retorna state
function inicializarAplicacion() {
  // tu codigo aqui
  const estado = crearEstadoInicial();

  configurarEventoLike(estado);
  configurarEventoReset(estado);
  configurarEventosHover(estado);
  configurarEventoTeclado(estado);

  renderizarEstado(estado);
  return(estado);
}

console.log(inicializarAplicacion());

// --- Reto 9: Obtener Texto Hover
// Operador ternario: isHovering ? 'mouse dentro' : 'mouse fuera'
function obtenerTextoHover(isHovering) {
  // tu codigo aqui
    const textoHover = isHovering ? 'mouse dentro' : 'mouse fuera';
    return textoHover;
}

console.log(obtenerTextoHover(false));

// --- Reto 10: Obtener Titulo Hover
// Operador ternario: isHovering ? 'hover detectado' : 'pasa el mouse por aquí'
function obtenerTituloHover(isHovering) {
  // tu codigo aqui
  const tituloHover = isHovering ? 'hover detectado' : 'pasa el mouse por aquí';
  return tituloHover;
}

console.log(obtenerTituloHover(true));

module.exports = {
  crearEstadoInicial,
  obtenerMensajeEstado,
  renderizarEstado,
  configurarEventoLike,
  configurarEventoReset,
  configurarEventosHover,
  configurarEventoTeclado,
  inicializarAplicacion,
  obtenerTextoHover,
  obtenerTituloHover,
};
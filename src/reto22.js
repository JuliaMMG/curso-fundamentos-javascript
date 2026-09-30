// ============================================
//  Reto 22: Renderizado Dinámico de Opiniones
// ============================================
// Completa cada función según las instrucciones.
// Ejecuta los tests con: npx vitest src/22-renderizado-dinamico-opiniones
// ============================================

const { createElement } = require("react");

const opiniones = [
  {
    id: 'op-1',
    nombre: 'María',
    rating: 5,
    comentario: 'Llegó rápido y la calidad es excelente.',
    fecha: '2025-01-10',
  },
  {
    id: 'op-2',
    nombre: 'Carlos',
    rating: 4,
    comentario: 'Buen producto. El empaque podría mejorar.',
    fecha: '2025-01-22',
  },
  {
    id: 'op-3',
    nombre: 'Luisa',
    rating: 5,
    comentario: 'Muy cómodo. Compraría de nuevo.',
    fecha: '2025-02-03',
  },

  {
    id: 'op-5',
    nombre: 'Oscar',
    rating: 5,
    comentario: 'Muy cómodo. Compraría de nuevo.',
    fecha: '2025-02-03',
  },
];

// --- Reto 1: Crear Elemento Opinión
// Crea estructura: <article><header><div>nombre rating</div><small>fecha</small></header><p>comentario</p></article>
// Usa: createElement, textContent, appendChild
function crearElementoOpinion(opinion) {
  // tu codigo aqui
    const article = document.createElement('article');

    const header = document.createElement('header');
    article.appendChild(header);

    const div = document.createElement('div');
    header.appendChild(div);

    const nombre = document.createElement('strong');
    nombre.textContent = opinion.nombre;

    const rating = document.createElement('strong');
    rating.textContent = opinion.rating;

    div.appendChild(nombre);
    div.appendChild(rating);

    const fecha = document.createElement('small');
    fecha.textContent = opinion.fecha;
    header.appendChild(fecha);

    const comentario  = document.createElement('p');
    comentario.textContent = opinion.comentario;

    article.appendChild(comentario);

    return article;
}

// --- Reto 2: Crear Elemento Opinión con Estilos
// Igual que Reto 1 pero agrega clases y dataset.id
// Usa: classList.add, dataset.id
function crearElementoOpinionConEstilos(opinion) {
  // tu codigo aqui
    const article = document.createElement('article');
    article.classList.add('opiniones');
    article.dataset.id = opinion.id;

    const header = document.createElement('header');
    header.classList.add('encabezado');
    article.appendChild(header);
    
    const div = document.createElement('div');
    div.classList.add('opinion-desarrollo')
    header.appendChild(div);

    const nombre = document.createElement('strong');
    nombre.textContent = opinion.nombre;

    const rating = document.createElement('strong');
    rating.textContent = opinion.rating;

    div.appendChild(nombre);
    div.appendChild(rating);

    const fecha = document.createElement('small');
    fecha.textContent = opinion.fecha;
    header.appendChild(fecha);

    const comentario  = document.createElement('p');
    comentario.classList.add('comentario');
    comentario.textContent = opinion.comentario;

    article.appendChild(comentario);

    return article;
}

/*
const contenedorOpiniones = document.querySelector("#opiniones");

const opinionHTML = crearElementoOpinionConEstilos(opiniones);

contenedorOpiniones.appendChild(opinionHTML);
*/

// --- Reto 3: Renderizar Opiniones
// Limpia #opiniones y agrega elementos de la lista
// Usa: querySelector, replaceChildren, appendChild, forEach
function renderizarOpiniones(lista) {
  // tu codigo aqui
  const contenedor = document.querySelector('#opiniones');
  contenedor.replaceChildren();

  lista.forEach(opinion => {
    const elemento = crearElementoOpinion(opinion);
    contenedor.appendChild(elemento);
  });
}

// --- Reto 4: Crear Imagen con Atributos
// Crea <img> con src, alt, className
// datosImagen = {src, alt, class}
function crearImagenConAtributos(datosImagen) {
  // tu codigo aqui
  const imagen = document.createElement('img');


  imagen.src = datosImagen.src;
  imagen.alt = datosImagen.alt;
  imagen.className = datosImagen.class;

  return imagen;
}

const datosImg = {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLQXrIfCD9xkW5cRmu8ob91qPiOjdiX0pkgAabWsjeHQ&s=10",
    alt: "Gatito",
    class: "imagen-gato"
};


// --- Reto 5: Construir Tarjeta Opinión
// Estructura semántica: <article><header><h3>nombre</h3><span>rating</span></header>
//                       <section><p>comentario</p></section><footer><small>fecha</small></footer></article>
// Usa: classList.add para todas las clases
function construirTarjetaOpinion(opinion) {
  // tu codigo aqui
  const article = document.createElement('article');
  article.classList.add('articulo');

  const header = document.createElement('header');
  header.classList.add('encabezado');
  article.appendChild(header);

  const title = document.createElement('h3');
  title.classList.add('titulo');
  title.textContent = opinion.nombre;
  header.appendChild(title);

  const span = document.createElement('span');
  span.classList.add('separador');
  span.textContent = opinion.rating;
  header.appendChild(span);

  const section = document.createElement('section');
  section.classList.add('seccion');
  article.appendChild(section);

  const p = document.createElement('p');
  p.classList.add('parrafo');
  p.textContent = opinion.comentario;
  section.appendChild(p);

  const footer = document.createElement('footer');
  footer.classList.add('pie-pag');
  article.appendChild(footer);

  const small = document.createElement('small');
  small.classList.add('sector');
  small.textContent = opinion.fecha;
  footer.appendChild(small);

  return article;
}

// --- Reto 6: Renderizar Opiniones Filtradas
// Filtra opiniones con rating >= 4 y renderiza en #opiniones
// Usa: filter, renderizarOpiniones
function renderizarOpinionesFiltradas(lista) {
  // tu codigo aqui
  const opinionesfiltradas = lista.filter((opinion) => {
    return opinion.rating >= 4;
    })

    renderizarOpiniones(opinionesfiltradas);
}

// --- Reto 7: Crear Opinión con Template
// Usa innerHTML con template literals
// Estructura: <article class="opinion" data-id={id}><header>...</header><p>comentario</p></article>
function crearOpinionConTemplate(opinion) {
  // tu codigo aqui
  const article = document.createElement('article');
  article.classList.add('opinion');
  article.dataset.id = opinion.id;

  article.innerHTML = `
  <header>
    <div>${opinion.nombre}</div>
    <div>${opinion.rating}</div>
  </header>
  <small>${opinion.fecha}</small>
  <p>${opinion.comentario}</p>
  `

  return article;
}

// --- Reto 8: Renderizar Opiniones Seguro
// Renderiza en #opiniones con manejo de errores
// Usa: try-catch, querySelector, console.error
function renderizarOpinionesSeguro(lista) {
  // tu codigo aqui
  try { 
    const contenedor = document.querySelector('#opiniones');

    if (!contenedor) {
        console.error("No se encontraron opiniones");
        return;
    }

    renderizarOpiniones(lista);

  } catch (error) {
    console.error("Ocurrió un error inesperado", error);
  }

}

// --- Reto 9: Agregar Opinión al Inicio
// Inserta opinión al inicio de #opiniones
// Usa: prepend en lugar de appendChild
function agregarOpinionAlInicio(opinion) {
  // tu codigo aqui

    const contenedor = document.querySelector('#opiniones');

    const article = crearElementoOpinion(opinion);

    contenedor.prepend(article);

    return article;
    
}

// --- Reto 10: Renderizar Opiniones Optimizado
// Renderiza usando DocumentFragment para mejor rendimiento
// Usa: createElement, createDocumentFragment, appendChild
function renderizarOpinionesOptimizado(lista) {
  // tu codigo aqui
}


module.exports = {
  crearElementoOpinion,
  crearElementoOpinionConEstilos,
  renderizarOpiniones,
  crearImagenConAtributos,
  construirTarjetaOpinion,
  renderizarOpinionesFiltradas,
  crearOpinionConTemplate,
  renderizarOpinionesSeguro,
  agregarOpinionAlInicio,
  renderizarOpinionesOptimizado,
};
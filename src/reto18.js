// ============================================
// Reto: Destructuración de objetos en JavaScript
// ============================================
// Completa cada función según las instrucciones.
// Ejecuta los tests con: npx vitest src/18-destructuracion-objetos
// ============================================

// --- Reto 1: Destructuración básica ---
// Usa destructuración para extraer las propiedades "nombre" y "edad"
// del objeto recibido y retórnalas como un array [nombre, edad].
function extraerDatosBasicos(persona) {
  // Tu código aquí
  if ("nombre" in persona || "edad" in persona) {
      const nombre = persona.nombre;
      const edad = persona.edad;
      return [nombre, edad]
  } else {
    return "Nombre y edad no definidos";
  }
}

console.log(extraerDatosBasicos({edad: 26, nombre: "Camila", estadoCivil: "Casada"}));
console.log(extraerDatosBasicos({id: 1025745452, nombre: "Camila", estadoCivil: "Casada"}));
console.log(extraerDatosBasicos({id: 1025745452, edad: 35, estadoCivil: "Casada"}));
console.log(extraerDatosBasicos({id: 1025745452, apellido: "Fernandez", estadoCivil: "Casada"}));

// --- Reto 2: Destructuración con renombrado ---
// Usa destructuración con renombrado para extraer "title" como "titulo"
// y "content" como "contenido" del objeto nota recibido.
// Retorna un objeto { titulo, contenido }.
function extraerNotaRenombrada(nota) {
  // Tu código aquí
  if ("title" in nota || "content" in nota) {
    return {titulo: nota.title, contenido: nota.content}
  } else {
    return "Título y contenido no definidos en la nota"
  }
}

console.log(extraerNotaRenombrada({
    id: 1,
    title: 'Mi primera nota',
    content: 'Contenido de la nota',
    createdAt: Date.now(),
    edad: 13,
    esAdmin: true,
    dates: [1,1,1,1]
}));

// --- Reto 3: Destructuración anidada ---
// Usa destructuración para extraer directamente la propiedad "ciudad"
// del objeto anidado "direccion" dentro del objeto usuario.
// Retorna la ciudad.
function extraerCiudadAnidada(usuario) {
  // Tu código aquí
  // Tip: const { direccion: { ciudad } } = usuario;
  if ("direccion" in usuario || "ciudad" in usuario) {
    return usuario.direccion?.ciudad
  } else {
    return "Dirección o ciudad no especificados en la información del usuario"
  }
}

const usuario1 = {nombre: "Ana", edad: 28, email: "ana@example.com", direccion: {barrio: 'Belen Miravalle', ciudad: 'Medellin'}, profesion: 'Licenciada'};
const usuario2 = {nombre: "Ana", edad: 28, email: "ana@example.com", direccion: {barrio: 'Belen Miravalle'}, profesion: 'Licenciada'};
const usuario3 = {nombre: "Ana", edad: 28, email: "ana@example.com", profesion: 'Licenciada'};
console.log(extraerCiudadAnidada(usuario1));
console.log(extraerCiudadAnidada(usuario2));
console.log(extraerCiudadAnidada(usuario3));

// --- Reto 4: Copia con spread operator ---
// Crea y retorna una copia superficial del objeto producto recibido
// usando el spread operator (...).
function copiarProducto(producto) {
  // Tu código aquí
  const copia = {...producto}
  return copia
}

console.log(copiarProducto({nombre: "Ana", edad: 28, email: "ana@example.com", direccion: {barrio: 'Belen Miravalle', ciudad: 'Medellin'}, profesion: 'Licenciada'}));

// --- Reto 5: Composición de objetos ---
// Crea un nuevo objeto que combine las propiedades de objetoA y objetoB.
// Las propiedades de objetoB deben sobrescribir las de objetoA si hay conflictos.
// Usa spread operator.
function combinarObjetos(objetoA, objetoB) {
  // Tu código aquí
  const nuevoObjeto = {
    ...objetoA,
    ...objetoB
  }
  return nuevoObjeto;
}

const usuaria1 = {nombre: "Ana", edad: 28, email: "ana@example.com", direccion: {barrio: 'Belen Miravalle', ciudad: 'Medellin'}, profesion: 'Licenciada'};
const usuaria2 = {direccion: {barrio: 'Manila', ciudad: 'Medellin'}, profesion: 'Bar Tender'};

console.log(combinarObjetos(usuaria1, usuaria2));

// --- Reto 6: Añadir propiedades con spread ---
// Crea un nuevo objeto a partir del objeto usuario recibido,
// añadiendo las propiedades "activo: true" y "rol: 'admin'".
// No modifiques el objeto original.
function agregarPropiedadesUsuario(usuario) {
  // Tu código aquí
  const usuarioCompleto = {... usuario, activo: true, rol: "admin"}
  return usuarioCompleto;
}

console.log(agregarPropiedadesUsuario({nombre: "Ana", edad: 28, email: "ana@example.com", direccion: {barrio: 'Belen Miravalle', ciudad: 'Medellin'}, profesion: 'Licenciada'}));

// --- Reto 7: Object.keys ---
// Retorna un array con todas las claves (keys) del objeto recibido
// usando Object.keys().
function obtenerClaves(objeto) {
  // Tu código aquí 
  return [Object.keys(objeto)]
}

console.log(obtenerClaves({nombre: "Ana", edad: 28, email: "ana@example.com", direccion: {barrio: 'Belen Miravalle', ciudad: 'Medellin'}, profesion: 'Licenciada'}));

// --- Reto 8: Object.values ---
// Retorna un array con todos los valores del objeto recibido
// usando Object.values().
function obtenerValores(objeto) {
  // Tu código aquí
  return [Object.values(objeto)]
}

console.log(obtenerValores({nombre: "Ana", edad: 28, email: "ana@example.com", direccion: {barrio: 'Belen Miravalle', ciudad: 'Medellin'}, profesion: 'Licenciada'}));


// --- Reto 9: Object.entries ---
// Retorna un array con los pares [clave, valor] del objeto recibido
// usando Object.entries().
function obtenerEntradas(objeto) {
  // Tu código aquí
  return [Object.entries(objeto)]
}

console.log(obtenerEntradas({nombre: "Ana", edad: 28, email: "ana@example.com", direccion: {barrio: 'Belen Miravalle', ciudad: 'Medellin'}, profesion: 'Licenciada'}));

// --- Reto 10: Transformar objeto a array de strings ---
// Usa destructuración y Object.entries para transformar el objeto recibido
// en un array de strings con formato "clave: valor".
// Ejemplo: { a: 1, b: 2 } → ["a: 1", "b: 2"]
function objetoAStringArray(objeto) {
  // Tu código aquí
  // Tip: Usa Object.entries() y map()
  const entradas = Object.entries(objeto);
  entradas.map()
  
  return entradas
}

console.log(objetoAStringArray({nombre: "Ana", edad: 28, email: "ana@example.com", direccion: {barrio: 'Belen Miravalle', ciudad: 'Medellin'}, profesion: 'Licenciada'}));

module.exports = {
  extraerDatosBasicos,
  extraerNotaRenombrada,
  extraerCiudadAnidada,
  copiarProducto,
  combinarObjetos,
  agregarPropiedadesUsuario,
  obtenerClaves,
  obtenerValores,
  obtenerEntradas,
  objetoAStringArray,
};
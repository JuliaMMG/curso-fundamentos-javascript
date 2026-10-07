// Async

console.log('1. Inicio');

setTimeout(() => {
    console.log('2. Timeout Ejecutado')
}, 3000);

console.log('3. Fin');

// Callbacks

// Es una función que se pasa como argumento a otra función y se ejecuta cuando se completa cierta operación

function obtenerDatos(callback) {
    setTimeout(() => {
        callback('Datos Obtenidos');
    }, 2000)
};

obtenerDatos((resultado) => {
    console.log(resultado);
});

// Callback hell

function obtenerUsuario(cb) {
  setTimeout(() => cb({ id: 1, nombre: 'Ada' }), 300);
}

function obtenerNotas(userId, cb) {
  setTimeout(() => cb(['nota 1', 'nota 2']), 300);
}

function procesarNotas(notas, cb) {
  setTimeout(() => cb(notas.map((n) => n.toUpperCase())), 300);
}

obtenerUsuario((usuario) => {
  obtenerNotas(usuario.id, (notas) => {
    procesarNotas(notas, (resultado) => {
      console.log('Usuario:', usuario.nombre);
      console.log('Resultado:', resultado);
    });
  });
});

// Promise

// Representa un valor que puede estar disponible ahora, en el futuro o nunca.
// Va a tener diferentes estados como pendiente, cumplida o rechazada.
// Permite trabajar y estructurar mejor solicitudes diferidas en el tiempo.

const promesa = new Promise((resolve, reject) => {
  const exito = true;

  setTimeout(() => {
    if (exito) {
      resolve('Operación exitosa!');
    } else {
      reject(new Error('Algo salió mal'));
    }
  }, 1000);
});

promesa.then((mensaje) => console.log(mensaje)).catch((error) => console.error(error.message));

// Promise

function esperar(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function obtenerUsuario() {
  return esperar(200).then(() => ({ id: 1, nombre: 'Ada' }));
}

function obtenerNotas(userId) {
  return esperar(200).then(() => ['nota 1', 'nota 2']);
}

function procesarNotas(notas) {
  return esperar(200).then(() => notas.map((n) => n.toUpperCase()));
}

obtenerUsuario()
  .then((usuario) => obtenerNotas(usuario.id))
  .then((notas) => procesarNotas(notas))
  .then((resultado) => console.log('Resultado:', resultado))
  .catch((error) => console.error('Error en algún paso:', error.message));

// Async/await

// async function obtenerUsuario() {
//   await esperar(200);
//   return {...}
// }

function esperar(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function obtenerUsuario() {
  await esperar(200);
  return { id: 1, nombre: 'Ada' };
}

async function obtenerNotas(userId) {
  await esperar(200);
  return ['nota 1', 'nota 2'];
}

async function procesarNotas(notas) {
  await esperar(200);
  return notas.map((n) => n.toUpperCase());
}

async function cargarDatos() {
  try {
    const usuario = await obtenerUsuario();
    const notas = await obtenerNotas(usuario.id);
    const resultado = await procesarNotas(notas);
    console.log('Usuario:', usuario.nombre);
    console.log('Resultado:', resultado);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

cargarDatos();
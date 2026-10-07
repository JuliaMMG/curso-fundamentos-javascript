// Reto 27: Asincronía en JavaScript - callbacks y promesas

/**
 * Ejercicio 1: setTimeout básico
 * Usa setTimeout para mostrar un mensaje después de 2 segundos
 * Debe retornar "mensaje retrasado" después del tiempo especificado
 */
function mensajeRetrasado(callback) {
  // Tu código aquí
  setTimeout(() => {
    callback('mensaje retrasado');
  }, (2000));
}

mensajeRetrasado((mensaje) => {
    console.log(mensaje);
});
    
/**
 * Ejercicio 2: Callback simple
 * Simula obtener datos de una API usando un callback
 * Después de 1.5 segundos, llama al callback con el string "datos recibidos"
 */
function obtenerDatos(callback) {
  // Tu código aquí
  setTimeout(() => {
    callback('Datos recibidos');
  }, 1500);
}

obtenerDatos((data) => {
    console.log(data);
})

/**
 * Ejercicio 3: Callback con error
 * Simula una operación que puede fallar
 * Si el parámetro exito es true, llama al callback con "operación exitosa"
 * Si es false, llama al callback con null y el error "falló la operación"
 */
function operacionConError(exito, callback) {
  // Tu código aquí
  setTimeout(() => {
    if (exito === false) {
        callback(null, "falló la operación");
    } else {
        callback("Operación exitosa", "No hay errores");
    }
  }, 1000);
}


operacionConError(true, (resultado, error) => {
    console.log(resultado);
    console.log(error);
});

/**
 * Ejercicio 4: Callback hell simple
 * Encadena 3 operaciones con callbacks:
 * 1. obtenerUsuario → callback con {id: 1, nombre: "Ana"}
 * 2. obtenerNotasPorUsuario → callback con ["nota1", "nota2"]
 * 3. procesarNotas → callback con "NOTAS PROCESADAS"
 */
function obtenerInfoCompleta(callback) {
  // Tu código aquí

  function obtenerUsuario(cb) {
    setTimeout(() => cb({id: 1, nombre: "Ana"}), 1000);
  }

  function obtenerNotasPorUsuario(usuario, cb) {
    setTimeout(() => cb(["nota1", "nota2"]), 1000)
  }

  function procesarNotas(cb) {
    setTimeout(() => cb(("NOTAS PROCESADAS")), 1000);
  }

obtenerUsuario((usuario) => {

    obtenerNotasPorUsuario(usuario, (notas) => {

        procesarNotas((resultado) => {

        //console.log('Usuario:', usuario.nombre);
        //console.log('Resultado:', resultado);
        callback(resultado);

        });

    });

    });
}


obtenerInfoCompleta((resultado) => {
  console.log(resultado);
});


/**
 * Ejercicio 5: Promesa básica
 * Crea una promesa que se resuelve después de 1 segundo con "promesa cumplida"
 */
function promesaBasica() {
  // Tu código aquí
  const promesa = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Promesa cumplida");
        }, 1000)
  });
  return promesa;
}

promesaBasica().then((resultado) => {
  console.log(resultado);
});

/**
 * Ejercicio 6: Promesa con reject
 * Crea una promesa que se resuelve o rechaza según el parámetro exito
 * Si exito es true, resuelve con "éxito"
 * Si es false, rechaza con new Error("error en la operación")
 */
function promesaConError(exito) {
  // Tu código aquí
  const promesa = new Promise((resolve, reject) => {
    if (exito === true) {
        resolve("exito");
    } else {
        reject(new Error("error en la operación"));
    }
  })
  return promesa;
};

const resultado = promesaConError(false);
console.log(resultado);

/**
 * Ejercicio 7: Encadenar promesas
 * Usa then para encadenar dos operaciones:
 * Primera promesa resuelve con un número, segunda promesa duplica ese número
 */
function encadenarPromesas() {
  // Tu código aquí
  const valor = true;

  const promesa1 = new Promise((resolve, reject) => {
    if (valor === true) {
        resolve(10); 
    } else {
        reject("No resuelta");
    }
  });
  const promesa2 = promesa1.then((numero) => {
    return(numero*2);
  })
  return promesa2;
}

encadenarPromesas().then((resultado) => {
  console.log(resultado);
});

/**
 * Ejercicio 8: Promesa con setTimeout
 * Combina promesa con setTimeout para simular una llamada a API
 * Después de 2 segundos resuelve con {data: "respuesta api"}
 */
function simularApiCall() {
  // Tu código aquí
  const promesa = new Promise((resolve) => {
    setTimeout(() => {
        resolve({data: "respuesta api"});
    }, 2000)
  })
  return promesa;
}

simularApiCall().then((resultado) => {
  console.log(resultado);
});

/**
 * Ejercicio 9: Múltiples promesas
 * Usa Promise.all para ejecutar 3 promesas en paralelo
 * Cada promesa resuelve con un string diferente
 */
function multiplesPromesas() {
  // Tu código aquí
  const valor = true;
  const promesa1 = new Promise ((resolve, reject) => {
    if (valor === true) {
        resolve("Promesa 1 resuelta");
    } else {
        reject (new Error ("No se cumple promesa 1"))
    }
  })
  const promesa2 = new Promise ((resolve, reject) => {
    if (valor === true) {
        resolve("Promesa 2: Muy bien");
    } else {
        reject (new Error ("No se cumple promesa 2"))
    }
  })
  const promesa3 = new Promise ((resolve, reject) => {
    if (valor === false) {
        resolve("Promesa 3: Sigue asi");
    } else {
        reject (new Error ("No se cumple promesa 3"))
    }
  })
  return (Promise.all([promesa1,promesa2,promesa3]));
}

multiplesPromesas().then((resultados) => {
  console.log(resultados);
});

/**
 * Ejercicio 10: Convertir callback a promesa
 * Convierte una función que usa callback a una que retorna una promesa
 */
function callbackAPromesa(valor, callback) {
  setTimeout(() => {
    callback(valor * 2);
  }, 500);
}

function convertirCallbackAPromesa(valor) {
  // Tu código aquí - usa callbackAPromesa pero retorna una promesa
   const promesa = new Promise((resolve) => {
    callbackAPromesa(valor, (resultado) => {
        resolve(resultado)
    });
   });
   return promesa; 
}

convertirCallbackAPromesa(10)
  .then((resultado) => {
    console.log(resultado);
  });

module.exports = {
  mensajeRetrasado,
  obtenerDatos,
  operacionConError,
  obtenerInfoCompleta,
  promesaBasica,
  promesaConError,
  encadenarPromesas,
  simularApiCall,
  multiplesPromesas,
  convertirCallbackAPromesa
};
// ============================================
// Reto 15 — Closures en JavaScript (Estado Privado)
// ============================================
// En estos ejercicios practicarás closures en JavaScript.
// Un closure permite que una función recuerde variables
// definidas dentro de ella incluso después de ejecutarse.
// La idea es crear variables privadas que solo puedan
// modificarse mediante métodos.

const { useReducer } = require("react");

// Ejecuta los tests con:
// npx vitest src/15-closures-javascript
// ============================================



// ============================================
// Nivel 1 — Básico
// ============================================


// --- Reto 1: Contador Privado ---
// Dentro de la función declara una variable privada:
// let contador = 0;
// La función debe retornar un objeto con los métodos:
// incrementar()
// - aumenta el contador en 1
// - retorna el nuevo valor
// decrementar()
// - resta 1 al contador
// - retorna el nuevo valor
// obtenerValor()
// - retorna el valor actual del contador
// Pista:
// Las funciones deben poder acceder a la variable contador
// gracias al closure.

function crearContador() {
  // tu codigo aquí
  let contador = 0;
  return {
    incrementar() {
      contador ++;
      return `Nuevo valor del contador: ${contador}`
    },
    decrementar() {
      contador --;
      return `Nuevo valor del contador: ${contador}`
    },
    obtenerValor() {
      return `Valor del contador: ${contador}`
    }
  }
}

const miContador = crearContador(); // 0
console.log(miContador.incrementar()); // 1
console.log(miContador.incrementar()); // 2
console.log(miContador.incrementar()); // 3
console.log(miContador.decrementar()); // 2
console.log(miContador.obtenerValor()); // 2


// --- Reto 2: Acumulador ---
// Declara una variable privada:
// let total = 0;
// Retorna un objeto con:
// sumar(valor)
// - suma valor al total
// - retorna el nuevo total
// total()
// - retorna el valor acumulado
// Ejemplo:
// const acumulador = crearAcumulador()
// acumulador.total()   // 0
// acumulador.sumar(10) // 10
// acumulador.sumar(5)  // 15
function crearAcumulador() {
  // tu codigo aquí
  let acumulado = 0;
  return {
    sumar(valor) {
      acumulado = acumulado + valor;
      return `El valor acumulado después de la suma es: ${acumulado}`
    },
    total() {
      return `El valor acumulado es: ${acumulado}`
    }
  }
}

const miAcumulado = crearAcumulador(); //0
console.log(miAcumulado.sumar(30)); // 30
console.log(miAcumulado.sumar(30)); // 60
console.log(miAcumulado.total()); // 60

// ============================================
// Nivel 2 — Intermedio
// ============================================

// --- Reto 3: Cuenta Bancaria ---
// Declara una variable privada:
// let saldo = saldoInicial;
// Retorna un objeto con los métodos:
// depositar(cantidad)
// - suma la cantidad al saldo
// - retorna:
//   "Depositado $cantidad. Saldo actual: $saldo."
// retirar(cantidad)
// - si la cantidad es mayor al saldo retorna:
//   "Fondos insuficientes."
// - si hay fondos suficientes:
//   resta la cantidad y retorna:
//   "Retirado $cantidad. Saldo actual: $saldo."
// consultarSaldo()
// - retorna:
//   "Saldo: $saldo."

function crearCuentaBancaria(saldoInicial) {
  // tu codigo aquí
  let saldo = saldoInicial;
  return {
    depositar(cantidad) {
      saldo = saldo + cantidad; 
      return `Depositado: $${cantidad}. Saldo actual: $${saldo}.`
    },
    retirar(cantidad) {
      if (cantidad > saldo) {
        return `Fondos insuficientes para el retiro. Su saldo es: $${saldo}`
      } else 
          saldo = saldo - cantidad;
          return `Retirado $${cantidad}. Saldo actual: $${saldo}.`
    },
    consultar() {
      return `Su saldo actual es: $${saldo}.`
    }
  }
}

const miCuenta = crearCuentaBancaria(1000000); // 1000000
console.log(miCuenta.depositar(300000)); // 1300000
console.log(miCuenta.retirar(150000)); // 1150000
console.log(miCuenta.consultar()); // 1150000

// --- Reto 4: Cache Simple ---
// Declara un objeto privado:
// let datos = {};
// Retorna un objeto con:
// guardar(clave, valor)
// - guarda el valor usando:
//   datos[clave] = valor
// - retorna:
//   "Valor guardado en clave: clave"
// obtener(clave)
// - retorna el valor asociado a la clave
// existe(clave)
// - retorna true o false dependiendo si la clave existe
// - Pista: usa - in - 
// limpiar()
// - elimina todos los datos del cache
function crearCache() {
  // tu codigo aquí
  let datos = {};
  return {
    guardar(clave, valor) {
      datos[clave] = valor;
      return `Valor guardado en ${clave}: ${valor}.`
    },
    obtener(clave) {
      return `El valor asociado a la clave ${clave} es: ${datos[clave]}.`
    },
    mostrar() {
      console.log(datos);
    },
    existe(clave) {
      return clave in datos
    },
    limpiar() {
      datos = {};
      console.log("Los datos fueron eliminados.")
      return datos
    }
  }
}

const misDatos = crearCache();
console.log(misDatos.guardar("nombre", "Juliana"));
console.log(misDatos.guardar("edad", 32));
console.log(misDatos.guardar("profesión", "Ingeniera Forestal"));
console.log(misDatos.guardar("mascotas", "Bruno"));
console.log(misDatos.existe("edad"));
console.log(misDatos.obtener("profesión"));
console.log(misDatos.mostrar());
console.log(misDatos.limpiar());
console.log(misDatos.mostrar());

// ============================================
// Nivel 3 — Intermedio / Avanzado
// ============================================


// --- Reto 5: Carrito de Compras ---
// Declara un arreglo privado:
// let productos = [];
// Cada producto debe guardarse como un objeto:
// { producto, precio }
// Retorna un objeto con:
// agregar(producto, precio)
// - agrega el producto al carrito
// - retorna:
//   "Producto X agregado al carrito."
// remover(producto)
// - elimina el producto del carrito
// - pista: usa filter()
// - retorna:
//   "Producto X removido del carrito."
// total()
// - calcula y retorna el total de todos los precios
// - pista:usa  reduce()
// vaciar()
// - elimina todos los productos
// - retorna:
//   "Carrito vaciado."
function crearCarrito() {
  // tu codigo aquí

  let productos = [];

  return {
    agregar ( producto, precio) {
      productos.push({producto, precio});
      console.log(productos);
      return `Producto ${producto} agregado al carrito.`
    }, 
    remover (producto) {
      productos = productos.filter(item => item.producto != producto)
      console.log(productos)
      return `Producto ${producto} retirado del carrito.`
    },
    total () {
      const valorcarrito = productos.reduce((suma, item) => {
          return suma + item.precio;
      },0);
      return `El valor de su carrito es: ${valorcarrito}.` 
    },
    vaciar () {
      productos = [];
      console.log(productos);
      return "Carrito vacío"
    }
  }
}

const carrito = crearCarrito();
console.log(carrito.agregar("papel", 20));
console.log(carrito.agregar("piedra", 5));
console.log(carrito.agregar("tijera", 20));
console.log(carrito.remover("tijera", 20));
console.log(carrito.total());

// ============================================
// Nivel 4 — Avanzado
// ============================================


// --- Reto 6: Temporizador con Estado ---
// Declara variables privadas:
// let segundos = 0
// let intervalo = null
// let corriendo = false
// Retorna un objeto con:
// iniciar()
//   si el temporizador no está corriendo:
// - usa setInterval para incrementar segundos
// detener()
//   si el temporizador está corriendo:
// - detiene el temporizador usando clearInterval()
// reiniciar()
// - reinicia segundos a 0
// - retorna: 'Temporizador reiniciado.';
// obtenerTiempo()
// - retorna los segundos actuales
function crearTemporizador() {
  // tu codigo aquí
  let segundos = 0;
  let intervalo = null;
  let corriendo = false;
  return {
    iniciar() {
      if (corriendo === false) {
        intervalo = setInterval(() => {
          segundos += 1;
          console.log(`Intervalo cada ${segundos} segundos.`);
        }, (1000));
        corriendo = true;
      } 
      return "Intervalo iniciado."
    },
    detener() {
      if (corriendo === true) {
        clearInterval(intervalo);
        console.log("El intervalo ha sido detenido.")
      }
      corriendo = false;
    },
    reiniciar() {
      segundos = 0;
      return "Temporizador reiniciado."
    },
    obtenerTiempo() {
      return segundos;
    }
  }
}

const miTempo = crearTemporizador();
console.log(miTempo.iniciar());
console.log(miTempo.detener());
console.log(miTempo.reiniciar());
console.log(miTempo.detener());

// ============================================
// Nivel 5 — Avanzado
// ============================================


// --- Reto 7: Gestor de Tareas ---
// Declara variables privadas:
// let tareas = []
// let idCounter = 1
// Cada tarea debe tener esta estructura:
// {
//   id,
//   tarea,
//   completada
// }
// Retorna un objeto con:
// agregarTarea(tarea)
// - crea una nueva tarea
// - completada inicia en false
// - el ID se incrementa automáticamente
//  retorna: `Tarea "${}" agregada con ID ${}.`
// completarTarea(id)
// - busca la tarea por ID
// - pista: usa .find()
// - cambia completada a true
// obtenerTareas()
// - retorna todas las tareas
// tareasPendientes()
// - retorna solo las tareas no completadas
//  pista: usa .filter()

function crearGestorTareas() {
  // tu codigo aquí
  let tareas = [];
  let idCounter = 1;
  return {
    agregarTarea(tarea) {
      tareas.push({idCounter, tarea, completada: false});
      console.log(`Tarea ${idCounter} agregada con exito.`);
      idCounter ++;
      return tareas;
    },
    completarTarea(id) {
      let tareacompleta = tareas.find(accion => accion.idCounter === id) 
      tareacompleta.completada = true;
      console.log(tareas);
      return `Tarea ${id} completada con exito: ${tareacompleta.tarea} listo!`;
    },
    obtenerTareas() {
      return tareas;
    },
    tareaspendientes() {
      let pendientes = tareas.filter(accion => accion.completada === false)
      return pendientes
    }
  }
}

const miTarea = crearGestorTareas();
console.log(miTarea.agregarTarea("barrer"));
console.log(miTarea.agregarTarea("trapear"));
console.log(miTarea.agregarTarea("desayuno"));
console.log(miTarea.agregarTarea("almuerzo"));
console.log(miTarea.completarTarea(3));
console.log(miTarea.obtenerTareas());
console.log(miTarea.tareaspendientes());

// ============================================
// Nivel 6 — Desafío Final
// ============================================


// --- Reto 8: Banco con Múltiples Cuentas ---
// Declara variables privadas:
// let cuentas = {}
// let idCounter = 1
// Cada cuenta debe crearse usando:
// crearCuentaBancaria()
// Métodos:
// crearCuenta(saldoInicial)
// - crea una nueva cuenta bancaria
// - la guarda en el objeto cuentas
// - incrementa el ID automáticamente
// obtenerCuenta(id)
// - retorna la cuenta con ese ID
// - si no existe retorna null
// eliminarCuenta(id)
// - elimina la cuenta
// - retorna:
//   "Cuenta ${id} eliminada."
function crearBanco() {
  // tu codigo aquí
  let cuentas = {}
  let idCounter = 1
  return {
    crearCuentaBancaria() {
      return {
        crearCuenta(saldoInicial) {
          cuentas[idCounter] = saldoInicial
          console.log(`Cuenta ${idCounter} creada con exito. Saldo inicial $${saldoInicial}.`)
          idCounter ++;
          return cuentas
        },
        obtenerCuenta(id) {
        console.log(cuentas[idCounter] === id );
        }
      }
    }
  }

}

const banco = crearBanco().crearCuentaBancaria();
console.log(banco.crearCuenta(800000));
console.log(banco.obtenerCuenta(1));

module.exports = {
  crearContador,
  crearAcumulador,
  crearCuentaBancaria,
  crearCache,
  crearCarrito,
  crearTemporizador,
  crearGestorTareas,
  crearBanco,
};
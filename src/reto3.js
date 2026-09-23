// ============================================
// Reto: Operadores aritméticos en JavaScript
// ============================================
// Completa cada función según las instrucciones.
// Ejecuta los tests con: npx vitest src/03-operadores-aritmeticos
// ============================================

// --- Reto 1: Suma ---
// Recibe dos números "a" y "b".
// Retorna el resultado de sumarlos con el operador +.
function calcularSuma(a, b) {
  // Tu código aquí
  return a + b;
}

console.log(calcularSuma(20,30));

// --- Reto 2: Resta ---
// Recibe dos números "a" y "b".
// Retorna el resultado de restar b a a con el operador -.
function calcularResta(a, b) {
  // Tu código aquí
  return a - b;
}

console.log(calcularResta(30,20));

// --- Reto 3: Multiplicación ---
// Recibe dos números "a" y "b".
// Retorna el resultado de multiplicarlos con el operador *.
function calcularMultiplicacion(a, b) {
  // Tu código aquí
  return a * b;
}

console.log(calcularMultiplicacion(5,3));

// --- Reto 4: División ---
// Recibe dos números "a" y "b".
// Retorna el resultado de dividir a entre b con el operador /.
function calcularDivision(a, b) {
  // Tu código aquí
  return a / b;
}

console.log(calcularDivision(50,10));

// --- Reto 5: Módulo ---
// Recibe dos números "a" y "b".
// Retorna el residuo de la división de a entre b con el operador %.
function calcularModulo(a, b) {
  // Tu código aquí
  return a % b;
}

console.log(calcularModulo(7,2));

// --- Reto 6: Exponenciación ---
// Recibe "base" y "exponente" (números).
// Retorna base elevado a exponente con el operador **.
function calcularPotencia(base, exponente) {
  // Tu código aquí
  return base ** exponente;
}

console.log(calcularPotencia(2,3));

// --- Reto 7: Operador de asignación += ---
// Recibe "valor" e "incremento" (números).
// Usa una variable con let, aplica += (valor += incremento) y retorna el valor resultante.
function aplicarAsignacionSuma(valor, incremento) {
  // Tu código aquí
  let a = valor;
  a += incremento;
  return a;
}

console.log(aplicarAsignacionSuma(20,366));

// --- Reto 8: Operador de asignación -= ---
// Recibe "valor" y "decremento" (números).
// Usa una variable con let, aplica -= y retorna el valor resultante.
function aplicarAsignacionResta(valor, decremento) {
  // Tu código aquí
  let a = valor;
  a -= decremento;
  return a;
}

console.log(aplicarAsignacionResta(50,6));

// --- Reto 9: Operador de asignación *= ---
// Recibe "valor" y "factor" (números).
// Usa una variable con let, aplica *= y retorna el valor resultante.
function aplicarAsignacionMultiplicacion(valor, factor) {
  // Tu código aquí
  let a = valor;
  a *= factor;
  return a;
}

console.log(aplicarAsignacionMultiplicacion(6,10));

// --- Reto 10: Operador de asignación /= ---
// Recibe "valor" y "divisor" (números).
// Usa una variable con let, aplica /= y retorna el valor resultante.
function aplicarAsignacionDivision(valor, divisor) {
  // Tu código aquí
  let a = valor;
  a /= divisor;
  return a;
}

console.log(aplicarAsignacionDivision(20,5));

// --- Reto 11: Incrementar en uno ---
// Recibe un número "contador".
// Retorna el valor de contador incrementado en 1 (equivalente a usar ++).
function incrementarEnUno(contador) {
  // Tu código aquí
  let a = contador;
  a ++; 
  return a;
}

console.log(incrementarEnUno(20));

// --- Reto 12: Decrementar en uno ---
// Recibe un número "contador".
// Retorna el valor de contador decrementado en 1 (equivalente a usar --).
function decrementarEnUno(contador) {
  // Tu código aquí
  let a = contador;
  a --;
  return a;
}

console.log(decrementarEnUno(12));

// --- Reto 13: División por cero (Infinity / -Infinity) ---
// Recibe un booleano "positivo".
// Si positivo es true, retorna el resultado de dividir 1 entre 0 (Infinity).
// Si positivo es false, retorna el resultado de dividir -1 entre 0 (-Infinity).
function resultadoDivisionPorCero(positivo) {
  // Tu código aquí
  let a = positivo;
  if (a == true) {
    return 1/0
  }
  else {
    return -1/0;
    }
}

console.log(resultadoDivisionPorCero(false));

// --- Reto 14: Obtener NaN ---
// Retorna el resultado de una operación que produzca NaN en JavaScript.
// Por ejemplo: 0/0 o multiplicar un string por un número.
function obtenerNaN() {
  // Tu código aquí
  let a = "Hola";
  return a*3;
}

console.log(obtenerNaN());

// --- Reto 15: Detectar NaN ---
// Recibe un valor cualquiera.
// Retorna true si el valor es NaN, false en caso contrario.
// Pista: usa Number.isNaN(valor).
function esValorNaN(valor) {
  // Tu código aquí
  return Number.isNaN(valor);
}

console.log(esValorNaN("Chao"));

module.exports = {
  calcularSuma,
  calcularResta,
  calcularMultiplicacion,
  calcularDivision,
  calcularModulo,
  calcularPotencia,
  aplicarAsignacionSuma,
  aplicarAsignacionResta,
  aplicarAsignacionMultiplicacion,
  aplicarAsignacionDivision,
  incrementarEnUno,
  decrementarEnUno,
  resultadoDivisionPorCero,
  obtenerNaN,
  esValorNaN,
};
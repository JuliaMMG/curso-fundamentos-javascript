// ============================================
// Reto: Coerción de tipos en JavaScript
// ============================================
// Practica coerción implícita (+, - con string/número, booleanos)
// y conversión explícita con Number, parseInt, parseFloat, String y Boolean.
// Ejecuta los tests con: npx vitest src/06-coercion-tipos
// ============================================

// --- Reto 1: Coerción implícita con el operador + ---
// Recibe "str" (string, ej: '5') y "num" (número, ej: 3).
// Retorna el resultado de str + num (JavaScript concatena, no suma).
// Ejemplo: '5' + 3 → '53'
function resultadoConcatenacionMas(str, num) {
  // Tu código aquí
  return str + num
}

console.log(resultadoConcatenacionMas("Hola", 5));

// --- Reto 2: Coerción implícita con el operador - ---
// Recibe "str" (string que representa un número, ej: '5') y "num" (número, ej: 3).
// Retorna el resultado de str - num (JavaScript convierte el string a número).
// Ejemplo: '5' - 3 → 2
function resultadoRestaConString(str, num) {
  // Tu código aquí
  return str - num
}

console.log(resultadoRestaConString("20", 5));

// --- Reto 3: Booleano en operación numérica ---
// Recibe "bool" (booleano: true o false).
// Retorna el resultado de bool + 1 (JavaScript convierte el booleano a número).
// Ejemplo: true + 1 → 2, false + 1 → 1
function booleanoMasUno(bool) {
  // Tu código aquí
  return bool + 1
}

console.log(booleanoMasUno(true));
console.log(booleanoMasUno(false));

// --- Reto 4: Conversión explícita de string a número ---
// Recibe "str" (string que representa un número, ej: '42').
// Retorna el número usando Number(str). Ejemplo: Number('42') → 42
function convertirStringANumero(str) {
  // Tu código aquí
  return Number(str)
}

console.log(convertirStringANumero("56"));

// --- Reto 5: Parsear entero y decimal ---
// Recibe "strEntero" (ej: '42') y "strDecimal" (ej: '3.1415').
// Retorna un objeto { entero, decimal } donde:
//   entero = parseInt(strEntero, 10)
//   decimal = parseFloat(strDecimal)
function parsearEnteroYDecimal(strEntero, strDecimal) {
  // Tu código aquí
  const entero = parseInt(strEntero, 10);
  const decimal = parseFloat(strDecimal);
  return {entero, decimal}
}

console.log(parsearEnteroYDecimal("28","387.579"));

// --- Reto 6: Conversión explícita de número a string ---
// Recibe "num" (número, ej: 123).
// Retorna el string usando String(num). Ejemplo: String(123) → '123'
function convertirNumeroAString(num) {
  // Tu código aquí
  return String(num)
}

console.log(convertirNumeroAString(25));

// --- Reto 7: Conversión explícita a booleano ---
// Recibe "val" (cualquier valor: número, string, etc.).
// Retorna el booleano usando Boolean(val). Ejemplo: Boolean(1) → true, Boolean(0) → false
function convertirABooleano(val) {
  // Tu código aquí
  return Boolean(val)
}

console.log(convertirABooleano("Fernando"));
console.log(convertirABooleano(0));

module.exports = {
  resultadoConcatenacionMas,
  resultadoRestaConString,
  booleanoMasUno,
  convertirStringANumero,
  parsearEnteroYDecimal,
  convertirNumeroAString,
  convertirABooleano,
};
// ============================================
// Reto: Tipos de datos en JavaScript
// ============================================
// Completa cada función según las instrucciones.
// Ejecuta los tests con: npx vitest src/02-tipos-de-datos
// ============================================

// --- Reto 1: Identificar tipos primitivos ---
// Declara las siguientes constantes con los valores indicados:
//   texto = "hola"
//   numero = 42
//   booleano = true
//   nulo = null
//   indefinido = undefined
//   simbolo = Symbol("id")
//   grande = 123n
// Retorna un objeto con el typeof de cada una:
//   { texto, numero, booleano, nulo, indefinido, simbolo, grande }
// donde cada valor es el resultado de typeof sobre la variable.
function identificarPrimitivos() {
  // Tu código aquí
  const texto = "hola";
  const numero = 42;
  const booleano = true;
  const nulo = null;
  const indefinido = undefined;
  const simbolo = Symbol("id");
  const grande = 123n;

  return {
    tipotexto: typeof texto,
    tiponumero: typeof numero,
    tipobooleano: typeof booleano,
    tiponulo: typeof nulo,
    tipoindefinido: typeof indefinido,
    tiposimbolo: typeof simbolo,
    tipogrande: typeof grande
  }
}

//console.log(identificarPrimitivos());

// --- Reto 2: Diferenciar string y number ---
// Recibe un parámetro "valor".
// Retorna un objeto con:
//   { tipo: typeof valor, esString: true/false, esNumber: true/false }
function diferenciarStringNumber(valor) {
  // Tu código aquí
    valor = 10;

  return {
    tipo: typeof valor,
    esString: typeof valor == String,
    esNumber: typeof valor == Number
  }
}

console.log(diferenciarStringNumber());

// --- Reto 3: El caso especial de null ---
// Declara una constante "nulo" con valor null.
// Retorna un objeto con:
//   { valor: nulo, tipo: typeof nulo, esNull: true/false }
// Pista: typeof null devuelve "object", pero debes verificar
// si realmente es null usando una comparación estricta (===).
function explorarNull() {
  // Tu código aquí
  const nulo = null;

  return {
    valor: nulo,
    tipo: typeof nulo,
    esNull: typeof nulo == null
  }
}
console.log(explorarNull());

// --- Reto 4: Undefined vs Null ---
// Declara una variable con let llamada "sinAsignar" (sin asignarle valor).
// Declara una constante "vacio" con valor null.
// Retorna un objeto con:
//   { sinAsignar, vacio, tipoSinAsignar: typeof sinAsignar, tipoVacio: typeof vacio, sonIguales: sinAsignar == vacio, sonEstrictamenteIguales: sinAsignar === vacio }
function compararNullUndefined() {
  // Tu código aquí
  let sinAsignar;
  const vacio = null;

  return {
    sinAsignar,
    vacio,
    tiposinAsignar: typeof sinAsignar,
    tipovacio: typeof vacio,
    sonIguales: sinAsignar == vacio,
    sonEstrictamenteIguales: sinAsignar === vacio,
  }
}

console.log(compararNullUndefined());

// --- Reto 5: Symbol y BigInt ---
// Crea un Symbol con la descripción "miID".
// Crea un BigInt con el valor 9007199254740991n.
// Retorna un objeto con:
//   { tipoSymbol: typeof del symbol, tipoBigInt: typeof del bigint, descripcionSymbol: symbol.description, valorBigInt: el bigint creado }
function crearSymbolYBigInt() {
  // Tu código aquí
  const simbolo1 = Symbol("miID");
  const BigInt = 9007199254740991n;

  return {
    tipoSymbol: typeof simbolo1,
    tipoBigInt: typeof BigInt,
    descripcionSymbol: simbolo1.description,
    valorBigInt: BigInt
  }
}

console.log(crearSymbolYBigInt());

// --- Reto 6: Crear un objeto ---
// Crea un objeto "persona" con las propiedades:
//   nombre (string): "Juan"
//   edad (number): 42
//   activo (boolean): true
// Retorna un objeto con:
//   { persona, tipoPersona: typeof persona, propiedades: Object.keys(persona) }
function crearObjeto() {
  // Tu código aquí
  const persona = { nombre: "Juan", edad: 42, activo: true };

  return { 
    persona,
    tipoPersona: typeof persona,
    propiedades: Object.keys(persona)
  }
}

console.log(crearObjeto());

// --- Reto 7: Trabajar con arrays ---
// Crea un arreglo "mezcla" con los valores: 1, "dos", true, null
// Retorna un objeto con:
//   { arreglo: mezcla, esArreglo: Array.isArray(mezcla), largo: mezcla.length, tipos: [typeof de cada elemento] }
function trabajarConArreglos() {
  // Tu código aquí
  const mezcla = [1, "dos", true, null];

  return {
    arreglo: mezcla,
    esArreglo: Array.isArray(mezcla),
    largo: mezcla.length,
    tipos: [typeof mezcla[1], typeof mezcla[2], typeof mezcla[3]]
  }
}

console.log(trabajarConArreglos());

// --- Reto 8: Funciones como valor ---
// Crea una constante "saludar" que sea una función que reciba un nombre
// y retorne "Hola, {nombre}!".
// Retorna un objeto con:
//   { tipoFuncion: typeof saludar, resultado: saludar("JavaScript") }
function funcionComoValor() {
  // Tu código aquí
  const saludar = function (nombre) {
    return `Hola, ${nombre}!`;}

    return {
        tipoFuncion: typeof saludar,
        resultado: saludar("JavaScript"),
    }
}

console.log(funcionComoValor());

// --- Reto 9: Clasificar tipo de dato ---
// Recibe un parámetro "valor".
// Determina si es primitivo o complejo y retorna un objeto con:
//   { valor, tipo: typeof valor, clasificacion: "primitivo" | "complejo" }
// Reglas:
//   - Si es null, clasificación es "primitivo" (a pesar de typeof).
//   - Si typeof es "object" o "function", clasificación es "complejo".
//   - En cualquier otro caso, clasificación es "primitivo".
// Pista: primero verifica si es null, luego revisa typeof.
function clasificarTipo(valor) {
  // Tu código aquí
  let clasificacion;

    if (valor == null) {
        clasificacion = "Primitivo"
    }
    else if (typeof valor == "object" || typeof valor == "function") {
        clasificacion = "Complejo"
    }
    else {
        clasificacion = "Primitivo"
    };


  return {
    valor,
    tipo: typeof valor,
    clasificacion: clasificacion,
    }
}

console.log(clasificarTipo(null));

module.exports = {
  identificarPrimitivos,
  diferenciarStringNumber,
  explorarNull,
  compararNullUndefined,
  crearSymbolYBigInt,
  crearObjeto,
  trabajarConArreglos,
  funcionComoValor,
  clasificarTipo,
};
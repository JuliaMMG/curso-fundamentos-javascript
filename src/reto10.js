// ============================================
// Reto: Switch en JavaScript
// ============================================
// Practica la estructura switch: case, break, default y agrupación de casos
// para comparar una misma expresión con varias opciones.
// Ejecuta los tests con: npx vitest src/10-switch
// ============================================

// --- Reto 1: Día laboral o fin de semana ---
// Recibe "dia" (string en minúsculas: "lunes", "martes", ..., "domingo").
// Retorna "día laboral" para lunes a viernes, "fin de semana" para sábado y domingo,
// "día no válido" para cualquier otro valor.
// Usa switch agrupando los casos que comparten la misma acción (sin repetir código).

function tipoDeDia(dia) {
  // Tu código aquí
  switch (dia) {
    case "lunes":
    case "martes":
    case "miercoles":
    case "jueves":
    case "viernes":
        console.log("día laboral");
        break
    case "sábado":
    case "domingo":
        console.log("fin de semana");
        break
    default:
        console.log("dia no válido")
    }
}

tipoDeDia("mayo");

// --- Reto 2: Mensaje según opción ---
// Recibe "opcion" (string: "a", "b" o "c").
// Retorna "Opción A" si opcion === "a", "Opción B" si "b", "Opción C" si "c".
// Si no coincide con ninguno, retorna "opción no válida" (usa default).
// Usa switch con break en cada case para que no se ejecute el siguiente.
function mensajeOpcion(opcion) {
  // Tu código aquí
  switch (opcion) {
    case "a":
        console.log("Opción A");
        break
    case "b":
        console.log("Opción B");
        break
    case "c":
        console.log("Opción C");
        break
    default:
        console.log("Opción no válida");
  }
}

mensajeOpcion("z");

// --- Reto 3: Categoría por código ---
// Recibe "codigo" (string: "E1", "E2", "H1").
// Retorna "electrónica" para "E1" y "E2" (agrupa ambos case en un mismo resultado).
// Retorna "hogar" para "H1".
// Retorna "desconocido" para cualquier otro (default).
// Practica agrupar varios case que comparten la misma acción.
function categoriaPorCodigo(codigo) {
  // Tu código aquí
  switch (codigo) {
    case "E1":
    case "E2":
        console.log("Electrónica");
        break
    case "H1":
        console.log("Hogar");
        break
    default:
        console.log("Desconocido");    
  }
}

categoriaPorCodigo("C1");

// --- Reto 4: Días del mes ---
// Recibe "mes" (número del 1 al 12).
// Retorna el número de días del mes: 31 para ene, mar, may, jul, ago, oct, dic;
// 30 para abr, jun, sep, nov; 28 para feb.
// Retorna 0 si el mes no es válido (default).
// Usa switch agrupando los meses que tienen los mismos días.
function diasDelMes(mes) {
  // Tu código aquí
  switch (mes) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log("Mes de 31 días");
        break
    case 4:
    case 6:
    case 9:
    case 11:
        console.log("Mes de 30 días");
        break
    case 2:
        console.log("Mes de 28 días");
        break
    default:
        console.log("Mes inválido");
  }
}

diasDelMes(2);

// --- Reto 5: Nivel de usuario ---
// Recibe "nivel" (string: "principiante", "intermedio", "avanzado").
// Retorna "acceso básico" para principiante, "acceso estándar" para intermedio,
// "acceso completo" para avanzado.
// Retorna "nivel no válido" para cualquier otro valor (default).
function nivelDeUsuario(nivel) {
  // Tu código aquí
  switch (nivel) {
    case "principiante":
        console.log("Acceso básico");
        break
    case "intermedio":
        console.log("Acceso estándar");
        break
    case "avanzado":
        console.log("Acceso completo");
        break
    default:
        console.log("Nivel no válido");
  }
}

nivelDeUsuario("social");

module.exports = {
  tipoDeDia,
  mensajeOpcion,
  categoriaPorCodigo,
  diasDelMes,
  nivelDeUsuario,
};
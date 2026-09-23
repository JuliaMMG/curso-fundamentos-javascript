// ============================================
// Reto: Métodos esenciales de strings en JavaScript
// ============================================
// Practica length, slice, split, trim, toLowerCase, includes,
// startsWith, endsWith y replace. Los strings son inmutables.
// Ejecuta los tests con: npx vitest src/05-metodos-strings
// ============================================

// --- Reto 1: Contar caracteres con length ---
// Recibe un string "texto". Retorna la cantidad de caracteres (usa la propiedad length).
function contarCaracteres(texto) {
  // Tu código aquí
  return texto.length;
}

console.log(contarCaracteres("Me siento muy bien"));

// --- Reto 2: Extraer porción con slice ---
// Recibe "texto", "inicio" y "fin" (índices). Retorna la porción desde inicio hasta fin (sin incluir fin).
// Si fin no se pasa o es undefined, extrae hasta el final del string.
// Usa el método slice.
function extraerConSlice(texto, inicio, fin) {
  // Tu código aquí

  if (fin <= texto.length) {
    return texto.slice(inicio, (fin--))
  }
  else {
    return texto.slice(inicio, fin);
  }
}

console.log(extraerConSlice("Me llamo Juliana",0,10))
console.log(extraerConSlice("Me llamo Juliana",0,20))

// --- Reto 3: Extraer desde el final con slice (índice negativo) ---
// Recibe "texto" y "n" (número). Retorna los últimos "n" caracteres del string.
// Usa slice con índice negativo: slice(-n).
function extraerDesdeFinal(texto, n) {
  // Tu código aquí
  return texto.slice(-n)
}

console.log(extraerDesdeFinal("Me llamo Juliana",7));

// --- Reto 4: Dividir en array con split ---
// Recibe "texto" y "separador" (string). Retorna un array con las partes del texto
// divididas por el separador. Usa el método split.
function dividirEnPartes(texto, separador) {
  // Tu código aquí
  return texto.split(separador)
}

console.log(dividirEnPartes("Juliana,Romeo,Bruno,Stivens",","));

// --- Reto 5: Limpiar espacios con trim ---
// Recibe un string "texto" que puede tener espacios al inicio y/o al final.
// Retorna el mismo texto sin espacios al inicio ni al final. Usa trim.
function limpiarEspacios(texto) {
  // Tu código aquí
  return texto.trim()
}

console.log(limpiarEspacios("   Me llamo Julietitia    "));

// --- Reto 6: Normalizar a minúsculas ---
// Recibe un string "texto". Retorna el texto en minúsculas usando toLowerCase.
// Útil para comparaciones sin importar mayúsculas/minúsculas.
function normalizarMinusculas(texto) {
  // Tu código aquí
  return texto.toLowerCase()
}

console.log(normalizarMinusculas("Me llamo Julietitia"));

// --- Reto 7: Saber si incluye una subcadena con includes ---
// Recibe "texto" y "subcadena". Retorna true si el texto incluye la subcadena, false si no.
// Usa el método includes.
function incluyeSubcadena(texto, subcadena) {
  // Tu código aquí
  return texto.includes(subcadena)
}

console.log(incluyeSubcadena("Me llamo Julietitia","eta"));

// --- Reto 8: Validar inicio con startsWith ---
// Recibe "texto" y "prefijo". Retorna true si el texto empieza con el prefijo, false si no.
// Útil para validar prefijos (ej: nombre de archivo, protocolo).
function empiezaCon(texto, prefijo) {
  // Tu código aquí
  return texto.startsWith(prefijo)
}

console.log(empiezaCon("felicidadesminombre","feli"));
console.log(empiezaCon("felicidadesminombre","cidad"));

// --- Reto 9: Validar fin con endsWith ---
// Recibe "texto" y "sufijo". Retorna true si el texto termina con el sufijo, false si no.
// Útil para validar extensiones de archivo (ej: "documento.md" termina con ".md").
function terminaCon(texto, sufijo) {
  // Tu código aquí
  return texto.endsWith(sufijo)
}

console.log(terminaCon("felicidadesminombre","feli"));
console.log(terminaCon("felicidadesminombre","bre"));


// --- Reto 10: Reemplazar sin mutar con replace ---
// Recibe "texto", "buscar" y "reemplazo". Retorna un NUEVO string donde la primera
// ocurrencia de "buscar" se sustituye por "reemplazo". El original no se modifica (inmutabilidad).
// Usa el método replace.
function reemplazarPrimera(texto, buscar, reemplazo) {
  // Tu código aquí
  return texto.replace(buscar, reemplazo)
}

console.log(reemplazarPrimera("Juliana es una mamacita", "Juliana", "Marcela"));

module.exports = {
  contarCaracteres,
  extraerConSlice,
  extraerDesdeFinal,
  dividirEnPartes,
  limpiarEspacios,
  normalizarMinusculas,
  incluyeSubcadena,
  empiezaCon,
  terminaCon,
  reemplazarPrimera,
};
// ============================================
// Reto: Operadores lógicos AND, OR y NOT en JavaScript
// ============================================
// Practica AND (&&), OR (||) y NOT (!) para combinar, evaluar y negar condiciones.
// Útil para validaciones, permisos (admin, usuario activo) y flujos de decisión.
// Ejecuta los tests con: npx vitest src/08-logic
// ============================================

// --- Reto 1: AND (&&) ---
// Recibe dos booleanos "a" y "b".
// Retorna el resultado de a && b (true solo si ambas son true).
function resultadoAnd(a, b) {
  // Tu código aquí
  return a && b;
}

console.log(resultadoAnd(true,false));

// --- Reto 2: OR (||) ---
// Recibe dos booleanos "a" y "b".
// Retorna el resultado de a || b (true si al menos una es true).
function resultadoOr(a, b) {
  // Tu código aquí
  return a || b;
}

console.log(resultadoOr(false,false));

// --- Reto 3: NOT (!) ---
// Recibe un booleano "val".
// Retorna el resultado de !val (invierte: true → false, false → true).
function resultadoNot(val) {
  // Tu código aquí
  return !val;
}

console.log(resultadoNot(false));

// --- Reto 4: Validación con AND (ambas condiciones) ---
// Recibe "esAdmin" y "estaActivo" (booleanos).
// Retorna true solo si es administrador Y está activo (puede ver la lista de usuarios).
function puedeVerListaUsuarios(esAdmin, estaActivo) {
  // Tu código aquí
  if (esAdmin && estaActivo === true) {
    return "Puede ver la lista de usuarios"
  }   
  else {
    return "No puede ver la lista de usuarios"      
  }
}

console.log(puedeVerListaUsuarios(true,false));

// --- Reto 5: Validación con OR (al menos una condición) ---
// Recibe "esUsuarioValido" y "tienePermisoEspecial" (booleanos).
// Retorna true si cumple cualquiera de las dos condiciones (puede acceder).
function puedeAcceder(esUsuarioValido, tienePermisoEspecial) {
  // Tu código aquí
  if (esUsuarioValido || tienePermisoEspecial == true) {
    return "Puede acceder"
  }
  else {
    return "No puede acceder"
  }
}

console.log(puedeAcceder(false,false));

// --- Reto 6: Validación con NOT (negar condición) ---
// Recibe "esAdmin" (booleano).
// Retorna true si NO es administrador (mostrar opción limitada para no admins).
function mostrarOpcionLimitada(esAdmin) {
  // Tu código aquí
  if (!esAdmin == true) {
    return "Opción limitada para administradores"
  } 
  else {
    return "Ingreso administradores"
  }
}

console.log(mostrarOpcionLimitada(false));

module.exports = {
  resultadoAnd,
  resultadoOr,
  resultadoNot,
  puedeVerListaUsuarios,
  puedeAcceder,
  mostrarOpcionLimitada,
};
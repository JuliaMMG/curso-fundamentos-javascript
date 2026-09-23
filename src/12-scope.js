// Scope

// Scope global

const global = "Soy Global"; // Accesible desde donde sea

// Scope de función

function ejemplo() {
    const funcion = "Soy de función"; // Sólo es accesible dentro de la función

    if (true) {
        const bloque = "Soy de bloque"; // Scope de bloque
        console.log(`Bloque - Función: ${funcion}`);
        console.log(`Bloque - Bloque: ${bloque}`);
        console.log(`Bloque - Global: ${global}`);
    }
    console.log(`Función - Función: ${funcion}`);
    //console.log(`Función - Bloque: ${bloque}`);
    console.log(`Funcion - Global: ${global}`);
    }

console.log(ejemplo());
console.log(`Bloque - Función: ${funcion}`);
console.log(`Bloque - Bloque: ${bloque}`);
console.log(`Bloque - Global: ${global}`);

console.log(global);

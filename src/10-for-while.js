// For/While

/*
for (inicialización, condición, incremento) {
    Bloque de código que se ejecuta
};
*/

for (let i = 0; i < 5; i++) {
    console.log(i);
};

const notas = ['Nota 1','Nota 2','Nota 3'];

for (let i = 0; i < notas.length; i++) {
    console.log(`Indice ${i}: ${notas[i]}`);
};

// For of (Permite iterar sobre valores de un array)

const frutas = ['manzana', 'pera', 'uva'];

for (const fruta of frutas) {
    console.log(fruta);
    if (fruta === 'manzana') {
        console.log('Es una rica manzana')
    }
};

// For in (Itera dobre propiedades e índices)

const persona = {nombre: 'Ana', edad: '25'};

for (const clave in persona) {
    console.log(`${clave}: ${persona[clave]}`);
}

// While: Se ejecuta mientras la condición sea verdadera.
// Útil para cuando no se conoce cuántas iteraciones se deben realizar

let contador = 0;

// Se deben evitar loops eternos. Debe haber una condición u opción de salida
while (contador < 3) {
    console.log(contador);
    contador++; // Se debe incrementar el contador!!!
}

// Do While
// Ejecuta el bloque de código mientras se cumpla la condición.

let numero = 0;

do {
    console.log(`Entra en: ${numero}`);
    numero++;
} while (numero < 3) {
    console.log(numero);
}
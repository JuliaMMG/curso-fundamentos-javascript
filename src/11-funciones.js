// Function

function saludar(nombre) {
    return `Hola ${nombre}`
}

const mensaje = saludar("Alejo");
const mensaje1 = saludar("Oscar");
console.log(mensaje);
console.log(mensaje1);
console.log(mensaje, mensaje1);

console.log(saludar("Juliana"));

// Parámetros y Argumentos
// Parámetros: Son las variables requeridas por la función (Van dentro del paréntesis).
// Argumentos: Valores que vamos a pasar al momento de ejecutar la función.

function crearUsuario(nombre, edad) { //Importante ser muy claro con el nombre de las funciones.
    //Se debe nombrar la función con lo que va a realizar
    return { nombre, edad };
}

const usuario = crearUsuario("Ana", 25);

console.log(usuario);

// Arrow functions
// Se constituyen como variables

const multiplicar = (a, b) => a * b; // Más sencilla, a una sóla línea.

console.log(multiplicar(4,5));


const crearNota = (contenido, titulo = "Sin Título") => {
    return {
        titulo,
        contenido,
        creado: Date.now()
    }
};

const nota1 = crearNota("Mi contenido");
const nota2 = crearNota("Otro contenido", "Mi nota");

console.log(nota1);
console.log(nota2);



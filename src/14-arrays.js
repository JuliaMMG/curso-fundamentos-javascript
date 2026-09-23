// Arrays
// Almacenan diferentes tipos de información

const notas = ['Nota 1', 'Nota 2', 'Nota 3'];
const numeros = [1,2,3,4,5];
const mixtos = [1, 'texto' , null, true, {id: 1}];


// CRUD --> Create, Read, Update and Delete

// Crear (Create)
// Agregar elementos
// push() --> Permite agregar un elemento al final del arreglo:

notas.push('Nota 4');
console.log(notas);

// unshift() --> Agrega un elemento al inicio del array:

notas.unshift('Nota 0');
console.log(notas);

// Los arreglos se empiezan a contar desde 0 (primer índice)
// splice() --> Insertar en una posición determinada

// Agrega en una posición determinada, sin eliminar el elemento que está en esa posición.
notas.splice(1,0,'Notas 1.2');
console.log(notas);

// Agrega en una posición determinada, eliminando el elemento que estaba en dicha posición.
notas.splice(1,1,'Notas 1.2');
console.log(notas);

// Leer Read

console.log(notas[0]);
console.log(notas[1]);
console.log(notas.length);

// Actualizar (Update)

const notas1 = ['Nota 1', 'Nota 2'];
notas1[1] = 'Nota 3';
console.log(notas1);
notas1.splice(1,0,'Nota 4');
console.log(notas1);

// Eliminar (Delete)

const notas2 = ['Nota 1', 'Nota 2'];
console.log(notas2.pop()); // Elimina el elemento de la ultima posición
console.log(notas2);

const notas3 = ['Nota 1', 'Nota 2'];
console.log(notas3.shift()); // Elimina el primer elemento (posicion 0) del arreglo

const notas4 = ['Nota 1', 'Nota 2'];
console.log(notas4.splice(1,1));
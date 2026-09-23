// Métodos de orden superior

// Son funciones que reciben otra función como argumento

// map() transforma cada elemento contenido en un arreglo y entrega uno nuevo con la transformación indicada. No modifica el elemento original.

const notas = [
    {id: 1, title: 'Nota 1', content: 'Contenido de la nota 1'},
    {id: 2, title: 'Nota 2', content: 'Contenido de la nota 2'},
    {id: 3, title: 'Nota 3', content: 'Contenido de la nota 3'}
];

const titulos = notas.map((nota) => nota.title);
console.log(titulos);

const notas1 = [
    {id: 1, title: 'Nota 1', content: 'Contenido de la nota 1'},
    {id: 2, title: 'Nota 2', content: 'Contenido de la nota 2'},
    {id: 3, title: 'Nota 3', content: 'Contenido de la nota 3'}
];

const notasConFecha = notas1.map((nota) => ({
    ...notas1,
    fechaCreacion: Date.now()
}));

console.log(notasConFecha);

// Filter() permite seleccionar elementos que cumplan con una condición:

const notas2 = [
    {id: 1, title: 'Nota 1', content: 'Contenido de la nota 1', esFavorita: true},
    {id: 2, title: 'Nota 2', content: 'Contenido de la nota 2', esFavorita: false},
    {id: 3, title: 'Nota 3', content: 'Contenido de la nota 3', esFavorita: true}
];

const favoritas = notas2.filter((nota) => nota.esFavorita);
console.log(favoritas);

const titulo = notas2.filter((nota) => nota.title.toLowerCase().includes('nota 1'));
console.log(titulo);

// find()

const notas3 = [
    {id: 1, title: 'Nota 1', content: 'Contenido de la nota 1', esFavorita: true},
    {id: 2, title: 'Nota 2', content: 'Contenido de la nota 2', esFavorita: false},
    {id: 3, title: 'Nota 3', content: 'Contenido de la nota 3', esFavorita: true}
];

const nota = notas3.find((nota) => nota.id === 2);
console.log(nota);

// reduce()

const numeros = [1, 2, 3, 4, 5];

const suma = numeros.reduce((accumulador, n) => accumulador + n, 10);
console.log(suma);
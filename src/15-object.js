// Objetos (Object)
// Un objeto es una colección de pares clave: valor que permiten agrupar datos

const nota = {
    id: 1,
    title: 'Mi primera nota',
    content: 'Contenido de la nota',
    createdAt: Date.now(),
    edad: 13,
    esAdmin: true,
    dates: [1,1,1,1]
}

console.log(nota.id);
console.log(nota.title);

const campo = 'content';
console.log(nota[campo]);

console.log(nota.author?.name);// optional chaining

// Desestructuración

const nota1 = {
    id: 1,
    title: 'Mi primera nota',
    content: 'Contenido de la nota',
    createdAt: Date.now(),
    edad: 13,
    esAdmin: true,
    dates: [1,1,1,1]
}

const id = nota1.id;
const title = nota1.title;

const {title: titulo, content} = nota1;

console.log(id);
console.log(title);
console.log(titulo, content);

// Spread operator

const nota2 = { id:2, title: 'hola' };
const data = { esAdmin: true};

const copia = {...nota2};

console.log(nota2);
console.log(copia);

const notaActualizada = {
    ...nota2,
    ...data,
    edad: 18,
};

console.log(notaActualizada);

const nota3 = {
    id: 1,
    title: 'Mi primera nota',
    content: 'Contenido de la nota',
    createdAt: Date.now(),
};

console.log('title' in nota3);

// Object.keys

Object.keys(nota3);
console.log(Object.keys(nota3));

// Object.values

Object.values(nota3);
console.log(Object.values(nota3));

// Object.entries

Object.entries(nota3);
console.log(Object.entries(nota3));
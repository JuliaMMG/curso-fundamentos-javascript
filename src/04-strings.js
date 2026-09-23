// Strings

const nombre = 'JavaScript';
const version = 'ES6';

// console.log(nombre, version);

const mensaje = 'Bienvenido a ' + nombre + ' version: ' + version;
// console.log(mensaje);

// Template literals

const mensaje2 = `Bienvenido y bienvenida al curso de ${nombre} en su versión: ${version}`;
console.log(mensaje2);

// Expresiones

const precio = 100;
const cantidad = 3;
const total = `Total: ${precio * cantidad}`;
console.log(total);

console.log(typeof total);

// Multilinea

const nota = `
# Mi nota
Este es el contenido

- Nota 1
- Nota 2
`;

console.log(nota);

// Métodos principales en Strings

// Length - Devuelve la cantidad de caracteres que tiene un texto.
const texto = "Hola Mundo";
console.log(texto.length);

// Slice (inicio, fin) - Extrae una porción del texto

const texto1 = "JavaScript es Genial";
console.log(texto1.slice(0,10));
console.log(texto1.slice(11));
console.log(texto1.slice(-6));

// Substring (inicio, fin) - No trabaja con elementos negativos

const texto2 = "Hola mundo";
console.log(texto2.substring(0,4));

// Split (separador) - Separa las cadenas de texto, basado en un separador

const texto3 = "Línea1, Línea2, Línea3";
const lineas1 = texto3.split(" ");
const lineas2 = texto3.split(",");
console.log(lineas1);
console.log(lineas2);

// Trim(), TrimStart(), TrimEnd() - Permite eliminar espacios de una cadena de texto

const texto4 = "    Hola Mundo    ";
console.log(texto4.trim()); // Elimina los espacios al inicio y al final de la cadena de texto
console.log(texto4.trimStart()); // Elimina los espacios al inicio de la cadena de texto
console.log(texto4.trimEnd()); // Elimina los espacios al final de la cadena de texto

// toLowerCase() - toUpperCase()

const texto5 = "JavaScript";
console.log(texto5.toLowerCase()); // Cambia los caracteres a minúsculas
console.log(texto5.toLocaleUpperCase()); // Cambia los caracteres a mayusculas

// includes(subcadena) - Retorna True/False de acuerdo a si una subcanena se encuentra en la cadena principal

const contenido = "Aprende JavaScript desde cero";
console.log(contenido.includes("JavaScript")); // Debe retornar True
console.log(contenido.includes("Python")); // Debe retornar False

// starsWith() - endsWith() - Retorna True/False de acuerdo a si la cadena empieza o termina con una subcadena determinada.

const archivo = "documento.md";
console.log(archivo.startsWith("doc")); // Debe retornar True
console.log(archivo.endsWith(".md")); // Debe retornar True

// replace() - replaceAll()

const texto6 = "Hola Mundo, Hola JavaScript";
console.log(texto6.replace("Hola","Hi")); // Reemplaza la primera palabra "Hola" en la cadena por "Hi"
console.log(texto6.replaceAll("Hola","Hi")); // Reemplaza todas las palabras "Hola" en la cadena por "Hi"
console.log(texto6); // El String original no cambia.
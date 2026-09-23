// Cohersion implicita

console.log("5" + 3);
console.log("5" - 3);
console.log(true + 1);

// Conversion explicita

const str = "42";
const num = Number(str);
console.log(typeof num, num);


const int = parseInt(str, 10);
console.log(int);

const float = parseFloat("3,14169");
console.log(float);

const texto = String(123456);
console.log(texto);
console.log(typeof texto);

const bool = Boolean(1);
console.log(bool);
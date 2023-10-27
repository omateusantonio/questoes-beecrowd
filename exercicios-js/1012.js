lines = [3.0, 4.0, 5.2];

const A = parseFloat(lines[0]);
const B = parseFloat(lines[1]);
const C = parseFloat(lines[2]);
const pi = 3.14159;

const triangulo = ((A*C)/2).toFixed(3);
const circulo = (pi*(Math.pow(C,2))).toFixed(3);
const trapezio = (((A+B)*C)/2).toFixed(3);
const quadrado = (Math.pow(B,2)).toFixed(3);
const retangulo = (A*B).toFixed(3);

console.log(`TRIANGULO: ${triangulo}`);
console.log(`CIRCULO: ${circulo}`);
console.log(`TRAPEZIO: ${trapezio}`);
console.log(`QUADRADO: ${quadrado}`);
console.log(`RETANGULO: ${retangulo}`);
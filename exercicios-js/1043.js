lines = [6.0, 4.0, 2.0];

const A = parseFloat(lines[0]);
const B = parseFloat(lines[1]);
const C = parseFloat(lines[2]);

if (A < (B + C) && B < (A + C) && C < (A + B)) {
    const perimetro = A+B+C;
    console.log(`Perimetro = ${perimetro.toFixed(1)}`);
} else {
    const area = (((A+B)*C)/2);
    console.log(`Area = ${area.toFixed(1)}`);
}
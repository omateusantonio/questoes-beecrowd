lines = [0.0, 20.0, 5.0];

const A = (parseFloat(lines[0])).toFixed(5);
const B = (parseFloat(lines[1])).toFixed(5);
const C = (parseFloat(lines[2])).toFixed(5);
const delta = parseFloat(((B**2)-(4*A*C)));

if (A == 0 || delta < 0) {
    console.log("Impossivel calcular")
} else {
    const R1 = (-B+Math.sqrt(delta))/(2*A);
    const R2 = (-B-Math.sqrt(delta))/(2*A);

    console.log(`R1 = ${R1.toFixed(5)}`);
    console.log(`R2 = ${R2.toFixed(5)}`);
}

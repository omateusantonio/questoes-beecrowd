lines = ["JOAO", 500.00, 1230.00];

const nome_vendedor = lines[0];
const salario = parseFloat(lines[1]);
const montante_comissao = parseFloat(lines[2]);
const comissao = montante_comissao * 0.15;
const salario_final = (salario + comissao).toFixed(2);

console.log(`TOTAL = R$ ${salario_final}`);

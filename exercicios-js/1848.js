// nao terminado


var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.replaceAll("\r","").split("\n");

let contador_grito=0;
let entrada = 0;
let soma = 0;
let piscadas = [];


while (contador_grito < 3 && soma <= 1000) { 
console.log("Digite seu input:");

entrada = lines[j];


if (entrada == "caw caw")
{
    contador_grito++;
    console.log(`A soma eh igual a: ${soma}`);
    console.log(contador_grito);
    soma = 0;
    j++;

} else
{
    for (i = 0; i < 3; i++) // transforma a piscada em um array de caracteres
    {
        piscadas[i] = entrada[i];
    }

    for (i = 0; i < 3; i++) // soma os valores da piscada
    {
        if (i == 0 && piscadas[i] == '*')
            {
                soma += 4;
            }
        if (i == 1 && piscadas[i] == '*')
            {
                soma += 2;
            }
        if (i == 2 && piscadas[i] == '*')
            {
                soma += 1;
            }

    }
   

    console.log(`A PISCADA FOI: ${piscadas[0]}${piscadas[1]}${piscadas[2]}`);
    j++;
}

}
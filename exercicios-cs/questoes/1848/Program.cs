using System;

class URI
{

    static void Main(string[] args)
    {

        int contador_grito = 0;
        string input;
        int soma = 0;
        char[] piscadas = new char[3];


        while (contador_grito < 3 && soma <= 1000)
        {
            input = Console.ReadLine();


            if (input == "caw caw")
            {
                contador_grito++;
                Console.WriteLine(soma);

                soma = 0;

            }
            else
            {
                for (int i = 0; i < 3; i++) // transforma a piscada em um array de caracteres
                {
                    piscadas[i] = input[i];
                }

                for (int i = 0; i < 3; i++) // soma os valores da piscada
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


            }

        }

    }

}
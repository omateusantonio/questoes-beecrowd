using System;

class URI
{

    static void Main(string[] args)
    {

        double A, B, C, delta, r1, r2;
        string[] valores;


        valores = Console.ReadLine().Split();
        A = double.Parse(valores[0]);
        B = double.Parse(valores[1]);
        C = double.Parse(valores[2]);

        if (A == 0)
        {
            Console.WriteLine("Impossivel calcular");
        }
        else
        {

            delta = (Math.Pow(B, 2)) - ((4 * A) * C);
            r1 = ((-B) + (Math.Sqrt(delta))) / (2 * A);
            r2 = ((-B) - (Math.Sqrt(delta))) / (2 * A);

            if (delta < 0)
            {
                Console.WriteLine("Impossivel calcular");
            }
            else
            {
                Console.WriteLine($"R1 = {r1.ToString("F5")}");
                Console.WriteLine($"R2 = {r2.ToString("F5")}");
            }


        }

    }

}
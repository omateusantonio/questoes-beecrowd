using System;

class URI
{

    static void Main(string[] args)
    {

        double A, B, C, perimetro_triangulo, area_trapezio;
        string[] valores;

        valores = Console.ReadLine().Split();
        A = double.Parse(valores[0]);
        B = double.Parse(valores[1]);
        C = double.Parse(valores[2]);

        if (A < (B + C) && B < (A + C) && C < (A + B))
        {

            perimetro_triangulo = A + B + C;
            Console.WriteLine($"Perimetro = {perimetro_triangulo.ToString("F1")}");

        }
        else
        {

            area_trapezio = ((A + B) * C) / 2;
            Console.WriteLine($"Area = {area_trapezio.ToString("F1")}");
        }

    }

}
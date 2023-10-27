using System;

class URI
{

    static void Main(string[] args)
    {

        string nome_vendedor;
        double salario;
        double total_vendas;


        nome_vendedor = Console.ReadLine();



        salario = double.Parse(Console.ReadLine());



        total_vendas = double.Parse(Console.ReadLine());
        double comissao = total_vendas * 0.15;


        double total = salario + comissao;

        Console.WriteLine($"TOTAL = R$ {total.ToString("F2")}");

    }

}
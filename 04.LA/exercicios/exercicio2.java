package desafio;
import java.util.Scanner;
import java.util.Arrays;

// Fa�a um algoritmo que receba dois n�meros e ao final mostre a soma, subtra��o, multiplica��o
//e a divis�o dos dois n�meros lidos;

public class exercicio2 {

	public static void main(String[]args) {
		Scanner leia = new Scanner (System.in);
		
		int num1, num2, soma, sub, mult;
		float div;

		System.out.println("Informe o primeiro n�mero: ");
		num1=leia.nextInt();
		
		System.out.println("Informe o segundo n�mero");
		num2=leia.nextInt();
		
		soma=num1+num2;
		sub=num1-num2;
		mult=num1*num2;
		div=num1/num2;
		
		System.out.println("A soma dos dois n�meros �: "+soma);
		System.out.println("A subtra��o dos dois n�meros �: "+sub);
		System.out.println("A multiplica��o dos dois n�meros �: "+mult);
		System.out.println("A divisao dos dois n�meros �: "+div);
		
	}
}

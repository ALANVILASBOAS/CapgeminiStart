package desafio;
import java.util.Scanner;
import java.util.Arrays;

// Faça um algoritmo que receba dois números e ao final mostre a soma, subtração, multiplicação
//e a divisão dos dois números lidos;

public class exercicio2 {

	public static void main(String[]args) {
		Scanner leia = new Scanner (System.in);
		
		int num1, num2, soma, sub, mult;
		float div;

		System.out.println("Informe o primeiro número: ");
		num1=leia.nextInt();
		
		System.out.println("Informe o segundo número");
		num2=leia.nextInt();
		
		soma=num1+num2;
		sub=num1-num2;
		mult=num1*num2;
		div=num1/num2;
		
		System.out.println("A soma dos dois números é: "+soma);
		System.out.println("A subtração dos dois números é: "+sub);
		System.out.println("A multiplicação dos dois números é: "+mult);
		System.out.println("A divisao dos dois números é: "+div);
		
	}
}

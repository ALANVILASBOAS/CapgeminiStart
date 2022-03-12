package desafio;
import java.util.Scanner;
import java.util.Arrays;



public class exercicio1 {

	public static void main(String[]args) {
		Scanner leia = new Scanner (System.in);
		
		int num1, num2, total;

		System.out.println("Informe o primeiro número: ");
		num1=leia.nextInt();
		
		System.out.println("Informe o segundo número");
		num2=leia.nextInt();
		
		total=num1+num2;
		
		System.out.println("A soma dos dois números é: "+total);
	}
}

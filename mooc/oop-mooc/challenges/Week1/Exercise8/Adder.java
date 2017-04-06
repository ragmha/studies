
import java.util.Scanner;

public class Adder {

    public static void main(String[] args) {
        Scanner reader = new Scanner(System.in);

        // Implement your program here. Remember to ask the input from user
        System.out.print("Type a number: ");
        int num1 = Integer.parseInt(reader.nextLine());

        System.out.print("Type another number: ");
        int num2 = Integer.parseInt(reader.nextLine());


        int sum = num1 + num2;
        System.out.println("");
        System.out.println("Sum of the numbers: " + sum);

    }
}

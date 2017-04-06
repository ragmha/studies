
import java.util.Scanner;

public class SumOfThePowers {

    public static void main(String[] args) {
        Scanner reader = new Scanner(System.in);

        System.out.print("Type a number: ");
        int n = Integer.parseInt(reader.nextLine());

        int num = 0;
        int sum = 0;

        while (num <= n) {
            sum += Math.pow(2,num);
            num++;
        }

        System.out.println("The result is " + sum);
    }
}

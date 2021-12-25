import java.util.Scanner;

public class Factorial {
    public static void main(String[] args) {
        Scanner reader = new Scanner(System.in);

        System.out.print("Type a number: ");
        int until = Integer.parseInt(reader.nextLine());

        int num = 0;
        int result = 1;

        while(num <= until) {
            if(num == 0) {
                num += 1;
            }
            result *= num;
            num++;
        }

        System.out.println("Factorial is " + result);
    }
}

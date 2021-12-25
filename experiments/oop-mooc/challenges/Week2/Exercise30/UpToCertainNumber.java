
import java.util.Scanner;


public class UpToCertainNumber {

    public static void main(String[] args) {
        Scanner reader = new Scanner(System.in);

        // Write your code here
        int num = 1;
        System.out.print("Up to what number? ");
        int input = Integer.parseInt(reader.nextLine());

        while (num <= input ) {
            System.out.println(num);
            num++;
        }

    }
}

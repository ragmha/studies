
import java.util.Scanner;

public class LowerLimitAndUpperLimit {

    public static void main(String[] args) {
        Scanner reader = new Scanner(System.in);

        // write your code here
        System.out.print("First: ");
        int first = Integer.parseInt(reader.nextLine());

        System.out.print("Last: ");
        int last = Integer.parseInt(reader.nextLine());


        int num = first;

        while (num >= first && num <= last) {
            System.out.println(num);
            num++;
        }

    }
}

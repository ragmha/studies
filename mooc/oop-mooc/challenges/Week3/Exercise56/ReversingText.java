
import java.util.Scanner;

public class ReversingText {

    public static String reverse(String text) {
        // write your code here
        // note that method does now print anything, it RETURNS the reversed string
        if (text.length() <= 1) {
            return text;
        }
        return reverse(text.substring(1)) + text.charAt(0);
    }

    public static void main(String[] args) {
        Scanner reader = new Scanner(System.in);
        System.out.print("Type in your text: ");
        String text = reader.nextLine();
        System.out.println("In reverse order: " + reverse(text));
    }
}


// import java.util.Scanner;
//
// public class ReversingText {
//
//     public static String reverse(String text) {
//         // write your code here
//         // note that method does now print anything, it RETURNS the reversed string
//         String result = "";
//
//         int i = text.length() - 1;
//
//         while (i >= 0) {
//             result += text.charAt(i);
//             i--;
//         }
//
//         return result;
//     }
//
//     public static void main(String[] args) {
//         Scanner reader = new Scanner(System.in);
//         System.out.print("Type in your text: ");
//         String text = reader.nextLine();
//         System.out.println("In reverse order: " + reverse(text));
//     }
// }
//

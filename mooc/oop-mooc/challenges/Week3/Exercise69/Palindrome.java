import java.util.Scanner;

public class Palindrome {

    public static String reverse(String text) {
        if (text.length() <= 1) {
            return text;
        }
        return reverse(text.substring(1)) + text.charAt(0);
    }

    public static boolean palindrome(String text) {
        return reverse(text).equals(text);
    }

    public static void main(String[] args) {
        Scanner reader = new Scanner(System.in);

        System.out.println("Type a text: ");
        String text = reader.nextLine();
        if (palindrome(text)) {
            System.out.println("The text is a palindrome!");
        } else {
            System.out.println("The text is not a palindrome!");
        }
    }
}

// Easier solution

// import java.util.Scanner;
//
// public class Palindrome {
//
//     public static String reverse(String text) {
//       String reversed = "";
//       int i = 0;
//
//       while(i < text.length()) {
//           char c = text.charAt(i);
//           reversed += c;
//           i++;
//       }
//       return reversed;
//     }
//
//     public static boolean palindrome(String text) {
//         // write code here
//         return reverse(text).equals(text);
//     }
//
//     public static void main(String[] args) {
//         Scanner reader = new Scanner(System.in);
//
//         System.out.println("Type a text: ");
//         String text = reader.nextLine();
//         if (palindrome(text)) {
//             System.out.println("The text is a palindrome!");
//         } else {
//             System.out.println("The text is not a palindrome!");
//         }
//     }
// }

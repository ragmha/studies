/*
    Example output:
    Value of the integer variable is: -25
    Value of the character variable is: M
    Value of the character string variable is: This is going great!
    Value of the concatenated character string is: This is the start of the text and here is the end
    Value of the truth variable is: true
*/


public class Variables {

    public static void main (String[] args) {

        int integer = -25;
        char character = 'M';
        String string = "This is going great!";
        String start = "This the start of the text ";
        String end = "and here is the end";
        Boolean truth = true;
        String fullText = start + end;

        System.out.println("Value of the integer variable is: " + integer);
        System.out.println("Value of the character variable is: " + character);
        System.out.println("Value of the character string variable is: " + string);
        System.out.println("Value of the concatenated character string is: " + fullText);
        System.out.println("Value of the truth variable is: " + truth);
    }

}

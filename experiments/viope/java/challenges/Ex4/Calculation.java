/*

  Create a calculator program which lets the user choose what calculation to
  perform. First the program asks what calculation is to be performed. Then the
  program asks for two integers, performs the chosen calculation between the
  given numbers and prints the result on screen. The choosing of the calculation
  is to be done using switch statement. If, when choosing the calculation type,
  the user input is not a number between 1 and 5, program prints “Invalid choice”
  and program execution ends. Hence the user will not be prompted to input two
  integers if the original calculation choice is not a number between 1 and 5.

  Hint :A type conversion must be done when printing the result of a division in
  order to include the decimal part of the result.

  Program is written to a class called Calculation.


  Example output:
  Choose from the following calculations:
  1: subtraction
  2: addition
  3: multiplication
  4: division
  5: remainder

  Make your choice: 8

  Invalid choice.
 */

import java.util.Scanner;

public class Calculation {

  public static void main(String[] args) {
    int choice;
    double firstNum;
    double secondNum;
    double result;
    String menu;

    Scanner reader = new Scanner(System.in);

    menu = "Choose from the following calculations:" + "\n"
    + "1: subtraction (-)" + "\n"
    + "2: addition (+)" + "\n"
    + "3: multiplication (*)" + "\n"
    + "4: division (/)" + "\n"
    + "5: remainder (%)" + "\n\n";

    System.out.print(menu);

    System.out.print("Make your choice:");
    choice = Integer.parseInt(reader.next());

    System.out.print("\nEnter first number:");
    firstNum = Double.parseDouble(reader.next());

    System.out.print("\nEnter second number:");
    secondNum = Double.parseDouble(reader.next());


    switch (choice) {
      case 1 :
        System.out.println("\nPerforming Substraction...\n");

        result = firstNum - secondNum;
        System.out.println("Result => " + result);

        break;

      case 2 :
        System.out.println("\nPerforming Addition...\n");

        result = firstNum + secondNum;
        System.out.println("Result => " + result);

        break;

      case 3 :
        System.out.println("\nPerforming Multiplication...\n");

        result = firstNum * secondNum;
        System.out.println("Result => " + result);

        break;

      case 4 :
        System.out.println("\nPerforming Division...\n");

        result = (double) firstNum / secondNum;
        System.out.println("Result => " + result);

        break;

      case 5 :
        System.out.println("\nFinding Remainder...\n");

        result = firstNum % secondNum;
        System.out.println("Result => " + result);

        break;

      default:

        System.out.println("");
        System.out.println("Invalid choice.");
    }
  }

}

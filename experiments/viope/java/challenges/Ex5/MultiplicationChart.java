/*
  Write a method that receives an integer as parameter and prints the
  multiplication chart of that number as shown in the example print.
  Method name shall be count.

  You do NOT need to write the whole program, just the method that prints the
  chart.


  Example output:

  Type a number: 7
  Multiplication chart of the number 7
  7
  14
  21
  28
  35
  42
  49
  56
  63
  70
 */
import java.util.Scanner;

public class MultiplicationChart {

  public static void count(int number) {
    int result;
    int index;

    for(index = 1; index < 11; index++) {
      result = number * index;
      System.out.println(result);
    }
  }


  public static void main(String[] args) {
    int number;
    Scanner reader = new Scanner(System.in);

    System.out.print("Type a number:");
    number = Integer.parseInt(reader.next());

    System.out.println("Multiplication chart of the number " + number + "\n");
    count(number);
  }
}

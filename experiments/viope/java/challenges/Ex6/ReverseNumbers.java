/*

Create a program that asks the user how many floating point numbers he wants to
give. After this the program asks the numbers, stores them in an array and
prints the contents of the array in reverse order.

Program is written to a class called ReverseNumbers.


Example output:
How many floating point numbers do you want to type: 3
Type in 1. number: -4
Type in 2. number: 2,6
Type in 3. number: 3

Given numbers in reverse order:
3.0
2.6
-4.0
*/
import java.util.Scanner;

class Main {
  public static void main(String[] args) {
    Scanner reader = new Scanner(System.in);
    double[] number;
    int numAmount = 0;

    System.out.print("How many floating point numbers do you want to type: ");
    numAmount = reader.nextInt();

     number = new double[numAmount];

     for(int i= 0; i < number.length; ++i) {
       System.out.print("Type in " + (i+1) + ". number: ");
       number[i] = reader.nextDouble();
     }

     System.out.println("");

     System.out.println("Given numbers in reverse order: ");
     for(int i = (number.length)-1; i >= 0; i--) {
       System.out.println(number[i]);
     }
  }
}

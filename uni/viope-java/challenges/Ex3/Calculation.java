/*
	Make a program that asks two integers from the user, counts their sum and
	prints the result on screen. Use methods from Scanner class to read the data.

	Program is written to a class called Calculation.


	Example output:
	Type the first number: -5
	Type the second number: 1
	Sum of the numbers you typed is -4
 */

import java.util.Scanner;


public class Calculation {

    public static void main(String [] args) {

        int num1 = 0;
        int num2 = 0;
        int result = 0;

        Scanner reader = new Scanner(System.in);

        System.out.print("Type the first number:");
        num1 = Integer.parseInt(reader.next());

        System.out.print("Type the second number:");
        num2 = Integer.parseInt(reader.next());

        result = num1 + num2;
        System.out.println("Sum of the numbers you typed is " + result);

	}

}

/*
  Create a Java-program that asks the user’s first name, last name and age.
  The program must combine the first and last name to a single variable so that
  the value of the variable is both names divided with a space. After this the
  program prints the name and age of the user.

  Hint:The + operator can be used to combine the names.

  Program is written to a class called AskName.


  Example output:
  Type in your last name: Matt
  Type in your first name: Jackson
  Type in your age: 15
  You are Jackson Matt and your age is 15 years.
 */

import java.util.Scanner;

public class AskName {
  public static void main(String[] args) {
    String lastName;
    String firstName;
    String name;
    int age;

    Scanner reader = new Scanner(System.in);

    System.out.print("Type in your last name:");
    lastName = reader.next();

    System.out.print("Type in your first name:");
    firstName = reader.next();

    System.out.print("Type in your age: ");
    age = Integer.parseInt(reader.next());

    name = firstName + " " + lastName;
    System.out.println("You are " + name + " and your age is " + age + " years.");

  }
}

/*
Create a program that counts the number of work hours in given time and prints
the total amount of hours, average work day length and inputted hours separately.
Program should first ask the number of days to enter, after this the program asks
the daily work hours.

Program is written to a class called Hours.


Example output:
Amount of days: 3
Type in work hours of day 1: 5
Type in work hours of day 2: 2,6
Type in work hours of day 3: 5

Total of work hours: 12.6
average work day length: 4.2
Inputted work hours: 5.0 2.6 5.0

 */

 import java.util.Scanner;

 class Main {
   public static void main(String[] args) {
     Scanner reader = new Scanner(System.in);
     double[] hours;
     int amount = 0;
     double total = 0;
     double average = 0;

     System.out.print("Amount of days: ");
       amount = reader.nextInt();

      hours = new double[amount];

      for(int i= 0; i < hours.length; ++i) {
        System.out.print("Type in work hours of day " + (i+1) + ":");
        hours[i] = reader.nextDouble();
        total += hours[i];
      }

      System.out.println("");

      System.out.println("Total of work hours: " + total);

      average = total/hours.length;
      System.out.println("Average work day length: " + average);

      System.out.print("Inputted work hours: ");
      for(int i = 0; i < hours.length; i++) {
        System.out.print(hours[i] + " ");
      }

   }
 }

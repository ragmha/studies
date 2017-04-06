/*

  The class SalaryCountingWithMethods below asks for three floating point numbers
  (work hours, salary per hour and tax percent) and then counts the salary before
  and after taxes as well as the tax part of the salary based on the information
  given to the program.

  Program to complete:

  Example output:
  Type in the number of work hours: 100
  Type in salary per hour: 11
  Type in tax percent: 8

  Salary before taxes: 1100.0
  Tax part of the salary: 88.0
  Salary after taxes: 1012.0
 */


 import java.util.Scanner;

 public class SalaryCountingWithMethods {

     public static double askHours(){
       Scanner reader = new Scanner(System.in);
       double hours;

       System.out.print("Type in the number of work hours: ");
       hours = Double.parseDouble(reader.next());

       return hours;
     }

     public static double askSalaryPerHour(){
       Scanner reader = new Scanner(System.in);
       double salaryPerHour;

       System.out.print("Type in salary per hour: ");
       salaryPerHour = Double.parseDouble(reader.next());

       return salaryPerHour;
     }


     public static double askTaxPercent(){
       Scanner reader = new Scanner(System.in);
       double taxPercent;

       System.out.print("Type in tax percent:");
       taxPercent = Double.parseDouble(reader.next());

       return taxPercent;
     }

     public static double countTaxlessSalary(double hours, double salaryPerHour) {
          return hours * salaryPerHour;
     }

     public static void main (String [] args) {
         double hours, salaryPerHour, taxPercent, taxlessSalary, taxPart;

         hours =  askHours();
         salaryPerHour = askSalaryPerHour();
         taxPercent = askTaxPercent();

         taxlessSalary = countTaxlessSalary(hours, salaryPerHour);

         taxPart = taxlessSalary * taxPercent /100;

         System.out.println("\nSalary before taxes: " + taxlessSalary);
         System.out.println("Tax part of the salary: " + taxPart);
         System.out.println("Salary after taxes: " + (taxlessSalary-taxPart));
     }

 }

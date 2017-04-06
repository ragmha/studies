/*
Create a Java-program that prints the salary of an employee before taxes, after
taxes and the amount of tax.

Program first asks for three floating point numbers (work hours, salary per hour
and tax percent) and based on these values, calculates amount of taxes and salary before and after taxes.

Hint: Amount of taxes can be calculated with the formula:

 hours*salary per hour*tax percent/100


Program is written to a class called SalaryCalculation.

		Example output:
		Type in the amount of work hours: 100
		Type in the salary per hour: 11
		Type in the tax percent: 18
		Salary before taxes: 1100.0
		Amount of tax: 198.0
		Salary after taxes: 902.0

 */
import java.util.Scanner;

public class SalaryCalculation{
  public static void main(String [] args) {

    Scanner reader = new Scanner(System.in);
    float work_hours;
    float salary_per_hour;
    float tax_percent;
    float salary_before_taxes;
    float tax_amount;
    float salary_after_taxes;

    System.out.print("Type in the amount of work hours:");
    work_hours = Float.parseFloat(reader.next());

    System.out.print("Type in the salary per hour:");
    salary_per_hour = Float.parseFloat(reader.next());

    System.out.print("Type in the tax percent:");
    tax_percent = Float.parseFloat(reader.next());

    salary_before_taxes = salary_per_hour * work_hours;
    System.out.println("Salary before taxes: " + salary_before_taxes);

    tax_amount = work_hours*salary_per_hour * tax_percent / 100;
    System.out.println("Amount of tax: " + tax_amount);

    salary_after_taxes = salary_before_taxes - tax_amount;
    System.out.println("Salary after taxes: " + salary_after_taxes);

  }

}

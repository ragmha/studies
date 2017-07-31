/*
	Example output:
	Type in your first name: Lisa


	Hi, "Lisa"
        	The name of this exercise is 'Modifying printing'.
        	Tabulator, line change and quotations have already been used in this exercise.
        	Forward slash (\) is also usable in printing.


            		*** End of exercise ***
*/


import java.util.Scanner;

class ModifiedPrinting {

  public static void main(String[] args) {

    Scanner reader = new Scanner(System.in);
    String name = "";

    System.out.print("Type in your first name:");
    name = reader.next();

    System.out.println("\n\n");

    System.out.println("Hi, " + "\"" + name + "\"" + "\n\tThe name of this exercise is 'Modifying printing'." + "\n\tTabulator, line change and quotations have already been used in this exercise." + "\n\tForward slash (\\) is also usable in printing." + "\n\n\n\t\t*** End of exercise ***");
  }

}

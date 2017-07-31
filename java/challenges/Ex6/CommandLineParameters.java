/*

Create a program that prints the number of given command line parameters and
lists them.

Program is written to a class called CommandLineParameters.


Example output:
You gave 2 command line parameters.
Below are the given parameters:
1. parameter: Matt
2. parameter: 5

*/

public class CommandLineParameters {

    public static void main(String[] args) {
        System.out.println("You gave " + args.length + " command line parameters.");
        System.out.println("Below are the given parameters: ");

        for(int i = 0; i < args.length; i++) {
            System.out.println(i + ". parameter: " + args[i]);
        }
    }

}

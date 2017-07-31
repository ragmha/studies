/**
 *
Your task is to complete the program below by writing three methods (askInfo,
copyInfo and setArray). Program should ask for integers (max 100 integers) until
the users types in zero. Integers can vary from one to one hundred and they are
stored in an array that has 100 elements. Numbers are asked for with the askInfo
method, which receives the array with numbers as parameter. Method returns the
number of integers. The number zero is not saved in the array; it is merely used
to stop giving input. The given numbers are then copied to another array which
size is the amount of given numbers.

Copying is done with copyInfo method which receives both arrays as parameters.
After this the elements of the new array
are put in ascending order with setArray method and printed on screen with
printArray method.

 Program to complete:

 1. number: -3
 2. number: 8
 3. number: 9
 4. number: -2
 5. number: 4
 6. number: 5
 7. number: 0

 */

import java.util.*;

public class RevisionExercise {

    public static int askInfo(int[] tempArray) {
        Scanner reader = new Scanner(System.in);
        int number;
        int i = 0;

        while (true){
            System.out.print((i + 1) + " number: ");
            number = reader.nextInt();
            if (number == 0) break;
            tempArray[i] = number;
            i++;
        }

        return i;
    }

    public static void copyInfo(int[] realArray, int[] tempArray) {
        for (int i = 0; i < realArray.length; i++) {
            realArray[i] = tempArray[i];
        }
    }


    public static void setArray(int[] realArray) {
        int temp;
        for(int i = 0; i < realArray.length; i++) {
            for(int j = i+1; j < realArray.length; j++) {
                if(realArray[i] < realArray[j]) {
                    temp = realArray[i];
                    realArray[i] = realArray[j];
                    realArray[j] = temp;
                }
            }
        }
    }

    public static void printArray(int[] realArray) {
        System.out.println("\nOrdered array: ");
        for (int i = 0; i < realArray.length; i++) {
            System.out.println(realArray[i]);
        }
    }

    public static void main(String[] args) {

        int[] tempArray = new int[100];
        System.out.println("Type in numbers. Type zero to quit.");
        int amountOfNumbers = askInfo(tempArray);

        int[] realArray = new int[amountOfNumbers];
        copyInfo(realArray, tempArray);

        setArray(realArray);

        printArray(realArray);
    }

}

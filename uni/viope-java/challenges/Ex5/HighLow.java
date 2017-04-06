/*

 The class HighLow below asks for three integers and prints the highest and
 lowest of them on screen.

  Example output:
  Type in the first integer: -3
  Type in the second integer: 0
  Type in the third integer: 3
  Highest number was 3 and the lowest was -3
 */

import java.util.Scanner;

 public class HighLow {

     public static int high(int number1, int number2, int number3) {
          if (number1 > number2 && number1 > number3) {
               return number1;
          }else if(number2 > number1 && number2 > number3){
               return number2;
          }else if(number3 > number1 && number3 > number2){
               return number3;
          }
     }

     public static int low(int number1, int number2, int number3) {
          if (number1 < number2 && number1 < number3) {
               return number1;
          }else if(number2 < number1 && number2 < number3){
               return number2;
          }else if(number3 < number1 && number3 < number2){
               return number3;
          }

     }

     public static void main(String[] args) {
         int number1, number2, number3, high, low;
         Scanner reader = new Scanner(System.in);

         System.out.print("Type in the first integer:");
         number1 = reader.nextInt();

         System.out.print("Type in the second integer:");
         number2 = reader.nextInt();

         System.out.print("Type in the third integer:");
         number3 = reader.nextInt();

         high = high(number1, number2, number3);
         low = low(number1, number2, number3);

         System.out.print("Highest number was " + high);
         System.out.print(" and the lowest was " + low + "\n");
     }
}

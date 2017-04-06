/*

The Java-program Matrix below first asks the user for the number of rows and
columns in a matrix. After this the program asks for the values of the elements.
Finally, program prints the elements of the matrix and their sum on screen.
When printing the matrix, values on the same row are separated using tabulator.

Example output:
Type in the number of rows: 2
Type in the number of columns: 3
Type in the element 1 of the row  1: 9
Type in the element 2 of the row  1: 8
Type in the element 3 of the row  1: 7
Type in the element 1 of the row  2: 6
Type in the element 2 of the row  2: 5
Type in the element 3 of the row  2: 4

Matrix:
9	8	7
6	5	4

Sum of the elements of the matrix: 39
 */

 import java.util.Scanner;

 public class Matrix {

     public static int[][] askInfo(int rows, int columns) {
         Scanner reader = new Scanner(System.in);
         int[][] matrix = new int[rows][columns];

         for (int i = 0; i < rows ; i ++) {
             for (int j = 0; j < columns; j++) {
                 System.out.print("Type in the element " + (j + 1) + " of the row "+ (i + 1) + " : ");
                 matrix[i][j] = reader.nextInt();
             }
         }

         System.out.println();
         return matrix;
     }

     public static void printMatrix(int[][] matrix) {
         System.out.println("Matrix: ");

         for(int row = 0; row < matrix.length; ++row){
             for(int col = 0; col < matrix[row].length; ++col) {
                 System.out.print(matrix[row][col] + "              ");
             }
             System.out.println();
         }

         System.out.println();
     }

     public static void countSum(int[][] matrix) {
         int sum = 0;

         for(int row = 0; row < matrix.length; row++) {
             for(int col= 0; col < matrix[row].length; col++) {
                 sum += matrix[row][col];
             }
         }

         System.out.println("Sum of the elements of the matrix: " + sum);
     }

     public static void main(String[] args) {
         int rows, columns;
         int matrix[][];
         Scanner reader = new Scanner(System.in);

         System.out.print("Type in the number of rows: ");
         rows = reader.nextInt();

         System.out.print("Type in the number of columns: ");
         columns = reader.nextInt();

         matrix = askInfo(rows, columns);
         printMatrix(matrix);
         countSum(matrix);
     }

 }

public class Printing {

    public static void printStars(int amount) {
        // 39.1
        // you can print one star with the command
        // System.out.print("*");
        // call this command amount times
        int num = 0;
        while (num < amount) {
            System.out.print("*");
            num++;
        }
        System.out.println("");
    }

    public static void printSquare(int sideSize) {
        // 39.2
        int num = 0;
        while (num < sideSize) {
            printStars(sideSize);
            num++;
        }
        System.out.println("");

    }

    public static void printRectangle(int width, int height) {
        // 39.3
        int num = 0;
        while (num<height){
            printStars(width);
            num++;
        }
        System.out.println("");
    }

    public static void printTriangle(int size) {
        // 39.4
        int num = 0;
        while (num < size){
            num++;
            printStars(num);
        }
        System.out.println("");
    }

    public static void main(String[] args) {
        // Tests do not use main, yo can write code here freely!
        // if you have problems with tests, please try out first
        // here to see that the printout looks correct

        printStars(5);
        System.out.println("\n---");  // printing --- to separate the figures
        printSquare(4);
        System.out.println("\n---");
        printRectangle(17, 3);
        System.out.println("\n---");
        printTriangle(3);
        System.out.println("\n---");
    }

}

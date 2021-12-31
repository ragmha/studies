/*

  The class Travel below asks for the distance of the trip and average speed the
  trip is driven at. Then the program prints the time needed to finish the trip
  in hours.

  Example output:
  Type in the length of the trip (km): 10,6
  Type in your average speed (km/h): 2
  Time needed to complete the trip is 5.3 hours.

 */

import java.util.Scanner;

public class Travel {
    public static double askDistance() {
      Scanner reader = new Scanner(System.in);
      double distance;

      System.out.print("Type in the length of the trip (km):");
      distance = Double.parseDouble(reader.next());

      return distance;
    }

    public static double askSpeed(){
      Scanner reader = new Scanner(System.in);

      double speed;

      System.out.print("Type in your average speed (km/h):");
      speed = Double.parseDouble(reader.next());

      return speed;
    }

    public static double countTime(double distance, double speed) {
       return distance / speed;
    }

    public static void main(String args[]) {
        double speed, distance, time;

        distance = askDistance();
        speed = askSpeed();
        time = countTime(distance, speed);

        System.out.println("Time needed to complete the trip is " + time + " hours.");
    }

}

/*
  Example output:
  1995:Finland was the world champion in ice hockey.
  1809: Finland went under Russian rule.
  1550: Helsinki was founded.
 */

 public class Concatenation {

     public static void main(String[] args) {

          String fourth = "9";
          String fifth = "5";

          int first = 1;
          int second = 2;
          int third = 7;

         System.out.println(first + fourth + (second + third) + fifth
              + ":Finland was the world champion in ice hockey.");

         System.out.println(first + "" + (first + third) + (first - 1) + fourth
              + ": Finland went under Russian rule.");

         System.out.println(first + fifth + fifth + (first - 1)
              + ": Helsinki was founded.");
     }

 }

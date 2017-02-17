/*

    THE FIRST VERSION OF THE CLOCK 🕕

 */

public class Main {

    public static void main(String[] args) {

        BoundedCounter minutes = new BoundedCounter(59);
        BoundedCounter hours = new BoundedCounter(23);

        int i = 0;
        while ( i < 121 ) {
            System.out.println( hours + ":" + minutes);

            minutes.next();

            if(minutes.getValue() <= 0) {
                hours.next();
            }

            i++;
        }
    }
}

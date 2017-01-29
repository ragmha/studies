import java.util.ArrayList;

public class Variance {
    public static int sum(ArrayList<Integer> list) {

        int sum = 0;

        for (int num : list) {
            sum += num;
        }

        return sum;
    }

    // This calculates the mean
    public static double average(ArrayList<Integer> list) {
        return (double) sum(list) / list.size();
    }

    public static double variance(ArrayList<Integer> list) {
        // variance^2 = sum(term in data set - mean)^2 / sample size - 1

        double sum = 0;
        double average = average(list);
        int size = list.size() - 1;

        for (int num : list) {
            sum +=  Math.pow((num - average),2);
        }

        return sum/size;
    }

    public static void main(String[] args) {
        ArrayList<Integer> list = new ArrayList<Integer>();
        list.add(3);
        list.add(2);
        list.add(7);
        list.add(2);

        System.out.println("The variance is: " + variance(list));
    }

}


import nhlstats.NHLStatistics;

import java.util.Scanner;

public class NHLStatistics {

    public static void main(String[] args) {
        Scanner reader = new Scanner(System.in);

        System.out.println("Top ten by points");
        NHLStatistics.sortByGoals();
        NHLStatistics.top(10);

        System.out.println("Top 25 players based on penalty amounts");
        NHLStatistics.sortByPenalties();
        NHLStatistics.top(25);

        System.out.println("Sidney Crosby Statistics");
        NHLStatistics.searchByPlayer("Sidney Crosby");

        System.out.println("Philadelphia Flyers Statistics");
        NHLStatistics.teamStatistics("PHI");
        NHLStatistics.sortByPoints();

        System.out.println("Players in Anaheim Ducks");
        NHLStatistics.teamStatistics("ANA");
    }
}

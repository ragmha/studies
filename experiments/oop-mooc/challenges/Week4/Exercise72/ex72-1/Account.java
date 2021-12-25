
import java.util.Scanner;

public class Accounts {

    public static void main(String[] args) {
        // Code in Account.Java should not be touched!
        // write your code here
        Account myAccount = new Account("Raghib's account", 100);

        System.out.println("Initial state");
        System.out.println(myAccount);

        System.out.println("");
        System.out.println("Depositing ...");
        myAccount.deposit(20.0);
        System.out.println(myAccount);

    }

}

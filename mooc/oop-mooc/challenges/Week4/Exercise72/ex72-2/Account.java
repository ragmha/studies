
public class Accounts {

    public static void main(String[] args) {
        // Code in Account.Java should not be touched!
        // write your code here

        Account MattsAccount = new Account("Matt's account", 1000);
        Account MyAccount = new Account("My account", 0);


        System.out.println("Current Balance");
        System.out.println(MattsAccount);
        System.out.println(MyAccount);

        System.out.println("");

        System.out.println("Withdrawal from Matt's account...");
        MattsAccount.withdrawal(100.0);
        System.out.println(MattsAccount);

        System.out.println("");

        System.out.println("Deposits to my account....");
        MyAccount.deposit(100.0);
        System.out.println(MyAccount);

        System.out.println("");

        System.out.println("Account History");
        System.out.println(MattsAccount);
        System.out.println(MyAccount);
    }

}

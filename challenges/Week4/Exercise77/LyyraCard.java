
public class LyyraCard {

    private double balance;
    public final double economicalPrice = 2.50;
    public final double gourmetPrice = 4.00;


    public LyyraCard(double balanceAtStart) {
        this.balance = balanceAtStart;
    }

    public String toString() {
        return "The card has " + this.balance + " euros";
    }

    public void payEconomical() {
       if(this.balance >= economicalPrice) {
           this.balance -= economicalPrice;
       }
    }

    public void payGourmet() {
        if (this.balance >= gourmetPrice) {
            this.balance -= gourmetPrice;
        }
    }

    public void loadMoney(double amount) {
        if (amount > 0) {
            this.balance += amount;

            if (this.balance > 150) {
                this.balance = 150;
            }
        }

    }

}

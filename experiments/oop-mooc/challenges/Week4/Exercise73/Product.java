
public class Product {
    private double price;
    private int amount;
    private String name;

    public Product(String nameAtStart, double priceAtStart, int amountAtStart){
        this.name = nameAtStart;
        this.price = priceAtStart;
        this.amount = amountAtStart;
    }

    public void printProduct(){
        System.out.println(this.name + ", price " + this.price + ", amount " + this.amount);
    }
}

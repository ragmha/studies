/*
    THE FIRST VERSION OF THE CLOCK 🕕
 */
public class BoundedCounter {
    private int value;
    private int upperLimit;

    public BoundedCounter(int upperLimit) {
        this.upperLimit = upperLimit;
    }

    public void next() {
        if (this.value < this.upperLimit) {
            this.value++;
        }else {
            this.value = 0;
        }
    }

    @Override
    public String toString() {
        return this.value < 10 ?
            "0" + this.value  : "" + this.value ;
    }

    public int getValue() {
        return this.value;
    }

}

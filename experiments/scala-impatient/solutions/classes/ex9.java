/**
* Exercise 9:
*
* Reimplement the class of the preceding exercise in Java, C#, or C++ (your choice).
* How much shorter is the Scala class?
*
**/


// Car.java
/**
 * Created by raghib on 4/3/17.
 */

public class Car {
    private String manufacturer;
    private String modelName;
    private int modelYear = -1;
    private String licensePlate = "";

    // Primary constructor
    public Car(String manufacturer, String modelName, int modelYear, String licensePlate) {
        this.manufacturer = manufacturer;
        this.modelName = modelName;
        this.modelYear = modelYear;
        this.licensePlate = licensePlate;
    }

    // Auxiliary constructor 1
    public Car(String manufacturer, String modelName, int modelYear) {
        this(manufacturer, modelName, modelYear, "");
    }

    // Auxiliary constructor 2
    public Car(String manufacturer, String modelName, String licensePlate) {
        this(manufacturer,modelName,-1,licensePlate);
    }

    // Auxiliary constructor 3
    public Car(String manufacturer, String modelName) {
        this(manufacturer, modelName, -1, "");
    }

    public String getLicensePlate() {
        return licensePlate;
    }

    public void setLicensePlate(String licensePlate) {
        this.licensePlate = licensePlate;
    }

    public String getManufacturer() {
        return manufacturer;
    }

    public String getModelName() {
        return modelName;
    }

    public int getModelYear() {
        return modelYear;
    }

    @Override
    public String toString() {
        return manufacturer + " " + modelName + " " +  modelYear + " "  + licensePlate;
    }
}

```

// Main.java

/**
 * Created by raghib on 4/3/17.
 */

public class Main {
    public static void main(String[] args) {
        Car car = new Car("Ferrari","F40",1993,"COOL921");

        System.out.println(car);

    }
}

// > Not shorter compared to Scala, however the constructors could be shorter but too much boilerplate still exists

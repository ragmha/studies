/*
About inheritance

In the last exercise of Viope C++ we practice creating an inherited class.
Below is a program that already has the class Vehicle. Main program utilizes
a method from class Car, which inherits Vehicle class. Your task is to creat
the Car class and it's methods.
*/

#include <iostream>
#include <string>
using namespace std;

class Vehicle{
    public:
    int weight;
    int top_speed;
    long driven_km;

    Vehicle(int weight, int top_speed, long driven_km);
    void Drive(int journey);
    int InputWeight();
    int InputTopSpeed();
    long InputDrivenKM();
};

Vehicle::Vehicle(int Aw, int Ats, long Akm){
    weight = Aw;
    top_speed = Ats;
    driven_km = Akm;
}

void Vehicle::Drive(int journey){
    driven_km += journey;
}

int Vehicle::InputWeight(){
    return weight;
}

int Vehicle::InputTopSpeed(){
    return top_speed;
}

long Vehicle::InputDrivenKM(){
    return driven_km;
}

class Car: public Vehicle{
    public:
    string brand;
    string model;
    string register_no;
    bool running;
    Car(int weight,int top_speed,long driven_km,string brand,string model,string register_no,bool running);
    void turn_on();
    void turn_off();
    void check_up();
};

Car::Car(int weight,int top_speed,long driven_km,string car_brand,string car_model,string car_register_no,bool car_running):Vehicle(weight,top_speed,driven_km){
    brand = car_brand;
    model = car_model;
    register_no = car_register_no;
    running = car_running;
}

void Car::turn_on(){
    running = 1;
}

void Car::turn_off(){
    running = 0;
}

void Car::check_up(){
    cout << "car info:";
    cout << "nbrand:" << brand;
    cout << "nmodel:" << model;
    cout << "nKilometres:" << driven_km;
    cout << "nweight:" << weight;
    cout << "nTop speed:" << top_speed;
    cout << "nLicense plate:" << register_no;
    if(running == 0){
        cout << "ncar is not running."<< endl;
        }else{
        cout << "ncar is running."<< endl;
    }
}

int main()
{
    int weight, speed;
    long km;
    string brand, model, license;

    // ask information about car
    cout << "Input car brand: ";
    cin >> brand;

    cout << "Input car model: ";
    cin >> model;

    cout << "Input car license plate number: ";
    cin >> license;

    cout << "Input car weight: ";
    cin >> weight;

    cout << "Input car top speed: ";
    cin >> speed;

    cout << "Input distance traveled by car: ";
    cin >> km;

    cout << endl;

    Car carX(weight, speed, km, brand, model, license, 0);

    carX.check_up();

    carX.turn_on();

    carX.Drive(95);

    cout << endl;

    carX.check_up();

    return 0;
}

/*
Circle area

Write a program that asks for the circle radius and calculates the
area of the circle based on it. In the end the area is printed on
screen. Use the approximatevalue of 3.142 for π.
User is expected to input only integers.
*/

#include<iostream>
using namespace std;

int main(){

    int radius;
    double area,PI=3.142;


    cout << "Input circle radius:";
    cin >> radius;

    area = PI * radius * radius;
    cout << "Circle area with the given radius: " << area << endl;

    return 0;
}

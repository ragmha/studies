/*
Reading input from keyboard and printing it

Write a program that asks user for two integers, calculates their sum and
prints it on screen. After printing the program shuts down.
*/


#include<iostream>
using namespace std;

int main(){

    int num1,num2,sum;

    cout << "Type the first number:";
    cin >> num1;

    cout << "Type the second number:";
    cin >> num2;

    sum = num1 + num2;

    cout << "Sum of the numbers is " << sum << endl;

    return 0;
}

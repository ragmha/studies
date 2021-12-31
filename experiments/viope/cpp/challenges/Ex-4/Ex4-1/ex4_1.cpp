/*
Calculator program

Write a program that asks user for two integers and prints the sum,
subtraction, addition and remainder of the two numbers.
*/

#include<iostream>
using namespace std;

int main(){
    int number1, number2,addition,subtraction,multiplication,remainder;

    cout << "Input first integer:";
    cin >> number1;

    cout << "Input second integer:";
    cin >> number2;

    addition = number1 + number2;
    cout << number1 << "+" << number2 << " = " << addition << endl;

    subtraction = number1 - number2;
    cout << number1 << "-" << number2 << " = " << subtraction << endl;

    multiplication = number1 * number2;
    cout << number1 << "*" << number2 << " = " << multiplication << endl;

    remainder = number1%number2;
    cout << "Remainder: " << remainder << endl;


    return 0;
}

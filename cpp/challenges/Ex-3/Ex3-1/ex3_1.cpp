/*
Euro calculator

Write a program that asks user for amount of dollars and converts
them to euros. In the end the program prints the amount of euros
on screen. The exchange rate for euros is 0.727802.
Use variables of the type double.
*/


#include<iostream>
using namespace std;

int main(){

    float dollar,euros;

    cout << "How much dollars do you want to exchange:";
    cin >> dollar;

    euros = dollar * 0.727802;
    cout << "Amount in euros: " << euros << endl;

    return 0;
}

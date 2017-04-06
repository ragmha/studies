/*
Determining if a number is odd or even

Write a program that asks user for an integer and checks if the number is
even or odd. If the number is even, program prints “Number X is even.”
and if it is odd, program prints “Number X is odd.”.
X marks the inputted number.
*/

#include <iostream>
using namespace std;

int main()
{

    int number;

    cout << "Input an integer:";
    cin >> number;

    if(number%2 == 0){
        cout << "The number"<< number << " is even." << endl;
    }
    else{
        cout << "The number"<< number << " is odd." << endl;
    }

    return 0;

}

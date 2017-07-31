/*
Factorial

Write a program that asks user for an integer n (n>0) and prints the factorial
of that number on screen. Example: factorial of n is marked with n!,
which means 1*2*3...n.
*/

#include <iostream>
using namespace std;

int main()
{

    int n, factorial=1;

    cout << "Input an integer:";
    cin >> n;

    for (int i = 1; i<=n; i++){
        factorial *= i;
    }

    cout << "The factorial of number " << n << " is " << factorial << endl;

    return 0;

}

/*
For-statement

Write a program that asks user for an integer n ((n>0) and prints the numbers
1,2,3..n on individual rows. Use for-loop in the program.

*/

#include <iostream>
using namespace std;

int main()
{
    int n;
    cout << "Input an integer:";
    cin >> n;
    for (int i = 1; i<=n; i++){
        cout << i << endl;
    }

    return 0;

}

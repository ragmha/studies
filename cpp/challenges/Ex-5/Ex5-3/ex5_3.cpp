/*
Calculations

Enhance the previous calculator program so that the user can choose which
operation he wants to perform. The program first asks for the performed
calculation. After this the program asks for the integers, performs the
calculation and prints the result. Make the choice structure with switch()
statement.

Example print
Choose from the following calculations:
=>subtraction
=>addition
=>Multiplication
=>Division
=>Remainder
*/

#include <iostream>
#include <cstring>
using namespace std;

int main()
{
    int choice, number1, number2, sum;

    cout <<
            "Choose desired calculation:" << endl <<
            "1: subtraction" << endl <<
            "2: addition" << endl <<
            "3: multiplication" << endl <<
            "4: division" << endl <<
            "5: Remainder" << endl;

        cout << "Choose a calculation:";
        cin >> choice;

        cout << "Input first number:";
        cin >> number1;

        cout << "Input second number:";
        cin >> number2;

                switch (choice){
                case 1:
                    sum = number1 - number2;
                    cout << number1 << "-" << number2 << " = " << sum << endl;
                    break;

                case 2:
                    sum = number1 + number2;
                    cout << number1 << "+" << number2 << " = " << sum << endl;
                    break;

                case 3:
                    sum = number1 * number2;
                    cout << number1 << "*" << number2 << " = " << sum << endl;
                    break;

                case 4:
                    sum = number1 / number2;
                    cout << number1 << "/" << number2 << " = " << sum << endl;
                    break;

                case 5:
                    sum = number1%number2;
                    cout << number1 << "%" << number2 << " = " << sum << endl;
                    break;

                default:
                    cout << "Next time try pressing a number between 1-5!" << endl;

                }

        return 0;

}

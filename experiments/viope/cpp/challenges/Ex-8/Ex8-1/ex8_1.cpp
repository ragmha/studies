/*
Work hour calculator

Write a program that calculates the amount of work hours in a given time frame
and prints the total amount of hours, the average work day length and inputted
hours separated by spaces. The program first asks how many days will be inputted
(max. 30 days). After this the program proceeds to ask the daily work hours.
*/

#include <iostream>
using namespace std;

int main(){

    float days[30],sum=0,average=0;
    int index , num;

    cout << "The program calculates the total amount of" << endl <<
    "work hours during a given time frame and the average work day length."
    << endl;

    cout << "How many days:" << endl;
    cin >> num;

    for (index = 1; index <= num; index++){
        cout << "Input hours of workday " << index <<": ";
        cin >> days[index];
        sum += days[index];
        average = sum / num;
     }
    cout << "Total work hours: " << sum << endl;
    cout << "Average work day length: " << average << endl;
    cout << "Inputted hours: ";
    for (index = 1; index <= num; index++){
        cout << days[index] << " ";
    }
    cout << endl;

    return 0;
}

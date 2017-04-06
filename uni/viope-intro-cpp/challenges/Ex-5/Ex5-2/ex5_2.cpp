/*
Comparison operators

Write a program that asks the users gender and age.
Finally the program prints a sentence based on the following rule:
* Male 0-55 years: "You are a man in his prime!"
* Male 56-100 years: "You are a wise man!"
* Female 0-55 years: "You are like a blooming flower!"
* Female 56-100 years: "You look young for your age!"
* Else "Error encountered!"
Age is handled as an integer variable and gender as string variable (m/f).
Letter case is ignored.
*/


#include <iostream>
#include <cstring>
using namespace std;

int main()
{
    char gender;
    int age;

    cout << "Are you a male or a female (m/f):";
    cin >> gender;

    cout << "Your age:";
    cin >> age;

    if(gender == 'm')
    {
        if(age > 0 && age < 55){
            cout << "You are a man in his prime!" << endl;
            }else if (age > 56 && age < 100){
            cout << "You are a wise man!"<< endl;
        }
    }
    else if(gender == 'f'){
        if(age > 0 && age < 55){
            cout << "You are like a blooming flower!"<< endl;
            }else if (age > 56 && age < 100){
            cout << "You look young for your age!"<< endl;
        }
    }
    else {
        cout << "Error encountered!"<< endl;
    }

    return 0;
}

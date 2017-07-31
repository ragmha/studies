/*
Functions smallest and largest

Below program asks user for three integers and prints the smallest and largest
of those three on screen. Your task is to write the missing functions (largest()
and smallest ()), which receive the user input as parameters and return the
largest and smallest integers, respectively.
*/

#include <iostream>

using namespace std;

int largest(int first, int second, int third);

int smallest(int first, int second, int third);

int main()

{

    int number1, number2, number3, largestnumber,smallestnumber;

    cout << "Input the first integer";

    cin >> number1;

    cout << "Input the second integer:";

    cin >> number2;

    cout << "Input the third integer:";

    cin >> number3;

    largestnumber = largest(number1, number2, number3);

    smallestnumber =smallest(number1, number2, number3);

    cout << "The largest number was " << largestnumber;

    cout << " and the smallest " <<smallestnumber << "." << endl;

    return 0;
}


int largest(int first, int second, int third){

    int answer;

    if (first > second && first > third){
        answer = first;
    }
    else if (second > first && second > third){
        answer = second;
    }
    else{
        answer = third;
    }

    return answer;
}

int smallest(int first, int second, int third){
    int answer;

    if (first < second && first < third){
        answer = first;
    }
    else if (second < first && second < third){
        answer = second;
    }
    else{
        answer = third;
    }

    return answer;
}

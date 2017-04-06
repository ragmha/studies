/*
Calculating hypotenuse

Write a program that calculates the hypotenuse of an orthogonal triangle
based on the triangle legs inputted by the user. The leg lengths are
assumed to be integers and the hypotenuse value is assigned into a double
type variable.
*/

#include<iostream>
#include<cmath>

using namespace std;

int main(){
    int leg,leg2,sum;
    double root;

    cout << "Input first triangle leg:";
    cin >> leg;

    cout << "Input second triangle leg:";
    cin >> leg2;

    sum = pow(leg,2) + pow(leg2,2);
    root = sqrt(sum);

    cout << "Hypotenuse length: " << root << endl;

    return 0;
}

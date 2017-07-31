/*
Numbers and processing them

Write a program that first asks the user for an integer and after that, a
floating-point number. Finally, the program prints both numbers on the screen.
The floating-point number shall be printed with two decimal places of precision.
*/
#include<stdio.h>

int i;
float x;

int main()
{
    printf("Enter an integer:");
    scanf("%d",&i);

    printf("Enter a decimal number:");
    scanf("%f",&x);

    printf("You entered the integer: %d n",i);
    printf("You entered the decimal number, rounded to two decimal places: %.2f n" ,x);


    return 0;
}

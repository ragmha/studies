/*
Reading from the keyboard and printing

Write a program that prompts the user for an integer, calculates the square and
prints the result on the screen (also print out a newline character \n after the
result). After printing, the program closes itself.

*/

#include<stdio.h>

int main()
{
    int num1,sqr=0;

    printf("\nEnter an integer:");
    scanf("%d",&num1);

    sqr = num1 * num1;

    printf("\nThe square of the number you entered is %d",sqr);

    return 0;
}

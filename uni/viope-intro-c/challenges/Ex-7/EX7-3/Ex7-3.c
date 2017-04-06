/*
Using functions

Write a program that takes three integers as input and prints the smallest and
largest of these numbers. The main program must prompt for integers and read
them. Write the functions largest() and smallest() that receive the entered
numbers as their parameters. Correspondingly, the functions shall return values
corresponding to their names.
*/
#include<stdio.h>

int largest(int a,int b, int c);
int smallest(int a,int b ,int c);

int main()
{
    int max,min,num1, num2, num3;
    printf("Enter the 1. number:");
    scanf("%d", &num1);
    printf("Enter the 2. number:");
    scanf("%d", &num2);
    printf("Enter the 3. number:");
    scanf("%d", &num3);

    max = largest(num1, num2, num3);
    min = smallest(num1, num2, num3);

    printf("Among the numbers you entered,\nthe largest was %d and the smallest was %d.",max,min);


    return 0;
}

int largest(int a, int b, int c)
{
    int max;

    if (a > b && a >c){
        max = a;
    }
    else if (b > a && b > c){
        max = b;
    }
    else
    {
        max = c;
    }

    return max;
}

int smallest(int a, int b, int c)
{
    int min;

    if (a < b && a < c){
        min = a;
    }
    else if (b < a && b < c){
        min = b;
    }
    else
    {
        min = c;
    }

    return min;
}

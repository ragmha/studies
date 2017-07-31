/*
Calculations

Write a program that prompts the user for two integers and prints the sum,
difference and product of the numbers on the screen.



*/

#include <stdio.h>

int main()
{
    int x,y,sum,sub;
    int mul;

    printf("Enter the first number:");
    scanf("%d",&x);

    printf("Enter the second number:");
    scanf("%d",&y);

    sum = x + y;
    printf("%d+%d=%dn",x,y,sum);

    sub = x -y;
    printf("%d-%d=%dn",x,y,sub);

    mul = x * y;
    printf("%d*%d=%dn",x,y,mul);


    return 0;
}

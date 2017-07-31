/*
Factorial

Write a program that prompts the user for an integer n (n>0) and prints the
factorial of the number on the screen. For example, the factorial of n is
designated n!, which means the number calculated as follows: 1*2*3...*n
*/



#include<stdio.h>

int main()
{
    int c,n,fact=1;

    printf("Enter an integer: ");
    scanf("%d",&n);

    for(c=1; c<=n ; c++){
        fact = fact * c;
    }

    printf("The factorial of %d is %d",n,fact);
    return 0;
}

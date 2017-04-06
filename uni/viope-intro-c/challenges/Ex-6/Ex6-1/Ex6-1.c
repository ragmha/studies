/*
For statement

Write a program that prompts the user for an integer n (n>0) and prints the
numbers 1,2,3...n on the screen one below the other. Write the program using the
FOR statement.
*/

#include<stdio.h>

int main()
{
    int i,n;

    printf("Enter an integer:");
    scanf("%d",&n);

    for(i=1 ; i<=n ; i++)
    {
        printf("%dn",i);
    }

    return 0;
}

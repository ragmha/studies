/*
Checking if a number is even

Write a program that prompts the user for an integer and checks whether it is
even or odd. If the number is even, print the value 0, and if it is odd,
print the value 1.

*/

#include<stdio.h>

int main()
{

    int x,ans;

    printf("Enter an integer:");
    scanf("%d",&x);

    ans = x%2;

    printf("The number is %d",ans);


    return 0;
}

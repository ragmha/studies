/*
Checking if a number is even

Write a program that prompts the user for an integer and checks whether it is
even or odd. If the number is even, print "Number 2 is even.", if it is odd,
print "Number 1 is odd.".
*/

#include <stdio.h>

int main()
{
    int x;

    printf("Enter an integer: ");
    scanf("%d",&x);

    if(x%2 == 0){
        printf("Number %d is even.n" ,x);
    }
    else
    printf("Number %d is odd.n" ,x);

    return 0;
}

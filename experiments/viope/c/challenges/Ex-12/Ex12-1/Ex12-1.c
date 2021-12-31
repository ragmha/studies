/*
Changing a number

The following is a simple C program that prompts the user for an integer and
stores it in the variable x. The program prints the number, calls the subroutine
"change_number" passing the number as an argument, and finally prints the number
again:

*/
#include<stdio.h>

void change_number(int x);

int main()
{
    int x;

    printf("Enter the number x: ");
    scanf("%d", &x);

    printf("In the main program: x = %dn", x);

    change_number(x);

    printf("In the main program: x = %dn", x);
}


void change_number(int x) {
    x += 3;

    printf("In the subroutine: x = %dn", x);
}

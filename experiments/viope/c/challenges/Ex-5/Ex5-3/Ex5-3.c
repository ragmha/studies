/*
Calculations

Write a simple calculator program that calculates the difference, sum or product
of two numbers. First, the program asks which calculation to perform. After this,
the program prompts for the numbers, performs the calculation and prints the
result. The selection within the program has to be done using a switch() statement.
*/


#include<stdio.h>
int main()
{

    int select,num1,num2,x;

    printf("1: subtraction  n2: addition n3: multiplication");
    printf("nSelect function:");
    scanf("%d",&select);

    switch(select)
    {
        case 1:
        {

            printf("nEnter the first number:");
            scanf("%d",&num1);
            printf("nEnter the second number:");
            scanf("%d",&num2);
            x= num1 - num2;
            printf("n %d - %d = %d",num1,num2,x);
            break;
        }
        case 2:
        {

            printf("nEnter the first number:");
            scanf("%d",&num1);
            printf("nEnter the second number:");
            scanf("%d",&num2);
            x= num1 + num2;
            printf("n %d + %d = %d",num1,num2,x);
            break;
        }
        case 3:
        {

            printf("nEnter the first number:");
            scanf("%d",&num1);
            printf("nEnter the second number:");
            scanf("%d",&num2);
            x= num1 * num2;
            printf("n %d * %d = %d",num1,num2,x);
            break;
        }



    }

    return 0;
}

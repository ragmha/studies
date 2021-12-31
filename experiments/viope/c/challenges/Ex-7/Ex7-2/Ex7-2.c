/*
Calculations

Write a calculator program that calculates the sum, difference or product of
two integers. The program asks for the type of calculation first
(1 = sum, 2 = difference, 3 = product). After calculation, the result is printed
on the screen and the program returns to prompt for the next calculation.

You should write a function for each calculation, prompting for the numbers,
performing the desired calculation and printing the answer on the screen.
The program is terminated by entering a negative number just like in the previous
exercise.
*/



#include<stdio.h>

int sum(int num1, int num2);
int difference(int num1, int num2);
int product(int num1, int num2);


int main()
{
    int choice, answer,num1,num2;
    do{
        printf("\n1: sum of two numbers\n2: difference of two numbers\n3: product of two numbers \n<0: terminate the program\n");
        printf("Select calculation:");
        scanf("%d", &choice);

        if (choice <0)
        {
            printf("Terminating the program...\n");
        }
        else if (choice == 1)
        {
            printf("Enter the first number:");
            scanf("%d", &num1);

            printf("Enter the second number:");
            scanf("%d", &num2);

            answer =sum(num1,num2);

            printf(" %d + %d = %d",num1,num2,answer);
        }
        else if (choice == 2)
        {
            printf("Enter the first number:");
            scanf("%d", &num1);

            printf("Enter the second number:");
            scanf("%d", &num2);

            answer = difference(num1, num2);

            printf(" %d - %d = %d", num1, num2, answer);
        }
        else if (choice == 3)
        {
            printf("Enter the first number:");
            scanf("%d", &num1);

            printf("Enter the second number:");
            scanf("%d", &num2);

            answer = product(num1, num2);

            printf(" %d * %d = %d", num1, num2, answer);
        }

        else{
            printf("You entered the wrong choice");
        }
    } while (choice > 0);
    return 0;

}

int sum(int num1, int num2)
{
    int answer;

    answer = num1 + num2;

    return answer;

}

int difference(int num1, int num2)
{
    int answer;

    answer = num1 - num2;

    return answer;

}

int product(int num1, int num2)
{
    int answer;

    answer = num1 * num2;

    return answer;

}

/*
Working hours calculator

Write a program that calculates the number of hours worked within a specific
period and prints the total number of hours, the average length of a day and an
itemisation of the hours entered. First, the program must ask how many days of
working hours shall be entered (max 30 days). After this, the program asks for
the daily working hours. The program output shall have one decimal place of
precision.
*/

#include<stdio.h>


int main(){

    printf("The program calculates the total hours worked during \na specific period and the average length of a day.\n");


    float hours[30];
    int index;
    int days = 0;
    float total = 0;

    printf("How many days:");
    scanf("%d", &days);
    for (index = 0; index < days; index++)
    {
        printf("Enter the working hours for day %d:",index+1);
            scanf("%f", &hours[index]);

            total += hours[index];
    }

    printf("\nTotal hours worked: %.1f\n", total);
    printf("\nAverage length of day: %.1f\n", total / days);
    printf("Hours entered:");
    for (index = 0; index < days; index++)
    {
        printf("%.1f", hours[index]);
    }

    return 0;
}

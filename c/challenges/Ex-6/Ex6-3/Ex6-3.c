/*
Calculating an average, loop structure

Write a program that asks for the students' exam scores (using integers 4 to 10)
and calculates the average. The program must accept scores until entry is
terminated by a negative integer. Finally, the program prints out the number of
scores and the calculated average with two decimal places of precision.

*/

#include<stdio.h>
int main()
{
    int num_entrd, count = 0,sum=0;
    float avg;

    printf("The program calculates the average of scores you enter.n");
    printf(" End with a negative integer.n");
    do
    {
        printf("Enter score(4-10):");
        scanf("%d", &num_entrd);

        if (num_entrd >= 4 && num_entrd <= 10)
        {
            count++;
            sum = sum + num_entrd;
            avg =(float)sum/ count;
        }
        else if (num_entrd <= 0)
        {
            printf("You entered %d scores.", count);
            printf("nAverage score : %.2f", avg);
        }
    }while (num_entrd >= 4 && num_entrd <= 10);

    return 0;
}

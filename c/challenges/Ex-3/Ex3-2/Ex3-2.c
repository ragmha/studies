/*
Processing and printing values received as input

Write a program that prompts the user for an amount in Finnish markka and
converts it to euro. Finally, the program prints the amount on the screen in
euro with two decimal places of precision. The euro conversion factor is 5.94573.

*/

#include<stdio.h>

int main()
{
    float conversion_factor = 5.94573;
    float markka;
    float euro;


    printf("Enter an amount in FIM:");
    scanf("%f",&euro);

    markka = euro / conversion_factor;

    printf("FIM converted to euro: %.2fn",markka);


    return 0;
}

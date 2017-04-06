/*
Handling matrices

The following is the initialisation of a 5 x 5 integer array:

int matrix[5][5] =
{
4, 6, 25, 88, 5,
34, 5, 300, 4, 65,
78, 43, 11, 90, 125,
98, 585, 12, 63, 21,
45, 35, 9, 5, 1
};

Copy the initialisation into a program that prints the array on the screen and
calculates the sum of the elements. Each line shall be followed by a newline
character.
*/
#include <stdio.h>

int main()
{

    int the_matrix[5][5] = {
        4, 6, 25, 88, 5,
        34, 5, 300, 4, 65,
        78, 43, 11, 90, 125,
        98, 585, 12, 63, 21,
        45, 35, 9, 5, 1
    };
    

    int sum=0,y, x;


    printf("In the array:\n");
    for (y = 0; y < 5; y++)
    {
        for (x = 0; x < 5; x++)
        {

            printf("%d ", the_matrix[y][x]);
            sum = sum + the_matrix[y][x];
        }
        printf("\n");

    }

    printf("\n\n");

    printf("the sum of the elements is %d\n",sum);
}

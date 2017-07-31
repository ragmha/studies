/*
Reading from a file

The file "numbers.s" contains 4 integers. The numbers are on the first line of
the file, separated by spaces. Write a program that reads the integers from the
file and calculates their sum. Finally, the program prints the numbers and the
sum on the screen.

*/

#include<stdio.h>

int main()
{

    FILE *file_handle;
    int num1,num2,num3,num4,sum=0;

    if((file_handle = fopen("numbers.s","r")) == NULL){
        printf("FILE DOESNT EXIST");
        return 0;
    }
    else
    {
        fscanf(file_handle,"%d %d %d %d ",&num1,&num2,&num3,&num4);
        fclose(file_handle);

        printf("Numbers found in the file numbers.s:n");
        printf("%d, %d, %d and %d n",num1,num2,num3,num4);

        sum=num1+num2+num3+num4;

        printf("Sum of the numbers: %d n",sum);
    }
    
    return 0;
}

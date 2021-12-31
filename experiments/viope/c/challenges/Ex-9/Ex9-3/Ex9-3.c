/*
Handling files

The files "mata.txt" and "matb.txt" contain integer matrices of size 10 x 10.
Write a program that calculates the sum of the matrices in a new matrix.
The resulting sum matrix shall be saved to the file "sum.usr".

The matrix elements are separated by spaces and newlines. For example:

1 2 3 4 5 6 7 8 9 10
11 12 13 14 15 16 17 18 19 20
... ... ...
... ... ...
91 92 93 94 95 96 97 98 99 100

The sum matrix must be saved in the same format. At the end, the program prints
a message indicating successful completion.
*/
#include<stdio.h>

int main()
{
    int matrix_a[10][10];
    int matrix_b[10][10];
    int sum[10][10];
    int x,y;

    FILE *read_file1,*read_file2;
    FILE *write_file;

    read_file1 = fopen("mata.txt","r");
    for(y=0;y<10;y++)
    {
        for(x=0;x<10;x++)
        {
            if(x==9)
            {
                fscanf(read_file1, "%d", &matrix_a[y][x]);
            }
            else{
                fscanf(read_file1, "%d,", &matrix_a[y][x]);
            }
        }

    }
    fclose(read_file1);

    read_file2 = fopen("matb.txt","r");
    for(y=0;y<10;y++)
    {
        for(x=0;x<10;x++)
        {
            if(x==9)
            {
                fscanf(read_file2, "%d", &matrix_b[y][x]);
            }
            else{
                fscanf(read_file2, "%d,", &matrix_b[y][x]);
            }
        }

    }

    fclose(read_file2);


    for(y=0;y<10;y++)
    {
        for(x=0;x<10;x++)
        {
            sum[y][x]=0;
            sum[y][x] = matrix_a[y][x] + matrix_b[y][x];
        }
    }


    if((write_file = fopen("sum.usr","w")) == NULL){
        printf("Failed to open file (sum.usr))");
    }
    else{
        for(y=0;y<10;y++)
        {
            for(x=0;x<10;x++)
            {
                if(x== 9)
                {
                    fprintf(write_file, "%dn", sum[y][x]);
                }
                else
                {
                    fprintf(write_file, "%d ", sum[y][x]);
                }
            }
        }

    }
    fclose(write_file);

    printf("The sum of the matrices has been calculated into the file sum.usr.");
    
    return 0;
}

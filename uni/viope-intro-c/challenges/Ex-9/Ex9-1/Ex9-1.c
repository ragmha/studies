/*
Writing into a file

Write a program that prints the text "Hello world!" into the file "hello.usr".
The file does not exist, so it must be created. Finally, the program must print
a message on the screen indicating that writing to the file was successful.
The text printed to the file must exactly match the assignment.

*/

#include<stdio.h>

int main()
{
    FILE *file_handle= fopen("hello.usr","w");
    fprintf(file_handle,"Hello world!");
    fclose(file_handle);
    printf("Writing to the file was successful.n");
    printf("Closing the program.n");

    return 0;
}

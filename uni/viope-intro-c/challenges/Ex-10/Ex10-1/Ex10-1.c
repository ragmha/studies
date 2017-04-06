/*
Files and strings

Write a program that asks for the user's first and last name and saves these into
a file named by the user.

The program must start by asking for the first name. The last name is entered next,
followed by the desired file name. The first part of the file name may have a
maximum of 8 characters and the second part may have 3 (for example: personal.usr).
The file must reside in the same directory as the program.

The last name can have a maximum of 20 characters, the first name 15.
*/

#include<stdio.h>

void main()
{
    char name[11];
    char first[15];
    char second[20];
    FILE* new;
    printf("The program saves your first and last name into a file.n");

    printf("Enter your first name:n");
    scanf("%s",&first[0]);
    printf("Enter your last name:n");
    scanf("%s",&second[0]);
    printf("File where you want to save your name:nn");
    scanf("%s",&name[0]);
    new=fopen(name,"w");
    fprintf(new,"%s",first);
    fprintf(new,"%s",second);
    printf("Successfully saved the data!");
    fclose(new);

}

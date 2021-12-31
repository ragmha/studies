/*
Phone directory - adding data

In this chapter, we create independent programs that are closely associated with
each other. All the programs are components of a phone directory program.
The intention is that you can continue your programming exercises by programming
a phone directory. The exercises in this chapter can easily be converted into
functions for a larger entity.

The name and number data for the phone directory are contained in the file
"phonedir.txt" which has the following format:

4
Firstname Lastname 050-3500980
John Doe 041-3478924
Brian Smith 040-3980982
Brita Smith 05-4567393

The first line of the file indicates the number of names added to the directory
as an integer. The first name, last name and telephone number are processed in
text format. The data items are separated by spaces in the file, and the length
of an individual item (such as a first name) may be no more than 20 characters.
Each line includes the information for one person only. The directory may
contain a maximum of 50 people. Your first task is to write a program for adding
a new telephone number to the directory. Upon execution, the program must first
ask for a first name, after which it prompts for a last name and a telephone
number. When data is saved, the value on the first line of the file must increase
by one. Note that in order to simplify the exercise, the data to be entered may
not include a newline character, for example. Each personal data item is stored
on its own line. (Remember the newline character.)
*/


#include <stdio.h>
#include <string.h>

int main() {

    FILE *f;
    char fname_write[20];
    char lname_write[20];
    char telephone_write[20];
    char fname_read[20];
    char lname_read[20];
    char telephone_read[20];

    struct person {
        char fname[20];
        char lname[20];
        char telephone[20];
    } person_list[50];
    int i, n;

    /* Read file and populate structure */
    f = fopen("phonedir.txt", "r");
    printf("Enter first name:");
    scanf("%s", fname_write);

    printf("Enter last name:");
    scanf("%s", lname_write);

    printf("Enter telephone number:");
    scanf("%s", telephone_write);

    fscanf(f, "%dn", &n);

    for(i = 0; i < n; i++) {
        fscanf(f, "%s", fname_read);
        fscanf(f, "%s", lname_read);
        fscanf(f, "%s", telephone_read);

        strcpy(person_list[i].fname, fname_read);
        strcpy(person_list[i].lname, lname_read);
        strcpy(person_list[i].telephone, telephone_read);
    }
    strcpy(person_list[i].fname, fname_write);
    strcpy(person_list[i].lname, lname_write);
    strcpy(person_list[i].telephone, telephone_write);
    fclose(f);

    /* Write file */
    f = fopen("phonedir.txt", "w+");

    fprintf(f, "%dn", ++n);
    for(i = 0; i < n; i++) {
        fprintf(f, "%s ", person_list[i].fname);
        fprintf(f, "%s ", person_list[i].lname);
        fprintf(f, "%sn", person_list[i].telephone);
    }

    fclose(f);
    printf("Successfully saved the data.n");

    return 0;
}

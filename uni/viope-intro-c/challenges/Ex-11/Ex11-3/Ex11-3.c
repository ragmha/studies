/*
Phone directory - removing a person's data

Write a program for removing a specific person's data from the directory.
The program asks for a first name followed by a last name.
The program checks if the person's data can be found.
If the person is in the directory, the data is removed.
Otherwise print an error message.

*/
#include <stdio.h>
#include <string.h>

int main() {

        FILE *f;
        char fname_write[20];
        char lname_write[20];
        char fname_read[20];
        char lname_read[20];
        char telephone_read[20];
        struct person {
            char fname[20];
            char lname[20];
            char telephone[20];
        } person_list[50];
        int found = 0;
        int i, n;

        /* Read file and populate structure */
        f = fopen("phonedir.txt", "r");
        printf("Enter first name:");
        scanf("%s", fname_write);

        printf("Enter last name:");
        scanf("%s", lname_write);

        fscanf(f, "%d\n", &n);
        for(i = 0; i < n; i++) {
                fscanf(f, "%s", fname_read);
                fscanf(f, "%s", lname_read);
                fscanf(f, "%s", telephone_read);
                if (!strcmp(fname_read, fname_write) && !strcmp(fname_read, fname_write)) {
                    i--;
                    found = 1;
                } else {
                    strcpy(person_list[i].fname, fname_read);
                    strcpy(person_list[i].lname, lname_read);
                    strcpy(person_list[i].telephone, telephone_read);
                }
        }
        fclose(f);

        /* Write file */
        if (found == 1) {
            f = fopen("phonedir.txt", "w+");
            fprintf(f, "%d\n", --n);
            for(i = 0; i < n; i++) {
                    fprintf(f, "%s ", person_list[i].fname);
                    fprintf(f, "%s ", person_list[i].lname);
                    fprintf(f, "%s\n", person_list[i].telephone);
            }
            fclose(f);
            printf("Data removed from the directory.\n");

        } else {

            printf("Data not found.\n");
        }

        return 0;
}

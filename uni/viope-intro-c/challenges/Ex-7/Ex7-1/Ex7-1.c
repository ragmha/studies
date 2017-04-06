/*
Handling functions

Your task is to supplement the source code below with the missing functions.
The program prints the following text in accordance with the user's selections:


Choice 1: "The cat says meow!"
Choice 2: "The dog says wuff-wuff!"
Choice 3: "The cow says moo!"


Upon execution, the program asks the user to select one of the animals.
Once selected, the program calls a function that prints out the correct utterance.
After executing the function, the program returns to ask the user for a new choice.
The program is terminated by a negative integer.
*/

#include <stdio.h>

void cat(void);
void dog(void);
void cow(void);

void main()
{
  int choice;
  do{

    printf("1:cat\n2:dog\n3:cow\n");
    printf("End with a negative number.\n");
    printf("Select animal:");
    scanf("%d", &choice);
    if(choice < 0) {
      printf("Terminating the program...");
    }
    else if(choice == 1) {
      cat();
    }
    else if(choice == 2) {
      dog();
    }
    else if(choice == 3) {
      cow();
    }
    else {
      printf("You entered an invalid number.\n\n");
    }
  }while(choice>0);
}

void cat(){

    printf("The cat says meow!\n" );
}

void dog(){

    printf("The dog says wuff-wuff!\n" );
}

void cow(){

    printf("The cow says moo!\n");
}

/*
Processing strings

Write a program that prompts the user for a word (max 15 lower-case letters) and
calculates the number of wovels (a, e, i, o, u, y) in the word. Hint:
You have learned to compare the value of a character variable to 'a', for example.
You can use an index to refer to single characters in a string array.
(char[] = "word"; word[1] == 'a';)
*/

#include<stdio.h>

void main()
{
    char word[15];
    int i=0;
    int count=0;
    printf("The program calculates the number of wovels.n");
    printf("Enter a word:");
    scanf("%s",&word[0]);

    while(word[count]!='')
    {
        if(word[count]=='a'||word[count]=='e'||word[count]=='i'||word[count]=='o'||word[count]=='u')
        {
            i++;
        }
        count++;
    }
    printf("The word contains %d wovels.n",i);
}

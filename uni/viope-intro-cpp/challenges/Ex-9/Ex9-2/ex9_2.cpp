/*
Object interaction

Below is a simpler version of the previous program but the idea is still the same.
Program creates an object names “thing”, which is an instance of the class
“AskAndPrint”. Your task is to write the class “AskAndPrint” and create a method
“DoYourThing()” that receives the string from the variable “text”, prints it's
contents, reads user input and prints it on screen. Write only the missing class
in the below text box. The functionality of the complete program can be seen
in the example print.
*/

#include <iostream>
#include <string>
using namespace std;

// your code here
class AskAndPrint{
public:
    string text;
    void DoYourThing(string text);
};

 void AskAndPrint::DoYourThing(string text){
    cout << text;
    std::getline (std::cin,text);
    cout << text << endl;
 }


int main (void)
{
   char charstring[] = "Write the text for printing:";

   AskAndPrint thing;

   thing.DoYourThing(text);

   return 0;
}

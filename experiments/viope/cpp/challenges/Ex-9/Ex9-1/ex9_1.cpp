/*
Introducing objects

The below program creates an object called “printer” in a class called
“PrintClass” and then uses the object to print text.
Your task is to write the class “PrintClass” and the required method.
(You don't need to copy the below code in the text box).
*/

#include <iostream>
#include <string>
using namespace std;

// your code here
  class Printclass{
  public:
      string text;

      void print(string text);
    };

      void Printclass::print(string text){
          cout << text << endl;
    }

int main()
{
  char charstring[50];

  cout << "Input a character string for printing:";
  cin.get(charstring, 50);

  PrintClass printer;
  printer.print(charstring);

  return 0;
}

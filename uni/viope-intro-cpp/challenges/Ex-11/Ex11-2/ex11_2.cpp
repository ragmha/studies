/*
Students from a file

Write a program that reads characters and strings from the file students.txt and
prints them on screen. Follow the format of the example print.

Every student's information is in it's individual row in the file. If the program
fails to open the file, it prints “Failed to open file!” on screen. After this
the program execution ends.

For example, if the contents of students.txt is:

Z Andy Arkinson

Y Bob Bender

, information is printed as follows:

Andy Arkinson: class Z

Bob Bender: class Y
*/

#include <iostream>
#include <fstream>

using namespace std;

int main(){
    fstream file;//create file object
    char file_name[] = "students.txt";
    string full_name;
    char school_class;
    file.open(file_name,ios_base::in);//Read file

    if(!file.is_open()){
        cout << "Failed to open file!";
        return -1;
    }

    while(file >> school_class && getline(file,full_name)){
        full_name=full_name.substr(1, full_name.length()-1);
        cout << full_name << ": class " << school_class << endl;
    }

    file.close();

    return 0;

}

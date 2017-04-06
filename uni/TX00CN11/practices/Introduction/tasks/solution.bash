#!/usr/bin/env bash

#  You are currently in the **wadams** home directory. Enter the command **ls -l** to see a listing of the files in the directory

ls -l

# Enter the command **rm old_myfile.txt** to delete the file **old_myfile.txt**

rm old_myfile.txt

# Enter the command **ls -l** to see that the file **old_myfile.txt**is removed from the directory

ls -l

# Create a new file in the **wadams** home directory by entering the command **touch new_myfile.txt**

touch new_myfile.txt

# Enter the command **ls -l** to see that the file **new_myfile.txt** is created

ls -l

# Use the **vi** editor to open the file **new_myfile.txt** for editing by entering the command **vi new_myfile.txt**

vi new_myfile.txt

# Press the **i** key to enter insert mode in vi

vi

# Enter the text, **"Test text for my new_myfile.txt"**

# //Test text for my new_myfile.txt

# Press the **ESC** key and enter **:wq** to save and exit the file

:wq

# Copy the file **new_myfile.txt** to the **practice** directory by entering the command **cp new_myfile.txt /home/wadams/practice**

cp new_myfile.txt /home/wadams/practice

# Move to the **practice** directory by entering the command **cd /home/wadams/practice**

cd /home/wadams/practice

# Enter the command **ls -l** to see that the file **new_myfile.txt** is in the **/home/wadams/practice** directory

ls -l

# Rename the file **new_myfile.txt** by entering the command **mv new_myfile.txt final_myfile.txt**

mv new_myfile.txt final_myfile.txt

# Enter the command **ls -l** to see that the file name has changed to **final_myfile.txt**

ls -l

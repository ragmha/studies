# Creating Multiple Directories

```bash
mkdir Ex{1..50}  # Creates 50 directories from Ex1-Ex50
mkdir -p Ex{1..50}/exx{1..50}  # Each of the directories will hold 50 times exx1-50
mkdir {a-z}12345  # 26 directories from a12345 through z12345
mkdir {1,2,3} # comma separated list makes dirs 1, 2 and 3.
mkdir -p `date '+%y%m%d'`/{1,2,3} # current date as a directory and 1,2,3 in it.
mkdir -p $USER/{1,2,3} # current user as a directory and 1,2,3 in it.
```

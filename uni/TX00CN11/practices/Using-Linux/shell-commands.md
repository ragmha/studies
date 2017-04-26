# Shell Commands


## Path Environment Variable
* List of directories


## Options for Running Executables
* Enter the full path to the executable file
* Switch to the directory where the executable file resides. Then add `./` to the beginning of the command
* Add the directory where the executable resides to the `PATH environment variable`


* Filenames are `case-sensitive`

## Using exec
* Syntax: `exec` `executable_file`
* The new process created by the command replaces the shell process from which it was launched
* When you exit out of the application, it is as if the shell itself was terminated

## Command completion (Tab Complete)


## Command History
* Last command entered
* `CTRL + R`
* HISTSIZE OR HISTFILESIZE 1000
* HISTCONTROL VALS --> `ignore dups`, `ignorespace`, `ignoreboth`, `erasedups`

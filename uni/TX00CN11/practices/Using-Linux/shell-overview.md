# Shell Overview

* The Linux shell is the Command Line Interface (CLI) or Text User Interface (TUI) that administrators use to control a Linux operating system.
* Users and programs use the shell to send commands to the system.
* A Linux shell, or terminal session, can be opened from an applications menu inside a Graphical User Interface (GUI) session, or the Linux shell might be the sole method used to run the computer.

## Linux Shells

* sh (Bourne Shell) Default shell used by the most linux distributions
* bash (Born-Again Shell)
* csh (C Shell)
* tsch (Improved version csh)
* zsh (Z shell *Improved version of bash shell*)


## Viewing the Current Shell

```bash
$ echo $SHELL
```

## Switching between sessions
`ALT + FN(N)`

## Common characteristics of shells
* The shell provides a command line interface that allows the user to interact with the Linux kernel.
* A Linux system can run multiple shell sessions at the same time.
* A list of installed shells is stored in the `/etc/shells` file.
* One shell session can run within another shell session. This may be done interactively, such as when a user starts a second shell from the first shell's command line or automatically by scripts or programs.
* Shells use configuration files to establish their operating environments.

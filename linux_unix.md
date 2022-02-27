# Linux and Unix Commands

## Shell

It is a command line interface in which will take all the things or commands as input. So Basically Shell is a command line tool.
Eg: zsh, git, powershell, bash.

## Commands in Linux/Unix

### To get present working directory

```
pwd
```

### List file and folder

```
ls
ls -l => to view more information
ls -a => to list all file including hidden one
ls -la
ls -R => to show all file in sub directory
```

### Create new folder

```
mkdir [folder-name]
```

### Change directory from current folder to other folder

```
cd [folder-name]
```

### Open required folder

```
open [folder-location]
```

### Find required folder

```
where [name-of-file/folder]
```

### Environment Variable

```
env
echo $PATH
```

### View inside File

```
cat [folder-name/location]
```

### Edit a File

```
vim/nano/vi [file-name]
```

### Create File and write in it

```
cat > [file-name]

this is content in this file
```

### Move content to other file

```
cat [first-file] [second-file] [third-file] > [new-file]
```

### About Command

```
man [command-name]
```

### Transfer case of content of file

```
cat [file-name] | tr a-z A-Z > [new-file]
```

### Creating folder in between folder

```
mkdir -p [folder-1]/[folder-2]/[folder-3]
```

this will create new folder folder-2 b/w folder-1 and folder-3 where folder-1 & folder-3 are present it will create
new folder b/w along side folder-3

### Create New File

```
touch [file-name]
```

### Create Copy of File

```
cp [file-name] [new-file]
```

### Move File

```
mv [file-name] [new-folder]
```

### Rename File

```
mv [file-name] [new-file-name]
```

### Folders

```
./ => Current Folder
../ => One Folder Back
.../ => Two Folder Back
```

### Remove File

```
rm [file-name]
```

### Remove Directory

```
rm -R [directory name]
rm -rf [directory name] => forcefully close file
```

## Sudo

> Super User Do - used for doing some administrative works

### Disk Space Usage

```
df
df
```

### Head, Tail, Find, Locate and Diff

```
head [file-name] => to show start of file
head -n2 [file-name] => two line at start
tail [file-name] => to show end of file
tail -n2 [file-name] => two line at end of file
locate ["*.txt"] => to locate file end with txt
locate [file-name] => locate that file
find . => to find in current directory
find .. -type f => to find all the file in parent directory
find . -type d => to find all the directory
diff [file1] [file2] => to compare file line by line
```

### Check User

```
whoami
```

### File and Folder Permission

There are three types of permissions in linux r-read w-write x-execute.
File permission consists of 9 charecters where 1st 3 charecter is for user, next 3 for group, and last 3 for others.

```
chmod u=rwx,g=rx,o=r [file-name]
chmod 777 [file-name]
```

here we can use octal numbers where 4 stands for read, 2 stands for write, 1 for execute, 0 for no permission and 7 for all permissions.
and if we want 2 permission to some user then we sum up these numbers.

### Change User

```
chown [other-user] [file/folder-name]
```

### Performing Action on Multiple File

```
find . -type f -name "*.txt" -exec rm {} +
```

### Find Keyword in File

```
grep ["Text to find"] [file-name]
grep -i ["Text to find"] [file-name] => to remove case sensitivity
grep -n ["Text to find"] [file-name] => to get word and line no
grep -w ["Text to find"] [file-name] => complete word with given text
grep -win ["Text to find"] ./*.txt => to find following word in all file of
grep -rwin ["Text to find"] ./*.txt => to find following word in all file recursively
```

### History

```
history
history | grep ["command"] => show history with following command
```

### Terminal Shortcuts

```
Ctrl+A => to move cursor at start of command
Ctrl+E => to move cursor at end of command
Ctrl+K => to remove every thing after cursor
Ctrl+U => to remove every thing of that command
Ctrl+R => to search command which is run previously
clear => to clear the terminal
Tab => for auto completion
![Command-Preveusly-Run That no] => to execute command from history form number
```

### Other Commands
```
sort -r [file-name] => to sort file in particular(r/n/etc..) order
top => to list all the process running 
uname => to give name of kernels
uname -m => architecture of os
uname -r => kernel version
uname -o => type of os
cat /etc/os-release => os info 
lscpu => cpu usafe
free => free memory space
vmstat => virtual memory stat
zip [folder-name.zip] [file1] [file2] => to zip file
unzip [file-name.zip] => to unzip file
hostname => to get host name
hostname -i => to get host ip
useradd [name-of-user] => to create user
userdel [name-of-user] => to delete user
```
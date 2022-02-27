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

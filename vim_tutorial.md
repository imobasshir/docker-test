# Vim Command Tutuorials

>Vim opens in command line mode.
>All command are written in command mode.
## Mode change:
```
i => is used for going to insert mode.
Esc => to go back to command line mode from insert mode.
Basic Operations:
:wq => to write and quit changes in file.
:w => to write the changes in file.
:q => to quit.
:q! => quit without any change done.
Undo Redo Operations:
u => for undo.
Ctrl+r => for redo.
line_number+dd => to delete that line.
Searching:
/word_name+enter
n => to search that word in downward direction.
N => to search that word in upward direction.
Move cursor:
h => left.
j => down.
k => up.
l => right.
w => jump forward.
W => for big jump forward.
b => jump backward.
B => big backward jump.
0 => beginning of line.
$ => end of line.
Replace text:
:%s/text/newtext => for replace first one only.
:%s/text/newtext/g => for replace all text with that name.
:%s/text/newtext/gc => to replace all text by asking weather to replace or not.
To show line number => :set number
g => go to top line.
G => go to bottom line.
Copy Paste:
yy => to copy a line.
dd => to cut a line.
p => paste line below.
P => paste line above.
Insert line:
o => insert line below.
O => insert line above.
Indentation:
>> => forward indent.
<< => backward indent.
:set number => to show line number.
```
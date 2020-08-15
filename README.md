# PyTetris
A basic implementation of Tetris, coded in Python using Pygame, compiled to JavaScript using Pyjs with Pyjsdl. 


<img src="images/PyTetris.gif" width="150"/>

## How to run
Host the contents of the 'output' directory using your favourite web-browser. The quickest way to achive this is:

```shell
cd PyTetris/output
python3 -m http.server 8080
```

Then visit http://localhost:8080.

## Controls
Normal keyboard controls are as follows:
| Normal Keys |  Action         |
|------------ |-----------------|
| Left Arrow  | Move Left       |
| Rigth Arrow | Move Right      |
| Z           | Rotate Left     |
| X           | Rotate Right    |
| Down Arrow  | Soft Drop       |
| Space       | Hard Drop       |
| P           | Pause           |
| R           | Restart         |

Additionally in this branch, partial controls are implemented in buttons to the right of the main grid.

If the DEBUG variable under modules/globals.py is greater than 0 then the following additional controls are enabled:

|Debug key  |Action                               |
|-----------|-------------------------------------|
| Page Up   | Increase debug level                |
| Page Down | Decrease debug level                |
| 1 Key     | Respawn current block               |
| 2 Key     | Reset grid                          |
| 3 Key     | Print raw 2d block array to console |
| 4 Key     | Print raw 2d grid array to console  |
| 5 Key     | Increase current game level         |
| 6 Key     | Decrease current game level         |
| 7 Key     | Incrase current score               |



# PyTetris
My basic little implementation of tetris in python using the pygame library.

<img src="https://i.imgur.com/xMdPUzn.png" alt="drawing" width="150"/>

## How to run
python3 and pygame library must be installed to run PyTetris. 

This can be achieve in ubuntu by doing:

```bash
sudo apt install python3
```
```bash
python3 -m pip install -u pygame --user
```
Once the dependancies have been met the game can be run as follows:
```bash
python3 main.py
```

## Controls
| Normal Keys |  Action         |
|------------ |-----------------|
| Left Arrow  | Move Left       |
| Rigth Arrow | Move Right      |
| Down Arrow  | Move Down Faster|
| Space       | Rotate          |
| Esc         | Exit the game   |

|Debug key |Action                               |
|----------|-------------------------------------|
|Numlock + | Increase debug level                |
|Numlock - | Decrease debug level                |
|R Key     | Respawn current block               |
|0 Key     | Reset grid                          |
|P Key     | Print trimmed block array to console|
|G Key     | Print grid array to console         |
|B Key     | Print current bock array to console |



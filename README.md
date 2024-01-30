# cmg-syntax README

Syntax highlighting for CMG simulation files of the following simulators: IMEX, GEM and STARS.

## Features

The following structures are highlighted:

* **Comments**: **
* **Main section**: TITLE1, GRID, MODEL, INIT, NUMERICAL, RUN
* **Keyword**: WELL, GCONPROD, ...
* **Option**: ALL, IDIR, ...
* **Number**: 1, 1.5, 5*42.5
* **Cell**: 1:5 4:17 1:15

A **main section** keyword will only be highlighted as such if there are no options or comments in the same line.  
Some **options** have the same name as **keywords**. These will be highlighted as **keywords** if only spaces are found to it's left.  
All GEM, IMEX and STARS **keywords** are listed (2023.10 version). For this a keyword that is only present in another simulator will be highlighted as if it was correct. The syntax highlighter does not try to guess the simulator associated to the current file.  
Some **keywords** have a unique highlighting scheme: INCLUDE, STOP, CLOSED, TRIGGER, DATE, TIME. A INCLUDE will only be highlighted if the filename has quotes.  
Three consecutive numbers will always be highlighted as a **cell**.

![Example file](/extra/test_25pc.png "Example file")

## Requirements

It is not a strict requirement, but it is recommended to use the [One Monokai](https://marketplace.visualstudio.com/items?itemName=azemoh.one-monokai) theme. Other themes might work, but the development of this highlighter focused One Monokai.

## Release Notes

### 0.0.4

Automatically reads keywords and options from CMG manuals.
Updated keywords and options from 2022.10 IMEX, GEM and STARS manuals.

### 0.0.3

Created logo for extension.

### 0.0.2

Adjusted color scheme for better compatibility with other themes.

### 0.0.1

Initial release.
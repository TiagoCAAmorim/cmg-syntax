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
Some **keywords** have a unique highlighting scheme: INCLUDE, STOP, CLOSED, TRIGGER. A INCLUDE will only be highlighted if the filename has quotes.  
Three consecutive numbers will always be highlighted as a **cell**.

Example:

\!\[feature X\]\(images/feature-x.png\)

## Requirements

It is not a strict requirement, but it is recommended to use the [One Monokai](https://marketplace.visualstudio.com/items?itemName=azemoh.one-monokai) theme. Other dark themes might work properly.

## Release Notes

### 0.0.1

Initial release.
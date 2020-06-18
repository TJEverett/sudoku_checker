# Sudoku Checker

#### _Check if a sudoku puzzle is correct, 06/17/2020_

#### By _**Tristen Everett**_

## Description

This project was an attempt at learning to use jest to create automated tests and code the javascript to pass each test.

|specs|example input|example output|
|-|-|-|
|create an array bank to hold 9 arrays of 9 in a single object|new Object( [9], [9], [9], [9], [9], [9], [9], [9], [9] )|array = [ [9], [9], [9], [9], [9], [9], [9], [9], [9] ]|
|create a prototype with a temporary array with starting value of 9 false positions|call|array = [ false, false, false, false, false, false, false, false, false ]|
|test if a row has 1-9 by changing the false in that position to true|#2|array[1] = true|
|return false if there are any false positions in the new array|[ false, true, true, true, true, true, true, true, true ]|false|
|check each index of the new array for whether there are 9 true positions and if so, return true|[ true, true, true, true, true, true, true, true, true ]|true|
|create a prototype with a temporary array with starting value of 9 false positions|call|array = [ false, false, false, false, false, false, false, false, false ]|
|test if a column has 1-9 by changing the false in that position to true|#2|array[1] = true|
|return false if there are any false positions in the new array|[ false, true, true, true, true, true, true, true, true ]|false|
|check each index of the new array for whether there are 9 true positions and if so, return true|[ true, true, true, true, true, true, true, true, true ]|true|

## Setup/Installation Requirements

1. clone the repo
2. open the command line in the repo's root directory
3. run npm install
4. run npm test

## Technologies Used

* webpack
* node
* jest
* javascript

### License

This software is licensed under the MIT license

Copyright (c) 2020 **_Tristen Everett_**
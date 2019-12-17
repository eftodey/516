This file is the documentation for the program titled finalproject.js

This program, written in JavaScript uses Node JS to run on the user's computer. It first requires the Node JS be downloaded onto the computer. Node JS can be downloaded here: https://nodejs.org/en/.

This program runs first using readFileSync. To change the read-file, simply replace 'practice-Fall_2016_Admits.txt' with the name of your file. 

To write the files, writeFileSync is used and output each line into a text file. 

Please note: This program is only intended to split rows from a tab delimited file and save each row into a separate txt file. Users should be aware of the limitations of the program. 

Currently this program has several limitations. First, it does not segment the text sentence-by-sentence, but instead puts the text into one line. Future versions of this program will ideally segment the text by sentence to facilite any textual analysis. 

It also does not incorporate the header information into the file naming convention. In a future versions of this program, this should be revised as file naming conventions are key to quickly sorting corpus data. 
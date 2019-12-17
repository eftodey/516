
//use strict;

var fs = require('fs');

let all_file = fs.readFileSync('practice-Fall_2016_Admits.txt', 'utf8');

let array_of_rows = all_file.split(/[\n\r]+/) //puts the string into an array

let count = 0;
for (let current_row of array_of_rows) {
  let cells = current_row.split(/\t/);
  let header = "<Year: "+cells[0]+">\n" +
    "<Discipline Code: "+cells[1]+">\n" +
    "<Discipline: "+cells[2]+">\n" + 
    "<Degree: "+cells[3]+">\n" +
    "<Country: "+cells[4]+">\n" +
    "<Gender: "+cells[5]+">\n" +
    //to do later: write a nested loop that takes cell[6] and turns it into an array of sentences and then put it in body (rather than cell[6])
    "<body>\n" +cells[6]+"\n</body>"
  console.log("The next row in the spreadsheet is: " + current_row)
  count++;
  fs.writeFileSync("output_"+count+".txt", header)
}
 

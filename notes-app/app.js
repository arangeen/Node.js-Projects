// use require to load in the function from notes.js
const getNotes = require("./notes.js");

// load in the library chalk
const chalk = require("chalk");
// now we can use funciton
const message = getNotes();

console.log(message);

console.log(chalk.bold.green("Success!"));

/* 
    Challenge: Use the Chalk library in your project
        - install version 2.4.1 of chalk 
        - load chalk into app.js
        - use it to print the string "success!" to the console in green 
        - test it 
*/

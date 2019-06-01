/*
  Defining and using a function in a new file 
    1. create a new file called notes.js
    2. create getNotes function thata returns "Your notes..."
    3. Export getNotes function 
    4. from app.js, load in and call the fucntion printing message to console
    
*/

// use require to load in the function from notes.js
const getNotes = require("./notes.js");

// now we can use funciton
const message = getNotes();

console.log(message);

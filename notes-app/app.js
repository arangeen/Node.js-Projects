// load in npm module
const validator = require("validator");

// use require to load in the function from notes.js
const getNotes = require("./notes.js");

// now we can use funciton
const message = getNotes();

console.log(message);

console.log(validator.isEmail("ahmad@gmail.com"));
console.log(validator.isURL("https://mead.io"));

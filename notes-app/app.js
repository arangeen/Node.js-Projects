// use require to load in the function from notes.js
const getNotes = require("./notes.js");

// load in the library chalk
const chalk = require("chalk");

// print all arguments
// console.log(process.argv);

const command = process.argv[2];

if (command === "add") {
  console.log("Adding note!");
} else if (command === "remove") {
  console.log("removing note!");
}

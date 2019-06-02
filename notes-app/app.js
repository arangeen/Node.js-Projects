// use require to load in the function from notes.js
const getNotes = require("./notes.js");
const yargs = require("yargs");
// load in the library chalk
const chalk = require("chalk");

// customize yargs version
yargs.version("1.1.0");

// create add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  handler: function() {
    console.log("Adding a new note!");
  }
});

// create remove command
yargs.command({
  command: "remove",
  describe: "Remove a note",
  handler: function() {
    console.log("Removing note!");
  }
});

//create list command
yargs.command({
  command: "list",
  describe: "list your notes",
  handler: function() {
    console.log("Listing out all your notes!");
  }
});

// create read command
yargs.command({
  command: "read",
  describe: "Read your note",
  handler: function() {
    console.log("Reading a note");
  }
});

// create read command
console.log(yargs.argv);

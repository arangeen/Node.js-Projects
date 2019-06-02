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
  builder: {
    title: {
      describe: "Note title",
      // must provide title for command to work
      demandOption: true,
      //enforce that it is a string
      type: "string"
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string"
    }
  },
  handler: function(argv) {
    console.log("Title: " + argv.title);
    console.log("Body: " + argv.body);
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

yargs.parse();

/*
    Challenge: Add an option to yargs 

    1. Setup a body option for the add command 
    2. configure a description, make it required, and for it to be a string
    3. log the body value in the handler function 
    4. Test 

*/

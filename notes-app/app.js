const yargs = require("yargs");
// load in the library chalk
const chalk = require("chalk");
// use require to load in the functions from notes.js
const notes = require("./notes.js");

/**
 * Setup Command option and function for remove
 *    1. Setup  the remove command to take a required "--title" option
 *    2. create and export a removeNote function from notes.js
 *    3. call removeNote in remove command handler
 *    4. have removeNote log the title of the note to be removed
 *    5. Test work useing : node app.js remove --title="some title"
 *
 */

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
    notes.addNote(argv.title, argv.body);
  }
});

// create remove command
yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string"
    }
  },
  handler: function(argv) {
    notes.removeNote(argv.title);
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

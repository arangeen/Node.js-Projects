const yargs = require("yargs");
// load in the library chalk
const chalk = require("chalk");
// use require to load in the functions from notes.js
const notes = require("./notes.js");

/**
 *  Challenge: Wire up removeNote
 *    1. load existing notes
 *    2. use array filter method to remove the matching note (if any)
 *    3. save the newly created array
 *    4. test work with title that exist and title that doesnt
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

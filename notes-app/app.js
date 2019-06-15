const yargs = require("yargs");
// load in the library chalk
const chalk = require("chalk");
// use require to load in the functions from notes.js
const notes = require("./notes.js");

/**
 *  Challenge: Refactor all functions
 *    1. if function is a method, use ES6 method definition syntax
 *    2. otherwise, use most concise arrow function possible
 *    3. test work
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
  //change to ES5 syntax
  handler(argv) {
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
  handler(argv) {
    notes.removeNote(argv.title);
  }
});

//create list command
yargs.command({
  command: "list",
  describe: "list your notes",
  handler() {
    console.log("Listing out all your notes!");
  }
});

// create read command
yargs.command({
  command: "read",
  describe: "Read your note",
  handler() {
    console.log("Reading a note");
  }
});

yargs.parse();

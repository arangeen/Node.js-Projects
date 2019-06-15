const fs = require("fs");
const chalk = require("chalk");

/**
 * Goal: Wire up read command
 *  1. Setup --title option for read command
 *  2. create readNote in notes.js
 *        - search for note by title
 *        - find note and print title (styled) and body (plain)
 *        - No note found? print error in red.
 *  3. have the command handler call the function
 *  4. test your work by running a couple commands
 */

const getNotes = () => {
  return "Ahmad Notes...";
};

const addNote = (title, body) => {
  const notes = loadNotes();

  const duplicateNote = notes.find(note => note.title === title);

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body
    });

    saveNotes(notes);
    console.log(chalk.green.inverse("New note added!"));
  } else {
    console.log(chalk.red.inverse("NOte title already exists!"));
  }
};

//   2. create and export a removeNote function from notes.js
const removeNote = title => {
  const notes = loadNotes();
  const notesToKeep = notes.filter(note => note.title !== title);

  // if it is greater, than we know a note was removed
  if (notes.length > notesToKeep.length) {
    console.log(chalk.green.inverse("Note Removed!"));
    saveNotes(notesToKeep);
  } else {
    console.log(chalk.red.inverse("No note found!"));
  }
};

const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.inverse("Your notes"));

  notes.forEach(note => {
    console.log(note.title);
  });
};

//step 2
const readNote = title => {
  const notes = loadNotes();
  const note = notes.find(note => note.title === title);

  if (note) {
    console.log(chalk.inverse(note.title));
    console.log(note.body);
  } else {
    console.log(chalk.red.inverse("Note not found"));
  }
};

const saveNotes = notes => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = () => {
  // if any code inside try block throws an error, code will go to catch block
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    // return empty array when code fails because notes.json file doesnt have any notes
    //    - its like having an empty file
    return [];
  }
};

// export multiple function
module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote
};

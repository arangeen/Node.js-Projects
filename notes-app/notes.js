const fs = require("fs");
const chalk = require("chalk");
// define function
const getNotes = () => {
  return "Ahmad Notes...";
};

const addNote = (title, body) => {
  const notes = loadNotes();

  // store all duplicate titles in here
  const duplicateNotes = notes.filter(note => note.title === title);

  if (duplicateNotes.length === 0) {
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
  listNotes: listNotes
};

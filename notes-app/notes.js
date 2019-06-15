const fs = require("fs");
// define function
const getNotes = function() {
  return "Ahmad Notes...";
};

const addNote = function(title, body) {
  const notes = loadNotes();

  // store all duplicate titles in here
  const duplicateNotes = notes.filter(function(note) {
    return note.title === title;
  });

  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body
    });

    saveNotes(notes);
    console.log("New note added!");
  } else {
    console.log("NOte title already exists!");
  }
};

const saveNotes = function(notes) {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = function() {
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
  addNote: addNote
};

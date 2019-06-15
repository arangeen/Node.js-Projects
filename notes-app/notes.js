const fs = require("fs");
// define function
const getNotes = function() {
  return "Ahmad Notes...";
};

const addNote = function(title, body) {
  const notes = loadNotes();

  notes.push({
    title: title,
    body: body
  });

  saveNotes(notes);
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

//dependencies
const fs = require("fs");
const path = require("path");

// notes array
let notesArray = []

//createnewnote functionality

function createNewNote(body, notesArray) {
    
    const note = body;
    notesArray.push(note);

    fs.writeFileSync(
        (path.join(__dirname, '../db/db.json')),
        JSON.stringify((notesArray), null, 2)
    );

    return notesArray;
}
// validation functions
function validateNote(note) {
    if (!note.title || typeof note.name !== 'string') {
        return false;
    }
    if (!note.text || typeof note.text !== 'string') {
        return false
    }
    return true;
}


//delete note functionality
function deleteNote(notesArray) {
  //  notesArray.splice(notesArray.indexOf(noteToDelete), 1)
  //  console.log("line 37" + notesArray)
    fs.writeFileSync(
        (path.join(__dirname, '../db/db.json')),
        JSON.stringify((notesArray), null, 2)
    )
   // return notesArray
}
module.exports = {
    createNewNote,
    validateNote,
    deleteNote,
}
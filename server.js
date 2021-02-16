//Adding in node packages needed to run this application
const express = require('express');
const { notes } = require('./db/db.json')
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3002;

//instating the server
const app = express();

//adding middleware
    //parse incoming string or array data
    app.use(express.urlencoded({ extended :true }));

    //parse incoming JSON data
    app.use(express.json());

// notes array
let notesArray = []

//createnewnote functionality

function createNewNote(body, notesArray) {
    
    const note = body;
    notesArray.push(note);

    fs.writeFileSync(
        (path.join(__dirname, './db/db.json')),
        JSON.stringify({ notes: notesArray}, null, 2)
    );

    return note;
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
//adding routes
app.get('/api/notes', (req, res) => {
    let results = notes;
    console.log(req.query)
    res.json(results)
    //res.send('Hello!');
})

app.post('/api/notes', (req, res) => {

    //setting new note id
    req.body.id = notes.length.toString();

    //run data through data validation
    if (!validateNote(req.body)) {
        res.status(400).send('The note is not properly formatted');
    } else {
        const note = createNoteNote(req.body, notes);
        res.json(note)
    }

    //adding new note to json file and notes array
    const note = createNewNote (req.body, notes)

    //console.log(req.body)
    res.json(note)
});

//getting the server to listen
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`)
})
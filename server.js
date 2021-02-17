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

    //making the public folder static
    app.use(express.static('public'));


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

// delete functions
app.delete('/api/notes:id', function (req, res) {
    let currentNotes = JSON.parse('./db/db.json')
    let noteID = req.params.id

    res.send('SEND DELETE REQUEST?')
})

//html routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
  });

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
  });



//getting the server to listen
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`)
})
const {createNewNote, validateNote } = require('../../lib/notes')
const {notes} = require('../../db/db.json')
const router = require('express').Router();

//adding routes
router.get('/notes', (req, res) => {
    let results = notes;
    console.log(req.query)
    res.json(results)
    //res.send('Hello!');
})

router.post('/notes', (req, res) => {
    //Getting the length of the notes to be use as the next ID
    let noteID = notes.length.toString();

    //putting the body an ID to be the last element in the array
    req.body.id = noteID;

    //run data through data validation
    if (validateNote(req.body)) {
        res.status(400).send('The note is not properly formatted');
        return;
    } else {
        createNewNote(req.body, notes);
    }
    //console.log(req.body)
    //Returning the entire table
    res.json(notes);
});

// delete functions
router.delete('/notes:id', function (req, res) {
    let currentNotes = JSON.parse('./db/db.json')
    let noteID = req.params.id

    res.send('SEND DELETE REQUEST?')
})

module.exports  = router;
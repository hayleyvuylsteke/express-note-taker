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
router.delete('/notes:id', function (req, res) {
    let currentNotes = JSON.parse('./db/db.json')
    let noteID = req.params.id

    res.send('SEND DELETE REQUEST?')
})

module.exports  = router;
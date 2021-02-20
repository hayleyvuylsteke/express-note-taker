const {createNewNote, deleteNote, validateNote } = require('../../lib/notes')
const notes = require('../../db/db.json')
const router = require('express').Router();
const {v4 : uuidv4} = require('uuid')

//adding routes
router.get('/notes', (req, res) => {
    let results = notes;
   // console.log(req.query)
    console.log("line 10" + results)
    res.json(results)
    //res.send('Hello!');
})

router.post('/notes', (req, res) => {
    let noteID = uuidv4()
    
    //Getting the length of the notes to be use as the next ID
   // let noteID = notes.length.toString();

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
router.delete('/notes/:id', function (req, res) {
    let {id} = req.params
    const projectIndex = notes.findIndex(notes => notes.id == id)
    notes.splice(projectIndex, 1)

    //let noteToDelete = notes.find(({id}) => id === JSON.parse(req.params.id))
  
    //deleteNote(noteToDelete, notes)
    deleteNote(notes)
    return res.send("Item was deleted.")

})

module.exports  = router;
//Adding in node packages needed to run this application
const express = require('express');
const { notes } = require('./db/db.json')

//instating the server
const app = express();

//adding routes
app.get('/api/notes', (req, res) => {
    let results = notes;
    console.log(req.query)
    res.json(results)
    //res.send('Hello!');
})

//getting the server to listen
app.listen(3002, () => {
    console.log(`API server now on port 3002!`)
})
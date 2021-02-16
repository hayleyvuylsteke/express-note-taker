//Adding in node packages needed to run this application
const express = require('express');
const { notes } = require('./db/db.json')
const PORT = process.env.PORT || 3002;

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
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`)
})
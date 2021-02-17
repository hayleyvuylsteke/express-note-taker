//Adding in node packages needed to run this application
const express = require('express');
const { notes } = require('./db/db.json')
const fs = require('fs');
const path = require('path');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const PORT = process.env.PORT || 3002;

//instating the server
const app = express();

//adding middleware
    //parse incoming string or array data
    app.use(express.urlencoded({ extended :true }));

    //parse incoming JSON data
    app.use(express.json());

    //routes middleware
    app.use('/api', apiRoutes);
    app.use('/', htmlRoutes);

    //making the public folder static
    app.use(express.static('public'));

//getting the server to listen
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`)
})
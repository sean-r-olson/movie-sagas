const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// import routers 
const moviesRouter = require('./routes/movies.router');
const detailsRouter = require('./routes/details.router');
const editRouter = require('./routes/edit.router');

const port = process.env.PORT || 5000;

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(express.static('build'));

/** ---------- ROUTES ---------- **/
app.use('/', moviesRouter);
app.use('/details', detailsRouter);
app.use('/edit', editRouter);


/** ---------- START SERVER ---------- **/
app.listen(port, function () {
    console.log('Listening on port: ', port);
});
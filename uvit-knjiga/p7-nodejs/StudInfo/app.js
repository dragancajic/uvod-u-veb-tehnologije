// For creating expressjs applications
const express = require('express');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', function(req, res) {
    res.end("Hello from app.js!");
})

const indexRoutes = require('./routes/index');
const studentRoutes = require('./routes/student');

app.use('/', indexRoutes);
app.use('/student', studentRoutes);

app.use(function (req, res, next) {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

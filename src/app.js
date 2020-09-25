const express = require('express');
const app = express();

const index = require('./route/index');
const escritoras = require('./route/escritorasRoute');

app.use((req, res, next) => {
    console.log('Nova requisição realizada');

    next();
});

app.use('/', index);
app.use('/', escritoras);


module.exports = app;
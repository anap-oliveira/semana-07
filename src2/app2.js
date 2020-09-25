const express = require('express');
const app = express();

const index2 = require('./route/index2');
const mulheresnegras = require('./route/mulheresnegrasRoute');

app.use((req, res, next) => {
    console.log('Nova requisição realizada');

    next();
});

app.use('/', index2);
app.use('/', mulheresnegras);


module.exports = app;
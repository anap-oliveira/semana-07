const escritoras = require('../model/escritoras.json');

const getAll = (req, res) => {
    console.log(req.url);

    res.send(escritoras);
};

module.exports = { getAll};
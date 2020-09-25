const mulheres = require('../model/mulheresnegras.json');

const getAll = (req, res) => {
    console.log(req.url);

    res.send(mulheres);
};

module.exports = { getAll};
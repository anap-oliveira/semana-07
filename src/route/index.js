const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send({
        titulo: "Alguns livros escritos por mulheres negras"
        
    })

});

module.exports = router;
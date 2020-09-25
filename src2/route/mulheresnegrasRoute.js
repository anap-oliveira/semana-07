const express = require('express');
const router = express.Router();
const controller = require('../controller/mulheresnegrasController')

router.get("/", controller.getAll);
router.get("/mulheresnegras", controller.getAll);

module.exports = router;
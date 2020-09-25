const express = require('express');
const router = express.Router();
const controller = require('../controller/escritorasController')

router.get("/", controller.getAll);
router.get("/escritoras", controller.getAll);

module.exports = router;
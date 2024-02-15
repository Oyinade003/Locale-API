const express = require('express');
const { getAllRegions, getAllStates, getAllLGAs } = require('./controllers/data.js');

const router = express.Router();

router.get('/regions', getAllRegions);
router.get('/states', getAllStates);
router.get('/lgas', getAllLGAs);

module.exports = router;
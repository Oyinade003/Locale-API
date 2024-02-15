const express = require('express');
const { searchRegions, searchStates, searchLGAs } = require('./controllers/SearchController');

const router = express.Router();

router.get('/search', searchRegions); // Add routes for state and LGA search
router.get('/search/:type', searchStates); // Replace ":type" with actual parameter
router.get('/search/:type/:stateCode', searchLGAs); // Nested route for LGA search

module.exports = router;
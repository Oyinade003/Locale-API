const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet'); // For security headers

// Import your controllers
const authenticationController = require('./controllers/AuthenticationController');
const searchController = require('./controllers/SearchController');
const dataController = require('./controllers/DataController');

const app = express();

// Middleware setups
app.use(bodyParser.json());
app.use(cors()); // Configure CORS restrictions if needed
app.use(helmet()); // Use appropriate security headers

// Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/locale', { // Replace with your connection string
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// API Routes
app.use('/auth', authenticationController);
app.use('/search', searchController);
app.use('/data', dataController);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.statusCode || 500).json({ error: err.message });
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

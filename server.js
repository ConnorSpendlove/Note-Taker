// Import Express
const express = require("express");

// Import Routes
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// Initialize Express App
const app = express();

// Define Port
const PORT = process.env.PORT || 3001;

// Set up Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Mount API and HTML Routes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// Start the Server
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

const express = require('express');
const cors = require('cors');


// Load environment variables from .env file if it exists
require('dotenv').config();

const app = express();
const PORT = process.env.NODE_ENV === 'production'
    ? process.env.PORT
    : process.env.DEV_PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());



// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
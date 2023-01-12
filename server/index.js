require('dotenv').config(); // need for reading from files

const express = require('express'); // import module

const PORT = process.env.PORT || 5000; // where our app is working
// process.env is .env file

const app = express(); // launch our app

// listen to which PORT?
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

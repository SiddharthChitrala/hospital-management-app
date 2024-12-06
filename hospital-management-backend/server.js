const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors'); 
const routes = require('./router/router');
const connectToDatabase = require('./db');

app.use(cors()); 
app.use(express.json());
app.use(routes);

connectToDatabase();

app.listen(9000, function (error) {
    if (error) {
        console.error('Error starting the server:', error);
    } else {
        console.log('Server is running on port 9000');
    }
});
const express = require('express');
const path = require('path');    //for our config
const dotenv = require('dotenv');
const colors = require('colors');
const connectDB = require('./config/db');

dotenv.config({ path: './config/config.env' });

connectDB();

const recipes = require('./routes/recipes');

const app = express();

app.use(express.json());

app.use('/api/recipes', recipes);

if(process.env.NODE_ENV === 'production') {
    app.use(express.static('cookbook/build'));

    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'cookbook', 'build', 'index.html')));
}


const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running on ${PORT}`.yellow.bold));
require('dotenv').config();

console.log('Web 39 RULES. Big time.');

const express = require('express');

const server = express();

server.use(express.json());

const port = process.env.PORT;

if (process.env.NODE_ENV === 'development') { // on Heroku machine, an env variable is called "NODE_ENV" -> production
    const cors = require('cors');
    server.use(cors());
}

server.listen(port, () => {
    console.log(`Magic happening on Port:${port}`)
})
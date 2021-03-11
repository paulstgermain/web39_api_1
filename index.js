require('dotenv').config();

const path = require('path');

console.log('Web 39 RULES. Big time.');

const express = require('express');

const server = express();

server.use(express.json());
server.use(express.static(path.join(__dirname, 'client/build')));

const port = process.env.PORT;

if (process.env.NODE_ENV === 'development') { // on Heroku machine, an env variable is called "NODE_ENV" -> production
    const cors = require('cors');
    server.use(cors());
}

// our API comes earlier in the pipeline
server.get('/api/hello', (req, res) => {
    res.json({ message: 'HELLO' });
});

// catch all that just sends back index.html -> our react app
server.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

server.listen(port, () => {
    console.log(`Magic happening on Port:${port}`)
})
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const checkAuthentication = require('./auth/auth').checkAuthentication;

app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Oh so public!'));
app.get('/public', (req, res) => res.send('Public page!'));
app.use('/private', checkAuthentication, (req, res) => res.send('YER IN'));

app.listen(4000, () => console.log('Listening on port 4000'));
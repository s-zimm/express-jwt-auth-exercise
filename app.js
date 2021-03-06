const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const auth = require('./auth/auth');
const usersRoutes = require('./routes/users');

app.use(bodyParser.urlencoded( { extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => res.send('Oh so public!'));
app.get('/public', (req, res) => res.send('Public page!'));
app.post('/token', auth.postToken);
app.use('/users', usersRoutes);
app.use('/private', auth.checkAuthentication, (req, res) => res.send('YER IN'));

app.listen(4000, () => console.log('Listening on port 4000'));
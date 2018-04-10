const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Oh so public!'));
app.get('/public', (req, res) => res.send('Public page!'));

app.listen(4000, () => console.log('Listening on port 4000'));
const express = require('express');
const bodyParser = require('body-parser');
const botbot = require('./botbot.js');

const app = express();

const port = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
	res.status(200).send('YAY! I am up');
});

app.post('/hello', botbot);

app.listen(port, (req, res) => {
	console.log("bot is listening on port " + port);
});
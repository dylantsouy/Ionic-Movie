var express = require('express');
var app = express();
var morgan = require('morgan');
var bodyParser = require('body-parser');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ 'extended': 'true' }));
app.use(bodyParser.json());

app.use(express.static('www'));
app.listen(5000, () => console.log(`Listening on http://localhost:5000`)); // listen on port

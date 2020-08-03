const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

const Task = require('./api/models/todoModel');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const routes = require('./api/routes/todoRoutes');
routes(app);

app.use((req, res) => {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port);
console.log('todo REST API server started on:' + port);

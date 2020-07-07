const express = require('express');
const app = express();
const parser = require('body-parser');

app.use(parser.urlencoded({ extended: false }));
app.use(parser.json());

app.use(require('./user.controller'));
app.use(require('./login.controller'));
app.use(require('./invoice.controller'));



module.exports = app;
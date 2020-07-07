const express = require('express');
const app = express();
const loginDomain = require('../domain/login.domain');
const { validateLogin } = require('../middleware/validateLogin.middleware');

app.post('/login',[validateLogin], async (req, res) => {
  let { body } = req;
  const status =  await loginDomain.Login(body);
  const { type } = status;
  res.status(type).json(status);
});

module.exports = app;
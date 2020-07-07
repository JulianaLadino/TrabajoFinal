const express = require('express');
const app = express();
const { verifytoken } = require('../middleware/verifyToken.middleware');
const { validateUser, validateUpdatingUser } = require('../middleware/validateUser.middleware');
const {validateNumberParameter} = require('../middleware/validateNumberParameter.middleware');
const userDomain = require('../domain/user.domain');

app.post('/user',[verifytoken, validateUser], async (req, res) => {
  const { body } = req;
  const status = await userDomain.CreateUser(body);
  const { type } = status;
  res.status(type).json(status);
  
});

app.post('/user/update/:id', [verifytoken, validateUpdatingUser, validateNumberParameter], async (req, res) => {
  let { body, params: { id } } = req;
  const status = await userDomain.UpdateUser(body, id)
  const { type } = status;
  res.status(type).json(status);
});

module.exports = app
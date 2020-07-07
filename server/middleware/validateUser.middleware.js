const { nameRegex, passwordRegex, emailRegex } = require('../infraestructure/validations.infraestructure');

let validateUser = ({body: { name, email, password, role }}, res, next) => {
    if (!nameRegex(name) || !emailRegex(email) || !passwordRegex(password) || !role) 
      return res.status(400).json('{message: "fields are required"}');
    next();
}

let validateUpdatingUser = ({body: {name, password, role}, params:{id}}, res, next) =>{
  if (!nameRegex(name) || !passwordRegex(password) || !role) 
      return res.status(400).json('{message: "fields are required"}');
      next();
}
module.exports = {
    validateUser,
    validateUpdatingUser
}


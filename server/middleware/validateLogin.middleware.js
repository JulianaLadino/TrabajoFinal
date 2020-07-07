const { emailRegex } = require('../infraestructure/validations.infraestructure');

let validateLogin = ({body: {email}}, res, next) => {
    if (!emailRegex(email)) 
      return res.status(400).json('{message: "email is not valid"}');
    next();
}
module.exports = {
    validateLogin
}


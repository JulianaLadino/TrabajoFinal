const {user} = require('../core/index.core');
const hashJS = require('hash.js');
const jwt = require("jsonwebtoken");
const { GenericMessage } = require('../infraestructure/genericMessage.infraestructure');
const {Error, Success, NoContent} = require('../infraestructure/messageType.infraestruture');
async function Login({email, password}) {
    try {
        console.log('por acá entró');
        console.log(user);
        validUser = await user.findAll({
            where:{
                email,
                password: hashJS.sha256().update(password).digest('hex')
            },
            attributes: ['name', 'role', 'email', 'active']
        }); 
        if (!validUser.length)
            return GenericMessage(NoContent (),'User does not exist')
        return GenericMessage(Success(), 'User is logged on successfully', {
            email,
            token: jwt.sign({
              validUser,
            },process.env.SEED,
            { expiresIn: 60*60 }
          )
          })
    } catch (error) {
        return GenericMessage(Error(), 'there was an error', error)
    }     
}   

module.exports = {
    Login
}
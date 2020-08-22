const User = require('../../models/user')
const bcrypt = require("bcrypt");
const config = require("../../config/config");
const jwt = require("jsonwebtoken");


module.exports = {
  /**
   * Query the database to get all the societies
   * @returns {object} result from the database query
   */
  addUser: (req, res) => {
    let user = {
      email: req.body.email,
      password: req.body.password,
      token : null   
    }
    user.password = bcrypt.hashSync(user.password, 10)
    const expiresIn = 24 * 60 * 60;
    user.token = jwt.sign(
      { email: user.email,
        password: user.password
      }, 
      config.secret, {
        expiresIn: expiresIn,
      })
    let finalUser = new User(user.email, user.password, user.token)
    finalUser.createUser((err, result) => {
      if(err) res.status(500).send({msg: 'fail', err: err })
      if(result) res.status(200).send({msg: 'success'})
    })
  },

  loginUser: (req, res) => {
    let data = {
      email: req.body.email,
      password: req.body.password
    }

    User.loginUser(data, (err, result) => {
      if(err) res.status(500).send({msg: 'fail', err: err})
      if(result) res.status(200).send({msg: 'success', data: result })
    })
  }
    
};
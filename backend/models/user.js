const pool = require('./../config/pgsql.config.js')

module.exports = class User {
  /**
   * User class
   * @param {string} email - email string
   * @param {string} password - a password
   * @param {string} token - a JWT token
   * @property {string} email - a email.
   * @property {string} password - a phone.
   * @property {string} token - a JWT Token
   */
  constructor(email, password, token) {
    this.email = email
    this.password = password
    this.token = token
  }

  /**
   * Query to create a new user in the database
   * @param {function} [callback] - Callback function
   */
  createUser(callback) {
    let sql = 'INSERT INTO user (email, password, token) VALUES ($1, $2, $3)' 
    pool.query(sql, [this.email, this.password, this.token], (err, result) => {
      if(err) {
        if(callback) callback(err, null)
      }
      if(result) {
        if(callback) callback(null, result)
      } 
    })
  }

  /**
   * Query database to retrieve the information about a user using its email
   * @param {object} payload - Object containing information given from the frontend
   * @param {function} [callback] - Callback function
   */
  static loginUser = (payload, callback) => {
    let sql = 'SELECT * FROM users WHERE email = ' payload.email
    pool.query(sql, (err, result) => {
      if(err) {
        if(callback) callback(err, null)
      }
      if(result) {
        let test = bcrypt.compareSync(payload.password, result.rows[0].password)
        if(test) {
          callback(null, rows[0].token)
        }
        else {
          callback('No matching result', null)
        }
      }
    })
  }
};
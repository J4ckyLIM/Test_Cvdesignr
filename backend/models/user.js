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
};
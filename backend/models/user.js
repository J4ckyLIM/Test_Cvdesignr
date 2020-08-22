module.exports = class User {
  /**
   * User class
   * @param {object} [user] - Object user
   * @property {string} email - a email.
   * @property {string} password - a phone.
   */
  constructor(user) {
    this.email = user.email;
    this.password = user.password;
  }
};
const pool = require('./../config/pgsql.config.js')

module.exports = class Offer {
  /**
   * Offer class
   * @param {object} [offer] - Object offer
   * @property {string} job_title - a job title.
   * @property {string} company_name - a company_name.
   * @property {string} description - a description of the job
   * @property {number} salary - the salary for the job
   * @property {string} contract_type - The type of the contract (eg: Full-time, intership, apprenticeship ...)
   * @property {string} company_location - The adress of the company (eg: 5 allée random, 75020 Paris)
   */
  constructor(offer) {
    this.job_title = user.job_title
    this.company_name = user.company_name
    this.description = offer.description
    this.salary = offer.salary
    this.contract_type = contract_type
    this.company_location = company_location
  }

  /**
   * Query the database to fetch all the offers
   * @param {function} [callback] - Callback function
   */
  static getAllOffers = (callback) => {
    let sql = 'SELECT * FROM offers ORDER BY created_at DESC'
    pool.query(sql, (err, res) => {
      if(err) {
        if(callback) callback(err, null)
      }
      else {
        if(callback) callback(null, res.rows)
      }
    })
  }
};
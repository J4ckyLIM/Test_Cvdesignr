const Offer = require('../../models/offer')

module.exports = {
  /**
   * Query the database to get all the societies
   * @returns {object} result from the database query
   */
  getAllOffers: (req, res) => {
    Offer.getAllOffers((err, result) => {
      if(err) res.status(500).send({msg: 'fail', err: err })
      if(result) res.status(200).send({msg: 'success', data: result})
    })
  }
    
};
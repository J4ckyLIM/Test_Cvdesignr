const router = require("express").Router()
const controller = require("./controller")

router.get("/all", controller.getAllOffers)

module.exports = router;
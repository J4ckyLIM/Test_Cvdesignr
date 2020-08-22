const router = require("express").Router()
const controller = require("./controller")

router.post('/new', controller.addUser)

module.exports = router;
const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send("Inside article")
})

module.exports = router
const getLocation = require('./get_location.js')

const express = require('express')
const router = express.Router()

var apiSuffix = '/location'


router.get(apiSuffix,getLocation)


module.exports = router
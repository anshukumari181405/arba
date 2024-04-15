const mongoose = require('mongoose')
require('dotenv').config()

const connection = mongoose.connect('mongodb://localhost:27017/arba')

const PORT = process.env.PORT

const JWT_SECRET = process.env.JWT_SECRET

module.exports = {connection,PORT,JWT_SECRET}
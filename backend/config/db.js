const mongoose = require('mongoose')
require('dotenv').config()

const connection = mongoose.connect('mongodb+srv://anshukumari181405:Akash%40123@cluster0.fbsukfp.mongodb.net/arba45?retryWrites=true&w=majority&appName=Cluster0')

const PORT = process.env.PORT

const JWT_SECRET = process.env.JWT_SECRET

module.exports = {connection,PORT,JWT_SECRET}
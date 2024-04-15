const express = require('express')
const {connection , PORT} = require('./config/db')
const cors = require('cors')

const UserController = require('./controllers/user')
const ProductController = require('./controllers/product')
const CategoryController = require('./controllers/category')

const app = express();

app.use(express.json())
app.use(cors('*'))

app.get('/', (req,res) => {
    res.send({msg:'API Running!'})
})

app.use('/user', UserController)
app.use('/api',ProductController)
app.use('/url',CategoryController)

app.listen(PORT, async () => {
    try {
        await connection
        console.log('Connected to DB')
    } catch (error) {
        console.log(error)
    }
    console.log(`listening on PORT: ${PORT}`)
})
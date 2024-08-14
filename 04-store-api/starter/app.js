require('dotenv').config()
require('express-async-errors')

const connectDB = require('./db/connect.js')
const productsRouter = require('./routes/products.js')

const notFoundMiddleware = require('./middleware/not-found.js')
const errorMiddleware = require('./middleware/error-handler.js')

const express = require('express')
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.send('<h1>Store API</h1><a href="/api/v1/products">product route</a>')
})

app.use('/api/v1/products', productsRouter )

app.use(notFoundMiddleware)
app.use(errorMiddleware)

const port = process.env.PORT || 3000

const startServer = async () => {
    try {
        await connectDB(process.env.MONGODB_URI)
        app.listen(port, (() => console.log(`Server started on ${port}`)))
    } catch (error) {
        console.log(error)
    }
}

startServer()
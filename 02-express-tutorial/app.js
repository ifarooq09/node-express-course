const express = require('express')
const app = express()
const port = 3000
const { products } = require("./data.js")

app.use(express.static('./public'))

app.get('/api/v1/test', (req, res) => {
    res.json({ message: "It worked" })
})

app.get('/api/v1/products', (req, res) => {
    res.json({ products })
})

app.get('/api/v1/products/:productID', (req, res) => {
    const idToFind = parseInt(req.params.productID)
    const product = products.find((p) => p.id === idToFind)
    if (!product) {
        res.status(404).json({ message: "That product was not found." })
    } else {
        res.json({ product })
    }
})

app.get('/api/v1/query', (req, res) => {
    const { search, limit, maxPrice } = req.query
    let filteredProducts = [...products]

    if (search) {
        filteredProducts = filteredProducts.filter(product =>
            product.name.toLowerCase().startsWith(search.toLowerCase())
        )
    }

    if (maxPrice) {
        filteredProducts = filteredProducts.filter(product =>
            product.price < parseFloat(maxPrice)
        )
    }

    if (limit) {
        filteredProducts = filteredProducts.slice(0, parseInt(limit))
    }

    res.json({ products: filteredProducts })
})

app.all('/not-there', (req, res, next) => {
    console.log("Something went wrong, try again later")
    next()
})

app.listen(port, () => {
    console.log(`Server started at port ${port}`)
})

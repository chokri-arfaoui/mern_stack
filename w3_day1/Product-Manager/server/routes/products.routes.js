const productController = require('../controllers/product.controller')

module.exports = app => {
    app.get('/api/products', productController.findAll)
    app.get('/api/products/:id', productController.findOne)
    app.post('/api/products', productController.create)
    app.put('/api/products/:id', productController.update)
    app.delete('/api/products/:id', productController.delete)
}
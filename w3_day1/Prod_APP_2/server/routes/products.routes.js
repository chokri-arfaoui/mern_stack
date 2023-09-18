const productController = require('../controllers/product.controller')

module.exports = app => {
    app.get('/api/products' , productController.findAllProducts)
    app.get('/api/products/:id' , productController.findOneProduct)
    app.post('/api/products' , productController.createProduct)
    app.put('/api/products/:id', productController.createProduct)
    app.delete('/api/products/:id', productController.deleteProduct)
}
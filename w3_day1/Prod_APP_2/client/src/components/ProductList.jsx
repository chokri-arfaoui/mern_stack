import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Product from './Product'

const ProductList = (props) => {
    const [products, setProducts] = useState([])
    const deleteProduct = (id) => {
        console.log("Product ID = ",id, "WILL Be deleted");
        axios.delete(`http://localhost:8000/api/products/${id}`)
    .then(response=> {
        console.log(response)
        const filteredProducts = products.filter(product => product._id != id)
        setProducts(filteredProducts)
    })
    .catch(error => console.log(error))
    }
    useEffect(() => {
    axios.get('http://localhost:8000/api/products')
        .then(serverResponse => {
        console.log("SERVER RESPONSE : ", serverResponse.data);
        setProducts(serverResponse.data)
        })
        .catch(serverError => {
        console.log("SERVER ERROR : ", serverError);
        })
    }, [])
    return (
        <div className=''>
            {/* <h2>{JSON.stringify(notes)}</h2> */}
            {products.map(product=> <Product key = {product._id} product={product} deleteProduct={deleteProduct}/>)}
            {/* <Note /> */}
        </div>
    )
}

export default ProductList


const { response } = require('express');
const Product = require('../models/product.model')


module.exports = {

    findAll : (req,res) => {
        Product.find()
        .then(dbResponse => {
            console.log("DATABASE RESPONSE TO FIND ALL :", dbResponse );
            res.status(200).json(dbResponse)
        })
        .catch(dbError => {
            console.log("DATABASE ERROR FIND ALL :", dbError);
            res.status(400).json(dbError)
        } )
    },

    findOne : (req,res) => {
        Product.findById(req.params.id)
        .then(dbResponse => {
            console.log("DATABASE RESPONSE : ", dbResponse);
            res.status(200).json(dbResponse)
        })
        .catch(dbError => {
            console.log("DATABASE ERROR FIND ALL :", dbError);
            res.status(400).json(dbError)
        })
    },

    create : (req,res) => {
        Product.create(req.body)
        .then(dbResponse => {
            console.log("DATABASE RESPONSE  :", dbResponse );
            res.status(201).json(dbResponse)
        })
        .catch(dbError => {
            console.log("DATABASE ERROR FIND ALL :", dbError);
            res.status(400).json(dbError)
        })
    },

    update : (req,res) => {
        Product.findByIdAndUpdate(req.params.id, req.body, {new:true, runValidators:true})
        .then(dbResponse => {
            console.log("DATABASE RESPONSE  :", dbResponse );
            res.status(200).json(dbResponse)
        })
        .catch(dbError => {
            console.log("DATABASE ERROR FIND ALL :", dbError);
            res.status(400).json(dbError)
        })
    },

    delete : (req, res) => {
        Product.findByIdAndDelete(req.params.id)
        .then(dbResponse => {
            console.log("DATABASE RESPONSE  :", dbResponse );
            res.status(200).json(dbResponse)
        })
        .catch(dbError => {
            console.log("DATABASE ERROR FIND ALL :", dbError);
            res.status(400).json(dbError)
        })
    }
}

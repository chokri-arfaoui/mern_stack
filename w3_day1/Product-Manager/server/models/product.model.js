const mongoose  = require('mongoose')

const ProductSchema  = new mongoose.Schema({
    title:{
        type:String,
        required:[true, "Product Title is required ❌❌❌"],
        minlength:[3, "Title must be at least 3 characters ⛔⛔⛔"]
    },
    price: {
        type:Number,
        required:[true, "Price is Required ❌❌❌"],
        min:[1,"price mast be greater than 1"],
        max:[9999, "price mast be less than 9999 "]
    },
    description : {
        type:String,
        required:[true, "Product Title is required ❌❌❌"],
        minlength:[9, "description must be greater 9 characters ⛔⛔⛔"]
    }
}, {timestamps:true});

module.exports = mongoose.model('Product', ProductSchema);
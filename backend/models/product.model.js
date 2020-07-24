const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const productSchema = new Schema({
    products: [
        {
            name: { type: String, required: true },
            description: { type: String, required: true },
            category: { type: String },
            price: { type: Number },
            season: { type: String }
        }
    ]
},
{
    timestamps: true
});


const Product = mongoose.model("Product", productSchema);

module.exports = Product;
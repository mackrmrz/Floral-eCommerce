const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const addressSchema = {
    address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zipcode: { type: Number, required: true },
    apartment: { type: String },
    country: {type: String }
};


const singleOrderSchema = new Schema({
    name: { type: String, required: true },
    quantity: {type: Number, required: true },
    price: { type: String, required: true },
    imageURL: { type: String, required: true },
    product: { type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true }
})


const orderSchema = new Schema({
    product_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    dateordered: { type: Date, required: true },
    address: addressSchema,
    shippingdate: { type: Date, required: true },
    customer_id: {type: mongoose.Schema.Types.ObjectId, ref: 'Customer', required: true},
    product_price: { type: Number },
    tax_rate: { type: Number },
    shipping_price: { type: Number },
    total_price: { type: Number },
    isPaid: { type: Boolean, default: false },
    paidAt: { type: Date },
    isDelivered: { type: Boolean, default: false },
    payment_method: { type: String, required: true },
    delivery_details: 
    [
        {
            delivery_type: { type: String },
            delivery_cost: { type: Number },
            delivery_region: { type: String },
            delivery_subtotoal: { type: String }
        }
    ],
},
{
    timestamps: true
});

const Order = mongooose.model("Order", orderSchema);

module.exports = Order;
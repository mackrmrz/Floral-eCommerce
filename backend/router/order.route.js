const orderRouter = require("express").Router();
const Order = require("../models/order.model");
const mongoose = require("mongoose");

const Product = require("../models/product.model");


orderRouter.route("/").get((req, res) => {
    Order.find()
        .then(result => res.json(result)
        .catch(err => req.status(400).json(" What was the problem ", req))
    )
});


orderRouter.route("/add").post((req, res) => {
    const product_id = mongoose.Types.ObjectId;
    const date_ordered = req.body.date_ordered;
    const shipping_date = req.body.shipping_date;
    const customer_id = mongoose.Types.ObjectId;
    const shipping_details =  req.body,shipping_details

    const newOrder = new Order({
        product_id,
        date_ordered,
        shipping_date,
        customer_id,
        shipping_details
    });

    newOrder.save()
        .then(() => res.json('Order added!!!'))
        .catch(err => res.status(400).json('Error:' + err));
})
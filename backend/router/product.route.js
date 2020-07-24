const productRouter = require("express").Router();
const Product = require('../models/product.model');


productRouter.route('/add').post((req, res) => {
    const name = req.body.name;
    const description = req.body.description;
    const category = req.body.category;
    const season = req.body.season;
    const price = Number(req.body.price);

    const newProducts = new Product({
        name, 
        description,
        category,
        season,
        price
    });

    newProducts.save()
        .then(() => res.json('Exercise added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});
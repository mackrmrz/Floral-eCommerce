const productRouter = require("express").Router();
const Products = require("../models/product.model");
const multer = require("multer");
const checkAuth = require("../middleware/confirm-auth");

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, "./upload/");
    },
    filename: function(req, file, cb) {
        cb(null, new Date().toISOString() + file.originalname);
    }
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype === "image/jpeg" || file.mimetype === 'image/png') {
        cb(null, true)
    }else{
        cb(null, false);
    }
}

const upload = multer({storage: storage, limits:{
    fileSize: 1024 * 1024 * 5
},
    fileFilter: fileFilter
});

productRouter.route("/").get((req,res) => {
    Products.find()
        .then(product => res.json(product))
        .catch(err => res.status(400).json("Error: Product GET " + err));
});


//USING MULTER FOR FILE UPLOADS
productRouter.route("/add").post(checkAuth, upload.single("product_image"), (req, res) => {
    const newProduct = new Products({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        product_image: req.file.path
    });
    
    newProduct.save()
        .then(() => res.json('Product added!!!'))
        .catch(err => res.status(400).json('Error:' + err));
});



productRouter.route("/:_id").get(checkAuth, (req, res ) => {
    const id = req.params._id;
    Products.findById(id)
        .select('name price description')
        .exec()
        .then(singleProduct => res.json(singleProduct))
        .catch(err => res.status(400).json("error: " + err))
});

module.exports = productRouter;

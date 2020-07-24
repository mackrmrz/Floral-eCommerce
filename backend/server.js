const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");


require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/products', 
{ useNewUrlParser: true, useCreateIndex: true });

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB connection established successful");
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
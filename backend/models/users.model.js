const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: { 
        type: String, 
        required: true, 
        unique: true, 
        minlength: 5, 
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/ 
    },
    
    password: { type: String, required: true, unigue: true, minlength: 5},
    // loginstatus: { type: Boolean}
},

    {

        timestamps: true,
    }
);


const User = mongoose.model('User', userSchema);

module.exports = User;
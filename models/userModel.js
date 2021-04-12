//create a mongoose Schema and model
//----------------------------------
//LOOK HERE DAVID~!!!!
//do you remember how to do it?
const mongoose = require('mongoose');
const { Schema } = mongoose.Schema();

const userSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    age: { type: Number, required: true },
    email: { type: String, required: true },
    city: { type: String, required: true },
    street: { type: String, required: true },
    facebook: { type: String },
    twitter: { type: String },
}, {timestamps: true});
//that will automatically add a createdAt property with the time the document was created

module.exports = mongoose.model('User', userSchema)
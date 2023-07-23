const { Schema, model, Types } = require('../connection');   // relative path 
const mySchema = new Schema({
    title: { type:String},
    price: { type: String, require: true },
    yearMade: { type: Number },
    brand:{ type: String},
    description:{ type: String},
    image:{type:String},
    createdAt: {type : Date, default: Date.now}



});

// title
// category
// price
// yearMade
// brand
// description
// images: array

module.exports = model('product', mySchema);
const mongoose = require('mongoose');
const uri = "mongodb+srv://haseebsid34:Y5b6zM6heo2CkJgR@cluster0.iyq8r3y.mongodb.net/Mini-project?retryWrites=true&w=majority"
mongoose.connect(uri)
    .then((result) => {
        console.log("database connected");
    }).catch((err) => {
        console.log(error);
    });
module.exports = mongoose;
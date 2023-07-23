const {Schema,model}=require('../connection');   // relative path 
const mySchema=new Schema({
    name:String,
    email:String,
    password:String, 

});
model('user',mySchema);
module.exports=model('user',mySchema);

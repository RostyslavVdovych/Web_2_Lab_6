var mongoose=require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://admin:admin@cluster0.thiz3.mongodb.net/test');
console.log("mongodb connect...")
module.exports=mongoose;
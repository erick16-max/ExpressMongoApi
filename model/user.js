const mongoose = require("mongoose");
mongoose.Promise =global.Promise;

const Schema = mongoose.Schema;
const userSchema = new Schema({
    name:{
        type:String,
        require:true,
        unique:true
    },
    department:{
        type:String,
        require:true,
        
    }
})
  
const User = mongoose.model('User',userSchema);

module.exports = User;


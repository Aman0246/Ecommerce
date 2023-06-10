const mongoose=require("mongoose")
const userSchema = new mongoose.Schema({
    fname: {
      type: String,
      trime:true
    },
    lname: {
      type: String,
      trime:true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trime:true
    },
    password: {
      type: String,
      required: true,
      minlength: 3,
      trime:true
    },
    img:{
        type: String,
        
    }
  },{timestamps:true}
  );
  
  const UserModel = mongoose.model('UserModel', userSchema);
  
  module.exports = {UserModel};
  
  
  
  
  
  
  
  
import mongoose from "mongoose";
  const userSchema = new mongoose.Schema({
    email: String,
    passsword: String,
    type: String,
    name: String
  
  });
  const user = mongoose.model("user", userSchema);
  export default user;
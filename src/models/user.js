import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  type: String,
  name: String,
  role: {
    type: String,
    enum: ["admin", "instructor"],
    default: "instructor",
  }
});
const user = mongoose.model("user", userSchema);
export default user;
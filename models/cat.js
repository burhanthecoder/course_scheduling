import mongoose from "mongoose";
  const catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    color: String,
    breed: String,
    weight: Number,
  });
  const Cat = mongoose.model("Cat", catSchema);
  export default Cat;
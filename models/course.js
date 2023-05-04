import mongoose from "mongoose";
const courseSchema = new mongoose.Schema({
  name: String,
  level: String,
  description: String,
  lectures: Number,
  instructor: { type: mongoose.Types.ObjectId, ref: 'User' },
  date: { type: Date }
});
const course = mongoose.model("course", courseSchema);
export default course;
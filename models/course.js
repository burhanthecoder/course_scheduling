import mongoose from "mongoose";
  const courseSchema = new mongoose.Schema({
    name: String,
    level: String,
    description: String,
    image: String,
    lectures: [{ type : mongoose.Types.ObjectId , ref: 'Lecture' }],
    instructor: { type : mongoose.Types.ObjectId , ref: 'User' },
    date: { type: Date}

  
  });
  const course = mongoose.model("course", courseSchema);
  export default course;
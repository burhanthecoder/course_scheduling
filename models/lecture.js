import mongoose from "mongoose";
  const lectureSchema = new mongoose.Schema({
    title: String,
    
    description: String,
    instructor: { type : mongoose.Types.ObjectId , ref: 'User' }
  
  });
  const lecture = mongoose.model("lecture", lectureSchema);
  export default lecture;
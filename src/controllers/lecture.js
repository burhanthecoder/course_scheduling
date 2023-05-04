import Lecture from "../models/lecture";


export const getAllLecture = async (req, res) => {
  if (req.user.role !== "admin") {
    const lecture = await Lecture.find({
      instructor: req.user._id,
    });
    return res.json(lecture);
  }
  const lecture = await Lecture.find();
  return res.json(lecture);
}
export const getLecture = async (req, res) => {
  const lecture = await Lecture.findById(req.params.id);
  res.json(lecture);
}
export const createLecture = async (req, res) => {
  const newLecture = new Lecture(req.body);
  await newLecture.save();
  res.json(newLecture);
}
export const updateLecture = async (req, res) => {
  const lecture = await Lecture.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(lecture);
}
export const deleteLecture = async (req, res) => {
  await Lecture.findByIdAndDelete(req.params.id);
  res.json({ message: "Lecture deleted" });
}
export const getLectureByName = async (req, res) => {
  const lecture = await Lecture.find({ name: req.params.name });
  res.json(lecture);
}



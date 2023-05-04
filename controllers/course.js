import Course from "../models/course";

export const getAllCourse = async (req, res) => {
  const course = await Course.find();
  res.json(course);
}
export const getCourse = async (req, res) => {
  const course = await Course.findById(req.params.id);
  res.json(course);
}
export const createCourse = async (req, res) => {
  // check there is not same cousre on same day
  const course = await Course.findOne({
    date: req.body.date,
  }).exec();
  if (course) {
    return res.status(400).json({
      message: "COURSE_ALREADY_EXISTS",
    });
  }
  const newCourse = new Course(req.body);
  await newCourse.save();
  res.json(newCourse);
}
export const updateCourse = async (req, res) => {
  const course = await Course.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(course);
}
export const deleteCourse = async (req, res) => {
  await Course.findByIdAndDelete(req.params.id);
  res.json({ message: "Course deleted" });
}
export const getCourseByName = async (req, res) => {
  const course = await Course.find({ name: req.params.name });
  res.json(course);
}

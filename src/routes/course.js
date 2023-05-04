import { Router } from "express";
import {
  createCourse,
  getAllCourse,
  getCourse,
  updateCourse,
  deleteCourse,
  getCourseByName,
} from "../controllers/course";

const router = Router();
router.get("/", getAllCourse);
router.get("/:id", getCourse);
router.post("/", createCourse);
router.put("/:id", updateCourse);
router.delete("/:id", deleteCourse);
router.get("/name/:name", getCourseByName);

export default router;
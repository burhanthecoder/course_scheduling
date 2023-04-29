import { Router } from "express";
    import {
      createLecture,
      getAllLecture,
      getLecture,
      updateLecture,
      deleteLecture,
      getLectureByName,
    } from "../controllers/lecture";
    
    const router = Router();
    router.get("/", getAllLecture);
    router.get("/:id", getLecture);
    router.post("/", createLecture);
    router.put("/:id", updateLecture);
    router.delete("/:id", deleteLecture);
    router.get("/name/:name", getLectureByName);
    
    export default router;
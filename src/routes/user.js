import { Router } from "express";
import { getInstructor, login, register } from "../controllers/user";



const router = Router();

router.post("/login", login);
router.post("/register", register);
router.get("/instructors", getInstructor);


export default router;
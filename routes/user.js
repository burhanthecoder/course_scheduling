import { Router } from "express";
import {
  login,
  register,
} from "../controllers/user";

// const router = Router();
// router.get("/", getAllUser);
// router.get("/:id", getUser);
// router.post("/", createUser);
// router.put("/:id", updateUser);
// router.delete("/:id", deleteUser);
// router.get("/name/:name", getUserByName);


const router = Router();

router.post("/login", login);
router.post("/register", register);


export default router;
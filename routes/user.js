import { Router } from "express";
    import {
      createUser,
      getAllUser,
      getUser,
      updateUser,
      deleteUser,
      getUserByName,
    } from "../controllers/user";
    
    const router = Router();
    router.get("/", getAllUser);
    router.get("/:id", getUser);
    router.post("/", createUser);
    router.put("/:id", updateUser);
    router.delete("/:id", deleteUser);
    router.get("/name/:name", getUserByName);
    
    export default router;
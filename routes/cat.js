import { Router } from "express";
    import {
      createCat,
      getAllCats,
      getCat,
      updateCat,
      deleteCat,
      getCatByName,
    } from "../controllers/cat";
    
    const router = Router();
    router.get("/", getAllCats);
    router.get("/:id", getCat);
    router.post("/", createCat);
    router.put("/:id", updateCat);
    router.delete("/:id", deleteCat);
    router.get("/name/:name", getCatByName);
    
    export default router;
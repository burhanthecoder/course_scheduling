import Cat from "../models/cat";

    export const getAllCats = async (req, res) => {
      const cats = await Cat.find();
      res.json(cats);
    }
    export const getCat = async (req, res) => {
      const cat = await Cat.findById(req.params.id);
      res.json(cat);
    }
    export const createCat = async (req, res) => {
      const newCat = new Cat(req.body);
      await newCat.save();
      res.json(newCat);
    }
    export const updateCat = async (req, res) => {
      const cat = await Cat.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      res.json(cat);
    }
    export const deleteCat = async (req, res) => {
      await Cat.findByIdAndDelete(req.params.id);
      res.json({ message: "Cat deleted" });
    }
    export const getCatByName = async (req, res) => {
      const cat = await Cat.find({ name: req.params.name });
      res.json(cat);
    }
    
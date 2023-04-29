import User from "../models/user";

    export const getAllUser = async (req, res) => {
      const lecture = await user.find();
      res.json(user);
    }
    export const getUser = async (req, res) => {
      const lecture = await user.findById(req.params.id);
      res.json(user);
    }
    export const createUser= async (req, res) => {
      const newUser = new User(req.body);
      await newUser.save();
      res.json(newUser);
    }
    export const updateUser = async (req, res) => {
      const user = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      res.json(user);
    }
    export const deleteUser = async (req, res) => {
      await User.findByIdAndDelete(req.params.id);
      res.json({ message: "User deleted" });
    }
    export const getUserByName = async (req, res) => {
      const lecture = await User.find({ name: req.params.name });
      res.json(user);
    }
    
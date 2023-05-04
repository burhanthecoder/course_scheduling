import User from "../models/user";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


export const login = async (req, res) => {
  const user = await User.findOne(
    {
      email: req.body.email,
    }
  ).exec();
  if (user) {
    const match = await bcrypt.compare(req.body.password, user.password);
    if (match) {
      const token = jwt.sign(
        { _id: user._id, role: user.role },
        process.env.SECRET_KEY
      );
      delete user.password;
      res.json({
        access_token: token,
        user: user,
      });
    } else {
      res.status(400).json({
        error: "INVALID_PASSWORD",
      });
    }
  }
}


export const register = async (req, res) => {
  const user = await User.findOne(
    {
      email: req.body.email,
    }
  ).exec();
  if (user) {
    return res.status(400).json({
      error: "EMAIL_ALREADY_EXISTS",
    });
  }
  const salt = await bcrypt.genSalt(10);
  req.body.password = await bcrypt.hash(req.body.password, salt);
  const newUser = new User(req.body);
  await newUser.save();
  delete newUser.password;
  const token = jwt.sign(
    { _id: newUser._id, role: newUser.role },
    process.env.SECRET_KEY
  );
  res.json({
    access_token: token,
    user: newUser,
  });
}
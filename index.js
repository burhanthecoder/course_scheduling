
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import course from "./routes/course";
import lecture from "./routes/lecture";
import user from "./routes/user";
import { verifyAccessToken } from "./controllers/authMiddleware";
const app = express();
dotenv.config();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.use("/course", verifyAccessToken, course);
app.use("/lecture", verifyAccessToken, lecture);
app.use("/user", user);

app.listen(process.env.PORT ?? 5000, () => {
  console.log("Server started at port " + process.env.PORT ?? 5000);
  mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true },)
});

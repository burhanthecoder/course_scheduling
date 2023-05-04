import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import course from "./routes/course";
import lecture from "./routes/lecture";
import user from "./routes/user";
import { verifyAccessToken } from "./controllers/authMiddleware";
import path from "path";
import { fileURLToPath } from 'url';
const app = express();
dotenv.config();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


app.use(express.static(path.join(__dirname, 'client')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'index.html'));
});
app.use("/course", verifyAccessToken, course);
app.use("/lecture", verifyAccessToken, lecture);
app.use("/user", user);

app.listen(process.env.PORT ?? 5000, () => {
  console.log("Server started at port " + process.env.PORT ?? 5000);
  mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true },)
});

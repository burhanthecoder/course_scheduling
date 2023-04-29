
    import express from "express";
    import mongoose from "mongoose";
    import dotenv from "dotenv";
    import cors from "cors";
    import bodyParser from "body-parser";
    import cat from "./routes/cat";
    import course from "./routes/course";
    import lecture from "./routes/lecture";
    import user from "./routes/user";
    const app = express();
    dotenv.config();
    app.use(cors());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.get("/", (req, res) => {
      res.send("Hello World");
    });
    app.use("/cat", cat);
    app.use("/course", course);
    app.use("/lecture", lecture);
    app.use("/user", user);

    app.listen(process.env.PORT || 5000, () => {
      console.log("Server started at port 5000");
      mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, )
    });
   
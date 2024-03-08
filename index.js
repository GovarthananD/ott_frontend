import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { DB } from "./DB/database.js";
import { movieRoute } from "./routes/movieRoute.js";
import { userRouter } from "./routes/authentication.js";


dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

DB();

app.use(userRouter)
app.use(movieRoute)

 
app.get("/", (req, res) => {
  res.send({ message: "Welcome to the Backend" });
});

app.listen(process.env.PORT, () => console.log("Server working on PORT"));

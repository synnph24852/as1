import express from "express";
import dotenv from "dotenv";
import userRouter form "./src/router/us"
dotenv.config();
const app = express();
app.use(express.json());
app.listen(process.env.PORT, () => console.log(`Server is running ${process.env.PORT}`));

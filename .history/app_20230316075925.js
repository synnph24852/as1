import express from "express";
import dotenv from "dotenv";
import userR
dotenv.config();
const app = express();
app.use(express.json());
app.listen(process.env.PORT, () => console.log(`Server is running ${process.env.PORT}`));

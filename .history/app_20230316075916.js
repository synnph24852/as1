import express from "express";
import dotenv from "dotenv";
importuserR
dotenv.config();
const app = express();
app.use(express.json());
app.listen(process.env.PORT, () => console.log(`Server is running ${process.env.PORT}`));

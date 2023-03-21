import express from "express"
const router = express.Router();
import { getAll } from "../controllers/user";
router.get("/users")
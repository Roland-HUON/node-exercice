import express from "express";
import { getProfil } from "../controllers/UserController.js";

const router = express.Router();

router.get('/', getProfil)

export default router
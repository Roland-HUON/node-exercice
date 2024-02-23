import express from "express";
import { getProfil, favoriteAgent } from "../controllers/UserController.js";

const router = express.Router();

router
    .get('/', getProfil)
    .put('/favorite', favoriteAgent)

export default router
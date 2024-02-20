import express from "express";
import { getAgents, getAgent, createAgent, updateAgent, deleteAgent } from "../controllers/AgentController.js";

const router = express.Router()

router
    .get('/', getAgents)
    .get('/:id', getAgent)
    .post('/', createAgent)
    .put('/:id', updateAgent)
    .delete('/:id', deleteAgent)

export default router
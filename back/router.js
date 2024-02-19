import express from "express";
import AgentRoutes from "./routes/AgentRoutes.js";
import HelloRoutes from "./routes/Helloroutes.js"

const router = express.Router()

router
    .use('/agents', AgentRoutes)
    .use('/hello', HelloRoutes)

export default router
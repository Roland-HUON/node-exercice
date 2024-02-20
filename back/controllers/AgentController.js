import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getAgents = (req, res) => {
    res.send([
        'Jett',
        'Raze',
        'Breach',
        'Omen',
        'Brimstone',
        'Phoenix',
        'Sage',
        'Sova',
        'Viper',
        'Cypher',
        'Reyna',
        'Killjoy',
        'Skye',
        'Yoru',
        'Astra',
        'Kay/o',
        'Chamber',
        'Neon',
        'Fade',
        'Harbor',
        'Gekko',
        'Deadlock',
        'Iso'
    ])
}

const getAgent = (req, res) => {

}

const createAgent = (req, res) => {
    let agent = req.body;
    prisma.agent.create({
        data : {
            name : agent.name
        }
    })
    .then((agent)=>{
        res.json(agent);
    })
    .catch((error)=>{
        res.json(error);
    })
}

const updateAgent = (req,res) => {

}

const deleteAgent = (req, res) => {

}

export { getAgents, getAgent, createAgent, updateAgent, deleteAgent }
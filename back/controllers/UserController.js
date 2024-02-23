import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

const getProfil = (req,res) =>{
    const token = req.headers['x-access-token']

    if(!token){
        res.json({error: 'No token provided'})
    }

    jwt.verify(token, process.env.JWT_SECRET, (error, decoded)=>{
        if(error){
            return res.json({error: 'Unautorized'})
        }

        prisma.user.findUnique({
            where:{
                email: decoded.email
            }
        })
        .then((user)=>{
            res.json(user)
        })
        .catch((error)=>{
            res.json(error)
        })
    })
}

export { getProfil }
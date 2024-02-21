const signUp = (req,res) =>{
    const {email, pseudo, password} = req.body;

    Prisma.user.create({
        email, 
        pseudo, 
        password,
    })
    .then((user)=>{
        res.json(user);
    })
    .catch((error)=>{
        res.json(error);
    })
}

export { signUp }
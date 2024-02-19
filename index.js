import express from "express";

const app = express();
const port = 5000;
const agentsValorants = [
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
]

app.get('/', (req, res) => {
    res.send('Hello there !');
})
app.get('/agents', (req, res) => {
    res.send(agentsValorants);
})

app.listen(5000, () =>{
    console.log('Example app listening at http://localhost:'+ port);
})
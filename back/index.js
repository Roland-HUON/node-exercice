import express from "express";
import cors from "cors";
import router from "./router.js";
import bodyParser from "body-parser";

const app = express();
app
    .use(cors())
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({extended: true}))
    .use(router)
    
const port = 5000;

app.get('/', (req, res) => {
    res.send('Hello there !');
})


app.listen(5000, () =>{
    console.log('Example app listening at http://localhost:'+ port);
})
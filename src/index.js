import express  from "express";
import { PORT } from './config.js'
import indexRoutes from './routes/index.routes.js'

const app = express();

import cors from "cors";
app.use(cors());

import bodyParser from 'body-parser'
app.use(bodyParser.json())

app.use('/api', indexRoutes);


app.get("/", (request, res) => {
    res.send("<h1>Prueba Servidor OK!!!")
})

app.listen(PORT, function(err){
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port", PORT);
})
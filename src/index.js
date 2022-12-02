import express from "express";
import { PORT } from './config.js'
import indexRoutes from './routes/index.routes.js'


const app = express();

import cors from "cors";
app.use(cors());

import bodyParser from 'body-parser'
app.use(bodyParser.json())

app.use('/api', indexRoutes);



app.listen(PORT, () => {
    console.log(`Server Funcionando y esta escuchando en el ${PORT} `)
})
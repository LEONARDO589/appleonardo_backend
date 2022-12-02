import express from "express";
import { PORT } from './config.js'
import indexRoutes from './routes/index.routes.js'
import estudioRouter from './routes/estudios.router.js'

const app = express();

import cors from "cors";
app.use(cors());

import bodyParser from 'body-parser'
app.use(bodyParser.json())

app.use(indexRoutes);
app.use(estudioRouter);


app.listen(PORT, () => {
    console.log(`Server Funcionando y esta escuchando en el ${PORT} `)
})
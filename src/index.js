import express from "express";
import { PORT } from './config.js'
const app = express();

import cors from "cors";
app.use(cors());



app.listen(PORT, () => {
    console.log(`Server Funcionando y esta escuchando en el ${PORT} `)
})
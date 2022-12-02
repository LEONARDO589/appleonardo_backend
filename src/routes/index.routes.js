import { Router } from "express";
import { pool } from "../db/condb.js";
const router = Router();


import estudioRouter from './estudios.router.js'
import educacionRouter from './educacion.router.js'


router.get('/', async (req, res) =>{
    const [rows] = await pool.query('SELECT 1 + 1 as result')
    console.log(rows[0]);
    res.json(rows[0])
})


router.use("/estudios", estudioRouter)
router.use("/educacion", educacionRouter)

export default router;
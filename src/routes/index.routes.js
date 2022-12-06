const { Router } = require('express');
const conectarBD = require('../db/condb.js');
const router = Router();



const educacionRouter = require('./educacion.router.js')

router.use("/educacion", educacionRouter)

router.get("/", (request, res) => {
    res.send("<h1>Prueba API OK!!!")
})


router.get('/suma', async (req, res) =>{
    const [rows] = await conectarBD.query('SELECT 1 + 1 as result')
    console.log(rows[0]);
    res.json(rows[0])
})


module.exports = router;
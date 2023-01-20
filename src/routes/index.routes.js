const { Router } = require('express');
const conectarBD = require('../db/condb.js');
const router = Router();



const educacionRouter = require('./educacion.router.js')
const contactoRouter = require('./contacto.router.js')

router.use("/educacion", educacionRouter)
router.use("/contacto", contactoRouter)

router.get("/con", (request, res) => {
    res.send("<h1>Prueba API OK!!!")
})


router.get('/suma', async (req, res) =>{
    const [rows] = await conectarBD.query('SELECT 1 + 1 as result')
    console.log(rows[0]);
    res.json(rows[0])
})


module.exports = router;
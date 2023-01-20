const { Router } = require('express');
const {getAllEducacion, getEducacion, createEducacion, updateEducacion, deleteEducacion} = require('../controller/educacionController.js');

const router = Router();

router.get('/listar', getAllEducacion)
router.get('/listar/:id', getEducacion)
router.post('/crear', createEducacion)
router.put('/update/:id', updateEducacion)
router.delete('/:id', deleteEducacion)

router.get("/con", (request, res) => {
    res.send("<h1>Prueba educacion !!!")
})

module.exports = router;

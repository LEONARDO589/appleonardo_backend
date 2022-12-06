const { Router } = require('express');
const {getAllEducacion, getEducacion, createEducacion, updateEducacion, deleteEducacion} = require('../controller/educacionController.js');

const educacionController = require('../controller/educacionController')

const router = Router();

router.get('/listar', educacionController.getAllEducacion)
router.get('/listar/:id', getEducacion)
router.post('/', createEducacion)
router.put('/:id', updateEducacion)
router.delete('/:id', deleteEducacion)

router.get("/", (request, res) => {
    res.send("<h1>Prueba educacion !!!")
})

module.exports = router;

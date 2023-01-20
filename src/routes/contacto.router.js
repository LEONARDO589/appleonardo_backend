const { Router } = require('express');
const {getAllContaco, createContacto} = require('../controller/contactoController.js');

const router = Router();

router.get('/listar', getAllContaco)
router.post('/save', createContacto)

router.get("/contacto", (request, res) => {
    res.send("<h1>Prueba contacto !!!")
})

module.exports = router;

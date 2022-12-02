import { Router } from "express";
import {getEstudios, getEstudio, updateEstudios, createEstudios, deleteEstudios} from '../controller/estudiosController.js'

const router = Router();

router.get('/listar', getEstudios)
router.get('/listar/:id', getEstudio)
router.post('/', createEstudios)
router.put('/:id', updateEstudios)
router.delete('/:id', deleteEstudios)



export default router;


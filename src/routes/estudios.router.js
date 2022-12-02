import { Router } from "express";
import {getEstudios, getEstudio, updateEstudios, createEstudios, deleteEstudios} from '../controller/estudiosController.js'

const router = Router();

router.get('/estudios', getEstudios)
router.get('/estudios/:id', getEstudio)
router.post('/estudios', createEstudios)
router.put('/estudios/:id', updateEstudios)
router.delete('/estudios/:id', deleteEstudios)



export default router;


import { Router } from "express";
import {getAllEducacion, getEducacion, createEducacion, updateEducacion, deleteEducacion} from '../controller/educacionController.js'

const router = Router();

router.get('/listar', getAllEducacion)
router.get('/listar/:id', getEducacion)
router.post('/', createEducacion)
router.put('/:id', updateEducacion)
router.delete('/:id', deleteEducacion)



export default router;


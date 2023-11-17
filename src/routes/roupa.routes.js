import { getRoupas, getRoupaId, addRoupa, deleteRoupa, updateRoupa } from '../controllers/roupa.controller.js';
import {Router} from 'express'

const roupa = Router();

roupa.get('/', getRoupas);
roupa.get('/:id', getRoupaId);
roupa.post('/', addRoupa);
roupa.delete('/:id', deleteRoupa);
roupa.put('/:id', updateRoupa);

export default roupa
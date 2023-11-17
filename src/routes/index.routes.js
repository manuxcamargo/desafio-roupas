import {Router} from 'express'
import roupa from "./roupa.routes.js"

const rotas = Router();

rotas.use('/roupas', roupa);
rotas.use('/roupas/:id', roupa);

rotas.get('/', (req, res) => {
    return res.status(200).send({message: 'Servidor ok!'})
});

export default rotas
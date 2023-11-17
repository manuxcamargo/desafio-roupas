import roupaModel from '../models/roupas/roupa.js';
import listaRoupas from '../models/roupas/clothes.js';

const roupas = new listaRoupas();
let contador = 0
export const getRoupas = (req, res) => {
    let roupa = roupas.getAllchothes();
    const { tipo, nome, tamanho } = req.params;
    if(nome){
        roupa = roupas.pegarcor(nome)
    }if(tipo && tamanho){
        roupa = roupas.pegartamanhoetipo(tipo, tamanho)
    }
    res.send(roupa);

};

export const getRoupaId = (req, res) => {
    const { id } = req.params;
    const roupa = roupas.getchothes(id);
    res.send(roupa);
};

export const addRoupa = (req, res) => {
    const {nome, preco, tamanho, tipo, quantidade, imagem}= req.body;
    validarRoupa(req, res);
    if (validarRoupa) {
        const roupa = new roupaModel(nome, preco, tamanho, tipo, quantidade, imagem);
        roupas.addchothes(roupa);
        contador++
        res.send({message :`Roupa foi adicionada com sucesso ID:  ` , roupa, contador});
       
    }
};

export const deleteRoupa = (req, res) => {
    const { id } = req.params;
    roupas.removechothes(id);
    contador--
    res.send({message:`Roupa foi deletada com sucesso ID: ${id}`, contador});
};

export const updateRoupa = (req, res) => {
    const { id } = req.params;
    const { nome, preco, tamanho, tipo, quantidade, imagem } = req.body;
    const roupaAtualizada = {
        id,
        nome,
        preco,
        tamanho,
        tipo,
        quantidade,
        imagem
    };
    validarRoupa(req, res);
    if (validarRoupa) {
           roupas.updatechothes(id, roupaAtualizada);
    res.send(`Roupa foi atualizada com sucesso. ID: ${id}`); 
    }
};

export const validarRoupa = (req, res) => {
    const { nome, preco, tamanho, tipo, quantidade, imagem } = req.body;
    if (nome.length < 6 || nome.length > 40) {
        res.send('O nome do item deve ter no mínimo 6 caracteres e no máximo 40 caracteres');
        return false
    } else if (tipo.length > 50) {
        res.send('O tipo do item deve ser uma string com no máximo 50 caracteres');
        return false
    } else if (tamanho !== 'PP' && tamanho !== 'P' && tamanho !== 'M' && tamanho !== 'G' && tamanho !== 'GG' && tamanho !== 'XG') {
        res.send('O tamanho do item deve ser apenas as strings PP, P, M, G, GG e XG');
        return false
    } else if (quantidade < 0 || quantidade > 15000) {
        res.send('A quantidade em estoque deve ser um número inteiro positivo no maximo 15000');
        return false
    } else if (imagem.length < 6 || imagem.length > 40) {
        res.send('A URL está inválida');
        return false
    }else if (nome === '' || preco === '' || tamanho === '' || tipo === '' || quantidade === '' || imagem === '') {
        res.send('Todos os campos devem ser preenchidos');
        return false
    }  else {
        return true
    }
};
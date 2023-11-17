import { v4 as uuidv4 } from 'uuid'

class roupa {
    constructor(nome, preco, tamanho, tipo, quantidade, imagem) {
        this.id = uuidv4();
        this.nome = nome;
        this.preco = preco;
        this.tamanho = tamanho;
        this.tipo = tipo;
        this.quantidade = quantidade;
        this.imagem = imagem;
    }
}

export default roupa
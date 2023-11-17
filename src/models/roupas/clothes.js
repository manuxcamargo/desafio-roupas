class chothes {
    constructor() {
        this.chothes = [];
    }
    getAllchothes() {
        return this.chothes;
    }
    getchothes(id) {
        return this.chothes.find((chothes) => chothes.id === id);
    }
    addchothes(chothes) {
        this.chothes.push(chothes);
    }
    pegarnome(nome){
        return this.chothes.find((chothes) => chothes.nome === nome);
    }
    pegartamanhoetipo(tamanho, tipo){
        return this.chothes.find((chothes) => chothes.tamanho === tamanho && chothes.tipo === tipo);
    }
    updatechothes(id, chothes) {
        const index = this.chothes.findIndex((chothes) => chothes.id === id);
        this.chothes[index] = chothes; 
    }
    removechothes(id) {
        this.chothes = this.chothes.filter((chothes) => this.chothes.id !== id)
    }
}

export default chothes
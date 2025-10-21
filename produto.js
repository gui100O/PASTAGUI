class Produto {
    constructor(nome, preco, estoque) {
        this.nome = nome;
        this.preco = preco;
        this.estoque = estoque;
    }

    comprar(qtd) {
        if (qtd > this.estoque) {
            console.log(`Estoque insuficiente! Temos apenas ${this.estoque} unidades de ${this.nome}.`);
        } else {
            this.estoque -= qtd;
            console.log(`Compra realizada: ${qtd} ${this.nome}(s) por R$${(this.preco * qtd).toFixed(2)}.`);
        }
    }

    repor(qtd) {
        this.estoque += qtd;
        console.log(`Estoque de ${this.nome} reposto. Agora temos ${this.estoque} unidades.`);
    }

    mostrarEstoque() {
        console.log(`Estoque atual de ${this.nome}: ${this.estoque} unidades.`);
    }
}

module.exports = { Produto };

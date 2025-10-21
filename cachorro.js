class Cachorro {
    constructor(nome, raca) {
        this.nome = nome;
        this.raca = raca;
    }

    latir() {
        console.log(`Au au! Eu sou o ${this.nome}, da raça ${this.raca}.`);
    }
}

module.exports = { Cachorro };

// Atividade 3 — Classe Carro
class Carro {
    constructor(modelo) {
        this.modelo = modelo;
        this.velocidade = 0;
    }

    acelerar() {
        this.velocidade += 10;
        console.log(`${this.modelo} acelerou para ${this.velocidade} km/h.`);
    }

    frear() {
        this.velocidade -= 10;
        if (this.velocidade < 0) this.velocidade = 0;
        console.log(`${this.modelo} reduziu para ${this.velocidade} km/h.`);
    }

    mostrarVelocidade() {
        console.log(`Velocidade atual do ${this.modelo}: ${this.velocidade} km/h.`);
    }
}

module.exports = { Carro };

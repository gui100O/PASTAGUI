// Importações
const { Pessoa } = require("./pessoa");
const { CalcSimples } = require("./calculadora");
const { Carro } = require("./carro");
const { Cachorro } = require("./cachorro");
const { Produto } = require("./produto");

// Atividade 1
console.log("Atividade 1:");
const pessoa1 = new Pessoa("João", 25);
const pessoa2 = new Pessoa("Maria", 30);
pessoa1.apresentar();
pessoa2.apresentar();

// Atividade 2
console.log("\nAtividade 2:");
const calc = new CalcSimples();
calc.somar(10, 5);
calc.subtrair(10, 5);
calc.multiplicar(10, 5);
calc.dividir(10, 5);
calc.dividir(10, 0);

// Atividade 3
console.log("\nAtividade 3:");
const carro = new Carro("Toyota");
carro.acelerar();
carro.acelerar();
carro.mostrarVelocidade();
carro.frear();
carro.mostrarVelocidade();

// Atividade 4
console.log("\nAtividade 4:");
const cachorro1 = new Cachorro("Rex", "Pastor Alemão");
const cachorro2 = new Cachorro("Luna", "Labrador");
const cachorro3 = new Cachorro("Bolt", "Beagle");
cachorro1.latir();
cachorro2.latir();
cachorro3.latir();

// Atividade 5
console.log("\nAtividade 5:");
const produto1 = new Produto("Notebook", 3500.00, 10);
produto1.mostrarEstoque();
produto1.comprar(3);
produto1.mostrarEstoque();
produto1.repor(5);
produto1.mostrarEstoque();
produto1.comprar(15);

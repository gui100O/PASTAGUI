class CalcSimples {
    somar(a, b) {
        console.log(`Soma: ${a + b}`);
    }

    subtrair(a, b) {
        console.log(`Subtração: ${a - b}`);
    }

    multiplicar(a, b) {
        console.log(`Multiplicação: ${a * b}`);
    }

    dividir(a, b) {
        if (b === 0) {
            console.log("Erro: divisão por zero!");
        } else {
            console.log(`Divisão: ${(a / b).toFixed(2)}`);
        }
    }
}

module.exports = { CalcSimples };

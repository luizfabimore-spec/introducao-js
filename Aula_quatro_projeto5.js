const prompt = require('prompt-sync')({ sigint: true });

const somar = (a, b) => a + b;
const subtrair = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => (b !== 0 ? a / b : "Erro: Divisão por zero");

function realizarOperacao(operacaoFn, nomeOperacao) {
    console.log(`\n--- ${nomeOperacao} ---`);
    let n1 = parseFloat(prompt("Digite o primeiro número: "));
    let n2 = parseFloat(prompt("Digite o segundo número: "));

    if (isNaN(n1) || isNaN(n2)) {
        console.log("Erro: Digite apenas números válidos.");
    } else {
        console.log(`Resultado: ${operacaoFn(n1, n2)}`);
    }
}

function iniciarCalculadora() {
    let continuar = true;

    while (continuar) {
        console.log("\n      CALCULADORA JS      ");
        console.log("==========================");
        console.log("1. Somar (+)");
        console.log("2. Subtrair (-)");
        console.log("3. Multiplicar (*)");
        console.log("4. Dividir (/)");
        console.log("5. Sair");
        
        let opcao = prompt("Escolha uma operação: ");

        switch (opcao) {
            case "1": realizarOperacao(somar, "SOMA"); break;
            case "2": realizarOperacao(subtrair, "SUBTRAÇÃO"); break;
            case "3": realizarOperacao(multiplicar, "MULTIPLICAÇÃO"); break;
            case "4": realizarOperacao(dividir, "DIVISÃO"); break;
            case "5":
                console.log("Desligando calculadora...");
                continuar = false;
                break;
            default:
                console.log("Opção inválida.");
        }
    }
}

iniciarCalculadora();
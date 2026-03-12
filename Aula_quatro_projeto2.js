const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

let saldo = 0;

// Função para formatar moeda
const formatarMoeda = (valor) => `R$ ${valor.toFixed(2)}`;

function verSaldo() {
    console.log(`\n--- SEU SALDO: ${formatarMoeda(saldo)} ---`);
    exibirMenu();
}

function depositar() {
    rl.question("\nDigite o valor do depósito: R$ ", (valor) => {
        const num = parseFloat(valor);
        if (num > 0) {
            saldo += num;
            console.log(`✅ Depósito de ${formatarMoeda(num)} realizado!`);
        } else {
            console.log("❌ Valor inválido.");
        }
        exibirMenu();
    });
}

function sacar() {
    rl.question("\nDigite o valor do saque: R$ ", (valor) => {
        const num = parseFloat(valor);
        if (num > 0 && num <= saldo) {
            saldo -= num;
            console.log(`✅ Saque de ${formatarMoeda(num)} realizado!`);
        } else if (num > saldo) {
            console.log("❌ Saldo insuficiente.");
        } else {
            console.log("❌ Valor inválido.");
        }
        exibirMenu();
    });
}

function exibirMenu() {
    console.log("\n=== MENU BANCÁRIO ===");
    console.log("1. Depósito");
    console.log("2. Saque");
    console.log("3. Ver Saldo");
    console.log("4. Sair");
    
    rl.question("Escolha uma opção: ", (opcao) => {
        switch (opcao) {
            case '1': depositar(); break;
            case '2': sacar(); break;
            case '3': verSaldo(); break;
            case '4': 
                console.log("Encerrando... Até logo!");
                rl.close();
                break;
            default:
                console.log("⚠️ Opção inválida!");
                exibirMenu();
        }
    });
}

// Inicia o sistema
exibirMenu();

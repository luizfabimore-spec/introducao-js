const prompt = require("prompt-sync")(); // Ajustado o nome para facilitar

function mostrarPares(limite) {
    let pares = [];

    for (let i = 0; i <= limite; i++) {
        if (i % 2 === 0) {
            pares.push(i);
        }
    }
    console.log("Números pares até " + limite + ":", pares);
}

// 1. Captura o valor do usuário
// 2. Converte para número (Number), pois o prompt retorna texto
const entrada = Number(prompt("Digite um número: "));

// 3. Passa o valor capturado para a função
mostrarPares(entrada);
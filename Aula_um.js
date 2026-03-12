const input = require('prompt-sync')();

let nome = input("Digite seu nome: ");
let sobrenome = input("Digite seu sobrenome: ");

console.log(`Nome completo: ${nome} ${sobrenome}`);
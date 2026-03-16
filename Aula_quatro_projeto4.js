const prompt = require("prompt-sync")();

let pessoa = {
  nome: prompt("Digite seu nome: "),
  idade: parseInt(prompt("Digite sua idade: ")),
  email: prompt("Digite seu email: "),
  telefone: prompt("Digite seu telefone: "),
  cidade: prompt("Digite sua cidade: ")
};

console.log("\n--- Dados da pessoa ---");
for (let chave in pessoa) {
  console.log(`${chave}: ${pessoa[chave]}`);
}

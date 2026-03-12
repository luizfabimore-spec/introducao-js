const carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2024,
    cor: "Prata",
    combustivel: "Flex"
};
console.log("--- Dados do Carro ---");

Object.entries(carro).forEach(([chave, valor]) => {
    console.log(`${chave.toUpperCase()}: ${valor}`);
});

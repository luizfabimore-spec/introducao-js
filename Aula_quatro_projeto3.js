const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const question = (query) => new Promise((resolve) => rl.question(query, resolve));

async function iniciarJogo() {
    console.log("--- CONFIGURAÇÃO DA PARTIDA DE PING PONG ---");

    const jogo = {
        jogador1: {
            nome: await question("Nome do Jogador 1: "),
            cor: await question("Cor do Time 1: "),
            pontos: 0
        },
        jogador2: {
            nome: await question("Nome do Jogador 2: "),
            cor: await question("Cor do Time 2: "),
            pontos: 0
        }
    };

    let executando = true;

    while (executando) {
        console.clear();
        console.log(`\n=== PLACAR ATUAL ===`);
        console.log(`${jogo.jogador1.nome} (${jogo.jogador1.cor}): ${jogo.jogador1.pontos} pts`);
        console.log(`${jogo.jogador2.nome} (${jogo.jogador2.cor}): ${jogo.jogador2.pontos} pts`);
        console.log(`====================`);
        console.log(`1. Ponto para ${jogo.jogador1.nome}`);
        console.log(`2. Ponto para ${jogo.jogador2.nome}`);
        console.log(`3. Encerrar Jogo`);

        const opcao = await question("\nEscolha uma opção: ");

        switch (opcao) {
            case '1':
                jogo.jogador1.pontos++;
                break;
            case '2':
                jogo.jogador2.pontos++;
                break;
            case '3':
                console.log("\n--- JOGO ENCERRADO ---");
                console.log(`Resultado Final: ${jogo.jogador1.pontos} x ${jogo.jogador2.pontos}`);
                executando = false;
                rl.close();
                break;
            default:
                console.log("Opção inválida! Aperte Enter para tentar novamente.");
                await question("");
                break;
        }
    }
}

iniciarJogo();
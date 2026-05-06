const prompt = require('prompt-sync')();

const plataformaAcademica = {
    alunos: [
        { nome: "Miguel", notas: [6.5, 8.0, 6.7] },
        { nome: "Marcelao Balenciefer", notas: [7.5, 8.5, 5.8] },
        { nome: "Carlos", notas: [10, 7.5, 8.8] },
        { nome: "Cairo bola", notas: [5.3, 2.7, 6.9] }
    ]
};

function consultarAluno() {
    while (true) {
        console.log("\n--- Sistema de Consulta Acadêmica ---");
        const nomeBusca = prompt("Digite o nome do estudante (ou 'sair' para encerrar): ").trim();

        if (nomeBusca.toLowerCase() === 'sair') {
            console.log("Encerrando sistema...");
            break;
        }

        const alunoEncontrado = plataformaAcademica.alunos.find(aluno =>
            aluno.nome.toLowerCase() === nomeBusca.toLowerCase()
        );

        if (!alunoEncontrado) {
            console.log("\n[Erro]: Aluno não encontrado na base de dados.");
            continue; // Volta para o início do loop
        }

        const somaNotas = alunoEncontrado.notas.reduce((acc, nota) => acc + nota, 0);
        const media = somaNotas / alunoEncontrado.notas.length;
        const status = media >= 7.0 ? "APROVADO" : "EM RECUPERAÇÃO";

        console.log("-------------------------------------");
        console.log(`Aluno: ${alunoEncontrado.nome}`);
        console.log(`Média Final: ${media.toFixed(1)}`);
        console.log(`Status: ${status}`);
        console.log("-------------------------------------");
    }
}

consultarAluno();
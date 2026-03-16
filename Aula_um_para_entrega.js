const prompt = require('prompt-sync')();

const plataformaAcademica = {
    alunos: [
        { nome: "Gabriel Alexon", notas: [8.5, 9.0, 7.8] },
        { nome: "Cairo Porfilio", notas: [6.0, 5.5, 6.2] },
        { nome: "Neymar", notas: [10, 9.5, 10] },
        { nome: "Jhonatan Guilherme", notas: [4.5, 5.0, 3.0] }
    ]
};

console.log("=== SISTEMA DE GESTÃO ACADÊMICA ===");
console.log("(Digite 'sair' para encerrar o programa)\n");

while (true) {
    const nomeBusca = prompt("Digite o nome do estudante para consulta: ");

    if (nomeBusca.toLowerCase() === 'sair') {
        console.log("Encerrando o sistema...");
        break;
    }

    const aluno = plataformaAcademica.alunos.find(a => 
        a.nome.toLowerCase() === nomeBusca.toLowerCase()
    );

    if (aluno) {
        const soma = aluno.notas.reduce((acc, nota) => acc + nota, 0);
        const media = soma / aluno.notas.length;

        const situacao = media >= 7.0 ? "APROVADO" : "EM RECUPERAÇÃO";

        console.log("------------------------------------");
        console.log(`ALUNO LOCALIZADO: ${aluno.nome}`);
        console.log(`MÉDIA FINAL: ${media.toFixed(1)}`);
        console.log(`STATUS: ${situacao}`);
        console.log("------------------------------------\n");
    } else {
        console.log(`[!] O aluno "${nomeBusca}" não foi encontrado. Tente novamente.\n`);
    }
}
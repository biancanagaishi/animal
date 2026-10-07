/ Instanciando usando o objeto de propriedades (Interface CachorroProps)
const novoCachorro = new Cachorro({
    nomePaciente: "Rex",
    nomeTutor: "Mariana Souza",
    pesoKG: 15.4,
    porte: "Médio",
    precisaTosa: true
});

console.log(`\nPaciente cadastrado: ${novoCachorro.getNomePaciente()}`);
console.log(`Tutor responsável: ${novoCachorro.getNomeTutor()}`);

// Interação via teclado utilizando herança (Modificando o peso via método setter)
const novoPeso = readLine.questionFloat("\nDigite o peso atualizado do animal (KG): ");
novoCachorro.setPeso(novoPeso);

// Exibindo TODOS os dados do animal no final
console.log("\n================================================");
console.log("          DADOS COMPLETOS DO PACIENTE           ");
console.log("================================================");

// Dados herdados da classe Animal
console.log(`Nome do Paciente : ${novoCachorro.getNomePaciente()}`);
console.log(`Nome do Tutor    : ${novoCachorro.getNomeTutor()}`);
console.log(`Peso Atual (KG)  : ${novoCachorro.getPesoKG()}`);

// Dados específicos da classe Cachorro
console.log(`Porte            : ${novoCachorro.getPorte()}`);
console.log(`Precisa de Tosa? : ${novoCachorro.getPrecisaTosa() ? "Sim" : "Não"}`);
console.log("================================================\n");

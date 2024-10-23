const prompt = require('prompt-sync')();

function mediaIdades(pacientes) {
    //Média das idades
    let somaIdades = 0;

    for (let i = 0; i < pacientes.length; i++) {
        somaIdades += pacientes[i].idade;
    }

    let mediaAge = somaIdades / pacientes.length;
    console.log(`\n==========================`);
    console.log(`📊 A média das idades dos pacientes é: ${mediaAge.toFixed(2)} anos.`);
    console.log(`==========================\n`);
}

function pacienteMaiorRisco(pacientes) {
    // Exibir paciente com maior risco
    let maiorRisco = pacientes[0];

    for (let i = 1; i < pacientes.length; i++) {
        if (pacientes[i].condicao.toLowerCase() === "grave" && maiorRisco.condicao.toLowerCase() !== "grave") {
            maiorRisco = pacientes[i];
        } else if (pacientes[i].condicao === maiorRisco.condicao) {
            if (pacientes[i].idade > maiorRisco.idade) {
                maiorRisco = pacientes[i];
            } else if (pacientes[i].idade === maiorRisco.idade) {
                if (pacientes[i].peso > maiorRisco.peso) {
                    maiorRisco = pacientes[i];
                }
            }
        }
    }
    console.log(`\n==========================`);
    console.log(`⚠️ O paciente com maior risco é: ${maiorRisco.nome}`);
    console.log(`Condição: ${maiorRisco.condicao}`);
    console.log(`Idade: ${maiorRisco.idade} anos`);
    console.log(`Peso: ${maiorRisco.peso} kg`);
    console.log(`==========================\n`);
}

function consultaPacientes(pacientes) {
    // Consulta de todos
    console.log("\n==========================");
    console.log("📋 Lista de Pacientes");
    console.log("==========================\n");
    for (let i = 0; i < pacientes.length; i++) {
        console.log(`Paciente ${i + 1}:`);
        console.log(`Nome: ${pacientes[i].nome}`);
        console.log(`Idade: ${pacientes[i].idade} anos`);
        console.log(`Peso: ${pacientes[i].peso} kg`);
        console.log(`Altura: ${pacientes[i].altura} m`);
        console.log(`Condição: ${pacientes[i].condicao}`);
        console.log(`--------------------------\n`);
    }
}

function cadastraPaciente(pacientes) {
    // Adicionar paciente
    console.log("\n==========================");
    console.log("📝 Cadastre um novo paciente");
    console.log("==========================\n");

    pacientes.push({
        nome: prompt("Digite o nome do paciente: "),
        idade: Number(prompt("Informe a idade dele(a): ")),
        peso: Number(prompt("Informe o peso do paciente: ")),
        altura: Number(prompt("Digite a altura do paciente: ")),
        condicao: prompt("Qual a condição do paciente? ")
    });
}

function principal() {
    let pacientes = [
        {
            nome: "João",
            idade: 65,
            peso: 80,
            altura: 1.75,
            condicao: "grave"
        },

        {
            nome: "Maria",
            idade: 58,
            peso: 70,
            altura: 1.68,
            condicao: "moderada"
        },

        {
            nome: "Pedro",
            idade: 45,
            peso: 85,
            altura: 1.82,
            condicao: "leve"
        },

        {
            nome: "Ana",
            idade: 70,
            peso: 65,
            altura: 1.60,
            condicao: "grave"
        },

        {
            nome: "Carlos",
            idade: 50,
            peso: 90,
            altura: 1.78,
            condicao: "moderada"
        },
    ];

    let opcao;
    do {
        console.log("\n==========================");
        console.log("📋 Menu de Opções");
        console.log("==========================");
        console.log("1. Cadastrar paciente");
        console.log("2. Consultar pacientes");
        console.log("3. Paciente com maior risco");
        console.log("4. Média das idades");
        console.log("5. Sair");
        console.log("==========================");

        opcao = Number(prompt("Escolha sua opção: "));

        switch (opcao) {
            case 1:
                cadastraPaciente(pacientes);
                break;

            case 2:
                consultaPacientes(pacientes);
                break;

            case 3:
                pacienteMaiorRisco(pacientes);
                break;

            case 4:
                mediaIdades(pacientes);
                break;

            case 5:
                console.log("\n🚪 Programa será encerrado...\n");
                break;

            default:
                console.log("❌ Opção Inválida!");
        }
    } while (opcao != 5);
}

principal();

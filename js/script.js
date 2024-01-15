// Funções para manipulação do menu
function cadastrarPaciente() {
    const nome = prompt("Digite o nome do paciente:");
    const telefone = prompt("Digite o telefone do paciente:");

    const pacientesCadastrados = getPacientesCadastrados();

    // Verifica se o paciente já está cadastrado pelo telefone
    const pacienteExistente = pacientesCadastrados.find(p => p.telefone === telefone);

    if (pacienteExistente) {
        alert("Paciente já cadastrado!");
        return;
    }

    // Cria um novo paciente e o adiciona à lista
    const novoPaciente = { nome, telefone };
    pacientesCadastrados.push(novoPaciente);

    // Atualiza o armazenamento local com a lista atualizada de pacientes
    setPacientesCadastrados(pacientesCadastrados);

    // Atualiza a interface de usuário
    atualizarOutput("Paciente cadastrado com sucesso!");
}

function marcarConsulta() {
    const pacientesCadastrados = getPacientesCadastrados();

    if (pacientesCadastrados.length === 0) {
        alert("Nenhum paciente cadastrado. Cadastre um paciente primeiro.");
        return;
    }

    // Mostra a lista numerada de pacientes
    let menu = "Escolha um paciente:\n";
    pacientesCadastrados.forEach((paciente, index) => {
        menu += `${index + 1}. ${paciente.nome}\n`;
    });

    const escolha = parseInt(prompt(menu)) - 1;

    if (isNaN(escolha) || escolha < 0 || escolha >= pacientesCadastrados.length) {
        alert("Escolha inválida.");
        return;
    }

    const pacienteEscolhido = pacientesCadastrados[escolha];
    const dia = prompt("Digite o dia da consulta:");
    const hora = prompt("Digite a hora da consulta:");
    const especialidade = prompt("Digite a especialidade da consulta:");

    const agendamentos = getAgendamentos();

    // Verifica se a data e hora estão disponíveis
    const horarioConflitante = agendamentos.find(a =>
        a.dia === dia && a.hora === hora
    );

    if (horarioConflitante) {
        alert("Horário indisponível. Escolha outro horário.");
        return;
    }

    // Verifica se a data é retroativa
    const dataAtual = new Date();
    const dataSelecionada = new Date(`${dia} ${hora}`);
    if (dataSelecionada < dataAtual) {
        alert("Não é possível marcar consultas retroativas.");
        return;
    }

    // Cria um novo agendamento e o adiciona à lista
    const novoAgendamento = {
        paciente: pacienteEscolhido,
        dia,
        hora,
        especialidade
    };
    agendamentos.push(novoAgendamento);

    // Atualiza o armazenamento local com a lista atualizada de agendamentos
    setAgendamentos(agendamentos);

    // Atualiza a interface de usuário
    atualizarOutput("Consulta marcada com sucesso!");
}

function cancelarConsulta() {
    const agendamentos = getAgendamentos();

    if (agendamentos.length === 0) {
        alert("Nenhuma consulta agendada. Agende uma consulta primeiro.");
        return;
    }

    // Mostra a lista numerada de agendamentos
    let menu = "Escolha uma consulta para cancelar:\n";
    agendamentos.forEach((agendamento, index) => {
        menu += `${index + 1}. ${agendamento.paciente.nome} - ${agendamento.dia} ${agendamento.hora}\n`;
    });

    const escolha = parseInt(prompt(menu)) - 1;

    if (isNaN(escolha) || escolha < 0 || escolha >= agendamentos.length) {
        alert("Escolha inválida.");
        return;
    }

    const agendamentoEscolhido = agendamentos[escolha];

    // Confirmação do cancelamento
    const confirmacao = confirm(`Você deseja cancelar a consulta de ${agendamentoEscolhido.paciente.nome} no dia ${agendamentoEscolhido.dia} às ${agendamentoEscolhido.hora}?`);

    if (!confirmacao) {
        return;
    }

    // Remove o agendamento da lista
    agendamentos.splice(escolha, 1);

    // Atualiza o armazenamento local com a lista atualizada de agendamentos
    setAgendamentos(agendamentos);

    // Atualiza a interface de usuário
    atualizarOutput("Consulta cancelada com sucesso!");
}

function sair() {
    // Implemente a lógica para encerrar o programa

    // Atualiza a interface de usuário
    atualizarOutput("Programa encerrado.");
}

function getPacientesCadastrados() {
    return JSON.parse(localStorage.getItem('pacientes')) || [];
}

function setPacientesCadastrados(pacientes) {
    localStorage.setItem('pacientes', JSON.stringify(pacientes));
}

function getAgendamentos() {
    return JSON.parse(localStorage.getItem('agendamentos')) || [];
}

function setAgendamentos(agendamentos) {
    localStorage.setItem('agendamentos', JSON.stringify(agendamentos));
}

function atualizarOutput(mensagem) {
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = `<p>${mensagem}</p>`;
}

// Exemplo de chamada de função para iniciar o programa
atualizarOutput("Bem-vindo à Clínica de Consultas Ágil!");

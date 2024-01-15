# Clínica de Consultas Ágil

Este é um sistema simples de clínica de consultas desenvolvido para agendamento e gerenciamento de pacientes.

## Funcionalidades

- **Cadastrar um Paciente:** Registra um novo paciente com nome e telefone exclusivos.

- **Marcações de Consultas:** Permite agendar consultas associadas a um paciente, especificando dia, hora e especialidade desejada.

- **Cancelamento de Consultas:** Permite cancelar consultas previamente agendadas.

## Tratamento de Erros

- **Cadastro de Paciente:** Evita duplicidade de pacientes com o mesmo número de telefone.

- **Marcação de Consultas:** Verifica disponibilidade de horários e impede consultas retroativas.

## Extra

O sistema utiliza uma abordagem simples de armazenamento temporário em arrays, mas pode ser estendido para incluir um banco de dados para persistência de dados.

## Tecnologias Utilizadas

- **HTML:** Responsável pela estruturação da página web.
- **CSS:** Utilizado para a estilização e aparência visual da página.
- **JavaScript:** Adiciona lógica de programação ao lado do cliente, permitindo interatividade.

## Instalação

1. Clone o repositório: `git clone https://github.com/seu-usuario/seu-repositorio.git`
2. Navegue até o diretório do projeto: `cd nome-do-projeto`
3. Abra o arquivo `index.html` em seu navegador.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir problemas (issues) ou enviar pull requests.

## Licença

Este projeto é licenciado sob a [Licença MIT](LICENSE).

document.addEventListener("DOMContentLoaded", function () {
    // Pega o Form pelo ID
    const form = document.getElementById("loginForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        // Pega os valores do email e password do login.html
        const username = document.getElementById("login").value;
        const password = document.getElementById("passwordField").value;

        // Faz a validação do usuário e senha no lado do cliente
        if (username.endsWith("@maua.br")) {
            // Cria um objeto com os dados de username e senha
            const data = {
                username: username,
                password: password,
            };

            // Envia solicitação POST para o servidor Django
            fetch("http://localhost:8080/token/", {
                method: "POST", // Método para solicitar
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data), // Converte o objeto de dados em uma string .json
            })

                .then((response) => response.json())
                .then((data) => {
                    // Ver no console a resposta do servidor
                    console.log("Sucesso! Usuário logado, Token de acesso:", data.access);
                    console.log("Token de atualização:", data.refresh);

                    // Armazena o nome do usuário no localStorage
                    localStorage.setItem("username", username);

                    // Redireciona para principal.html
                    window.opener.location.href = "principal.html";

                    // Fecha o popup de login
                    window.close();

                })
                .catch((error) => {
                    console.error("Erro ao enviar requisição:", error);
                });
        } else {
            // Se a validação falhar, exibe uma mensagem de erro
            console.error("Erro de autenticação: Usuário ou senha inválidos");
        }
    });
});

// principal.html

document.addEventListener("DOMContentLoaded", function () {
    const nomeAlunoElement = document.getElementById("nomeAluno");

    if (nomeAlunoElement) {
        // Recupera o nome de usuário do localStorage
        const username = localStorage.getItem("username");

        // Define o nome do aluno no elemento "nomeAluno"
        let nomeAluno;
        if (username && username.startsWith("22")) {
            nomeAluno = "Carlo Guerreiro";
        } else {
            nomeAluno = "Rodrigo Moreira";
        }

        nomeAlunoElement.innerText = nomeAluno;
    } else {
        console.error("Elemento 'nomeAluno' não encontrado na página.");
    }
});

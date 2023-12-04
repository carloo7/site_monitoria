document.addEventListener("DOMContentLoaded", function () {
    // Pega o Form pelo ID
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        // Pega os valores do email e password do login.html
        const username = document.getElementById("login").value;
        const password = document.getElementById("passwordField").value;

        // Cria um objeto com os dados de username e senha
        const data = {
            username: username,
            password: password,
        };

        // Envia solicitação POST para o servidor Django
        fetch("http://localhost:8080/token", {
            method: "POST", // Método para solicitar
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data), // Converte o objeto de dados em uma string .json
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const contentType = response.headers.get('content-type');
            if (contentType && contentType.includes('application/json')) {
                return response.json();
            } else {
                throw new TypeError('A resposta do servidor não é JSON válido');
            }
        })
        .then((data) => {
            // Busca informações do usuário
            fetch("http://localhost:8080/aluno_info/", {
                headers: {
                    Authorization: `Bearer ${data.access}`,
                },
            })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const contentType = response.headers.get('content-type');
                if (contentType && contentType.includes('application/json')) {
                    return response.json();
                } else {
                    throw new TypeError('A resposta do servidor não é JSON válido');
                }
            })
            .then((userData) => {
                // Atualiza o nome do aluno na página principal.html
                document.getElementById("nomeAluno").innerText = `${userData.first_name} ${userData.last_name}`;
                // Redireciona para a página principal.html
                window.location.href = "principal.html";
            })
            .catch((error) => {
                console.error("Erro ao obter informações do usuário:", error);
            });

            // Ver no console a resposta do servidor
            console.log("Sucesso! Usuário logado, Token de acesso:", data.access);
            console.log("Token de atualização:", data.refresh);
        })
        .catch((error) => {
            console.error("Erro ao enviar requisição:", error);
        });
    });
});

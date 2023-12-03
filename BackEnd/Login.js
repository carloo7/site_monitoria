document.addEventListener("DOMContentLoaded", function () {
    // Pega o Form pelo ID
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        // Pega os valores do email e password do login.html
        const username = document.getElementById("login").value;
        const password = document.getElementById("passwordField").value;

        // Cria um objeto com os dados de email e senha
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
            .then((response) => response.json())
            .then((data) => {
                // Ver no console a resposta do servidor
                console.log("Token de acesso:", data.access);
                console.log("Token de atualização:", data.refresh);
            })
            .catch((error) => {
                console.error("Erro ao enviar requisição:", error);
            });
    });
});

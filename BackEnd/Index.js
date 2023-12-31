// POP UP DE LOGIN

function abrirPopUp() {
    // Defina o tamanho do pop-up como um quadrado de 328x328 pixels, mantendo a mesma proporção
    var size = Math.min(window.innerWidth * 0.8, window.innerHeight * 0.8, 508);
    var width = size;
    var height = size;
    var left = (window.innerWidth - width) / 2; // Centralize o pop-up horizontalmente
    var top = (window.innerHeight - height) / 2; // Centralize o pop-up verticalmente

    var popup = window.open('login.html', 'popup', 'width=' + width + ',height=' + height + ',left=' + left + ',top=' + top);
}

// POP UP PARA POSTAR EXERCÍCIOS E EXERCÍCIO NO LUGAR

function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

function handleFormSubmit(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Obtenha o elemento de input de arquivo e o arquivo selecionado
    const fileInput = document.getElementById("fileInput");
    const file = fileInput.files[0];

    // Verifique se um arquivo foi selecionado
    if (file) {
        // Crie uma nova div com as classes desejadas
        const newDiv = document.createElement("div");
        newDiv.classList.add("col-lg-3", "col-md-6", "col-sm-12");

        // Crie um novo elemento de artigo
        const newArticle = document.createElement("article");

        // Determine o tipo de arquivo e ajuste o conteúdo conforme necessário
        if (file.type.includes("pdf")) {
            newArticle.innerHTML = `
            <p>PDF</p>
            <h2><a href="https://imgur.com/a/r7fODvi" target="_blank">${file.name}</a></h2>
            <figure>
            <a onclick="openEnviar()">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor"
            class="bi bi-file-earmark-pdf" viewBox="0 0 16 16">
            <path
            d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z" />
            <path
            d="M4.603 14.087a.81.81 0 0 1-.438-.42c-.195-.388-.13-.776.08-1.102.198-.307.526-.568.897-.787a7.68 7.68 0 0 1 1.482-.645 19.697 19.697 0 0 0 1.062-2.227 7.269 7.269 0 0 1-.43-1.295c-.086-.4-.119-.796-.046-1.136.075-.354.274-.672.65-.823.192-.077.4-.12.602-.077a.7.7 0 0 1 .477.365c.088.164.12.356.127.538.007.188-.012.396-.047.614-.084.51-.27 1.134-.52 1.794a10.954 10.954 0 0 0 .98 1.686 5.753 5.753 0 0 1 1.334.05c.364.066.734.195.96.465.12.144.193.32.2.518.007.192-.047.382-.138.563a1.04 1.04 0 0 1-.354.416.856.856 0 0 1-.51.138c-.331-.014-.654-.196-.933-.417a5.712 5.712 0 0 1-.911-.95 11.651 11.651 0 0 0-1.997.406 11.307 11.307 0 0 1-1.02 1.51c-.292.35-.609.656-.927.787a.793.793 0 0 1-.58.029zm1.379-1.901c-.166.076-.32.156-.459.238-.328.194-.541.383-.647.547-.094.145-.096.25-.04.361.01.022.02.036.026.044a.266.266 0 0 0 .035-.012c.137-.056.355-.235.635-.572a8.18 8.18 0 0 0 .45-.606zm1.64-1.33a12.71 12.71 0 0 1 1.01-.193 11.744 11.744 0 0 1-.51-.858 20.801 20.801 0 0 1-.5 1.05zm2.446.45c.15.163.296.3.435.41.24.19.407.253.498.256a.107.107 0 0 0 .07-.015.307.307 0 0 0 .094-.125.436.436 0 0 0 .059-.2.095.095 0 0 0-.026-.063c-.052-.062-.2-.152-.518-.209a3.876 3.876 0 0 0-.612-.053zM8.078 7.8a6.7 6.7 0 0 0 .2-.828c.031-.188.043-.343.038-.465a.613.613 0 0 0-.032-.198.517.517 0 0 0-.145.04c-.087.035-.158.106-.196.283-.04.192-.03.469.046.822.024.111.054.227.09.346z" />
            </svg>
            </a>
            </figure>
            `;
        } else if (file.type.includes("doc") || file.type.includes("docx")) {
            newArticle.innerHTML = `
            <p>DOC</p>
            <h2><a href="https://imgur.com/a/r7fODvi" target="_blank">${file.name}</a></h2>
            <figure>
            <a onclick="openEnviar()">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor"
            class="bi bi-file-earmark" viewBox="0 0 16 16">
            <path
            d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5z" />
            </svg>
            </a>
            </figure>
            `;
            newArticle.id = "doc"
        } else {
            // Tipo de arquivo desconhecido, ajuste conforme necessário
            newArticle.innerHTML = `
            <p>${file.type}</p>
            <h2>${file.name}</h2>
            <figure>
            </figure>
            `;
        }

        // Adicione o novo artigo à nova div
        newDiv.appendChild(newArticle);

        // Adicione a nova div à sua grade de produtos
        document.querySelector(".product-grid").appendChild(newDiv);

        const fileInfo = { type: file.type, name: file.name, content: newArticle.innerHTML };
        localStorage.setItem('fileInfo', JSON.stringify(fileInfo));

        // Feche o formulário
        closeForm();
    }


}

// Recupere os dados armazenados no localStorage e recrie a grade de produtos ao carregar a página
document.addEventListener("DOMContentLoaded", function () {
    const fileInfoString = localStorage.getItem("fileInfo");

    if (fileInfoString) {
        const fileInfo = JSON.parse(fileInfoString);

        // Adiciona as informações do arquivo à grade de produtos
        const newDiv = document.createElement("div");
        newDiv.classList.add("col-lg-3", "col-md-6", "col-sm-12");
        const newArticle = document.createElement("article");
        newArticle.innerHTML = fileInfo.content;
        newDiv.appendChild(newArticle);
        document.querySelector(".product-grid").appendChild(newDiv);
    }

});

// FUNÇÃO PARA ABRIR ABA DE ENVIAR EXERCÍCIO

function openEnviar() {
    document.getElementById("EnviarEX").style.display = "block";
}

function FechaEX() {
    document.getElementById("EnviarEX").style.display = "none";
}

function EnviarEX(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Obtenha o elemento de input de arquivo e o arquivo selecionado
    const fileInput = document.getElementById("fileInputEX");
    const file = fileInput.files[0];

    // Verifica se o tipo de arquivo é PDF, DOC ou DOCX
    if (file.type.includes("pdf") || file.type.includes("doc") || file.type.includes("docx")) {
        // Cria um novo elemento de div para conter as informações do arquivo
        const newDiv = document.createElement("div");
        newDiv.classList.add("col-lg-3", "col-md-6", "col-sm-12");

        const newArticle = document.createElement("article");

        // TESTE LOCAL STORAGE
        localStorage.setItem('fileInfoo', JSON.stringify({ type: file.type, name: file.name }));
        console.log("sucesso ao jogar no local")
        alert('Exercício enviado para avaliação!');

        // Feche o formulário
        FechaEX();
    } else {
        // Se o tipo de arquivo não for suportado, você pode exibir uma mensagem de erro ou realizar outra ação
        console.log("Tipo de arquivo não suportado.");
    }

}

// ÁREA PARA SALVAR NOME NO HEADER

document.addEventListener("DOMContentLoaded", function () {
    const nomeAlunoElement = document.getElementById("nomeAluno");

    if (nomeAlunoElement) {
        // Recupera o nome de usuário do localStorage
        const username = localStorage.getItem("username");

        // Define o nome do aluno no elemento "nomeAluno"
        let nomeAluno;
        if (username && username === "22.01163-3@maua.br") {
            nomeAluno = "Carlo Guerreiro";
        } else if (username === "22.10121-7@maua.br") {
            nomeAluno = "Pedro Kobayashi";
        } else if (username === "22.01809-3@maua.br") {
            nomeAluno = "Anderson Hideki";
        } else if (username === "22.10119-5@maua.br") {
            nomeAluno = "Débora Witkowski";
            // aluno monitor
            const botaoRespostas = document.getElementById("botaoRespostas");
            if (botaoRespostas) {
                botaoRespostas.style.display = "block"
            }
        } else if (username === "22.01715-0@maua.br") {
            nomeAluno = "Gabriel Renault";
        } else {
            nomeAluno = "Rodrigo Moreira";
            // aluno professor
            const botaoExercicio = document.getElementById("botaoExercicio");
            if (botaoExercicio) {
                botaoExercicio.style.display = "block";
            }
        }

        nomeAlunoElement.innerText = nomeAluno;
    } else {
        console.error("Elemento 'nomeAluno' não encontrado na página.");
    }

});
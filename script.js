var url_imagem = ""
var nome = ""

const inputUpload = document.getElementById('avatar')

inputUpload.addEventListener('change', function (evento) {

    const arquivo = evento.target.files[0]

    if (arquivo) {
        const nomeDaImagem = arquivo.name
    } else {
        console.log("Nenhum arquivo selecionado.");
    }
});

const inputNome = document.getElementById("nome")

const b = document.getElementById("btn")
b.addEventListener("click", () => {
    nome = inputNome.value
    criarUsuario()

})

async function criarUsuario() {

    const novoUsuario = { "nome": nome, "url": url_imagem };

    const resposta = await fetch("http://localhost:3000/alunos", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(novo)
    })
}
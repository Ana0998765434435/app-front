const inputUpload = document.getElementById('avatar')

inputUpload.addEventListener('change', function(evento) {

    const arquivo = evento.target.files[0]

    if (arquivo) {
        const nomeDaImagem = arquivo.name
        console.log(nomeDaImagem)
    } else {
        console.log("Nenhum arquivo selecionado.");
    }
});

const nome = document.getElementById("Nome")

const b = document.getElementById("btn")

b.addEventListener("click", () => {
    console.log(nome.value)
})
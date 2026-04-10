document.getElementById(formDoacao) .addEventListener("submit", function (e) {
    e.preventDeFault();

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let idade = document.getElementById("idade").value;
    let peso = document.getElementById("peso").value;
    let tipo_sanguineo = document.getElementById("tipo sanguineo").value;
    let telefone = document.getElementById("telefone").value;
    let cidade = document.getElementById("cidade").value;
    let estado = document.getElementById("estado").value;
}
)
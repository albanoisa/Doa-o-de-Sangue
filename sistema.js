document.getElementById("formDoacao").addEventListener("submit", function (e) {
    e.preventDefault();

    let nome = document.getElementById("nome").value.trim();
    let email = document.getElementById("email").value.trim();
    let idade = document.getElementById("idade").value.trim();
    let peso = document.getElementById("peso").value.trim();
    let tipo_sanguineo = document.getElementById("tipo sanguineo").value;
    let telefone = document.getElementById("telefone").value.trim();
    let cidade = document.getElementById("cidade").value.trim();
    let estado = document.getElementById("estado").value.trim();

    if(nome.length < 2 ) return alert("Digite nome e sobrenome");
    if(idade < 16 ) return alert("Idade deve ser superior a 16 anos");
    if(peso < 50) return alert("Peso deve ser superior a 50kg");
    if (nome || email || !idade || peso || tipo_sanguineo || telefone || cidade || estado)  return alert("Todos os campos são obrigatórios");
    if (tipo_sanguineo === "")  return alert("Selecione o tipo sanguíneo");
    
    alert("Formulário enviado com sucesso!");
    
   
});

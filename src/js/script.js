//Declarando as variaveis

let tarefa = [];

//Função de validação de campo vazio

function validaCampo()
{
    let valida = false;
    if(document.getElementById('task').value == "")
        valida = true;
        return valida;
}
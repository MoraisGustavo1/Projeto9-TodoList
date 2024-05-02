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

//Função de adição de tarefas

function adicionarTarefa(){
    let linhas = document.getElementById('task');
    if(validaCampo){
        alert("Preencha o campo com uma tarefa")
    }else{
        //Adicionando tarefas
        tarefa.push(linhas.value);
        linhas.value="";
        listarTarefas();
    }
    document.getElementById('task').focus();
}
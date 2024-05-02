//Declarando as variaveis

let tarefas = [];

//Função de validação de campo vazio

function validaCampo()
{
    let valida = false;
    if(document.getElementById("task").value == "")
        valida = true;
        return valida;
}

//Função de adição de tarefas

function adicionarTarefa(){
    let linhas = document.getElementById("task");
    if(validaCampo()){
        alert("Preencha o campo com uma tarefa")
    }else{
        //Adicionando tarefas
        tarefas.push(linhas.value);
        linhas.value="";
        listarTarefas();
    }
    document.getElementById("task").focus();
}

//Função de listagem de tarefas
function listarTarefas(){
    let valor="";
    for(let i=0; i<tarefas.length;i++){
        valor += tarefas[i] +"<br>";
    }
    document.getElementById("lista").innerHTML =valor;
}

//Função de remoção de tarefas
function removerTarefa(){
    tarefas.pop();
    listarTarefas();
}

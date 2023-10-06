var tarefas = document.querySelectorAll(".licao")

for(var i = 0; i < tarefas.length; i++){

    var licao = tarefas[i]

    var tdTarefa = licao.querySelector(".info-tarefa")
    var tarefa = tdTarefa.textContent

    var tdPrazo = licao.querySelector(".info-prazo")
    var prazo = tdPrazo.textContent

    var tdFeito = licao.querySelector(".info-feito")
    var feito = tdFeito.textContent
    var checkbox = document.querySelectorAll("#feito")
    var feitoEhValido = checkbox[i].checked

    //Calculando o progresso
    var tdProgresso = licao.querySelector(".info-progresso")
    var progresso = calculaProgresso(prazo,feito)

    
}

function calculaProgresso(prazo,feito){
    
    if(feitoEhValido){
        tdProgresso.textContent = "tarefa concluída!"
        licao.classList.add("tarefa-concluida")
    } else {
        tdProgresso.textContent = "tarefa!"
    }
}



    

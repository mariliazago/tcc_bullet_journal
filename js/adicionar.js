var botaoAdicionar = document.querySelector("#adicionar-licao")

botaoAdicionar.addEventListener("click", function(){
    event.preventDefault()

    var form = document.querySelector("#form-adiciona")

    var licao = obtemLicaoDoFormulario(form)

    var licaoTr = montaTr(licao)

    //vai chamar para aparecer na tabela
    var tabela = document.querySelector("#tabela-licoes")

    tabela.appendChild(licaoTr)

    form.reset()
})

function obtemLicaoDoFormulario(form){

    var licao = {
        disciplina: form.disciplina.value,
        tarefa: form.tarefa.value,
        prazo: form.prazo.value,
        feito: form.feito.value,
        progresso: calculaProgresso(form.prazo.value, form.feito.value)
    } 

    return licao
}

function montaTr(licao){
    var licaoTr = document.createElement("tr")

    licaoTr.appendChild(montaTd(licao.disciplina,"info-disciplina"))
    licaoTr.appendChild(montaTd(licao.tarefa,"info-tarefa"))
    licaoTr.appendChild(montaTd(licao.prazo,"info-prazo"))
    licaoTr.appendChild(montaTd(licao.feito,"info-feito"))
    licaoTr.appendChild(montaTd(licao.progresso,"info-progresso"))

    return licaoTr
}

function montaTd(dado,classe){
    var td = document.createElement("td")
    td.textContent = dado
    td.classList.add()

    return td
}
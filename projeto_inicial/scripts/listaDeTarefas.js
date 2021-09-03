
import BotaoConcluir from './componentes/concluirTarefa.js'
import BotaoDeletar  from './componentes/deletarTarefa.js'

/* encontra o elemento botão para interação */
const novaTarefa = document.querySelector('[data-form-button]')

/* função  para criar tarefa */
const criarTarefa = (evento)=> {
    /* previni que o formulário faça o encaminhamento dos dados */
    evento.preventDefault()
    const lista = document.querySelector('[data-list]')
    const input = document.querySelector('[data-form-input]')
    const valor = input.value
    
    /**seleciona a lista e aplica o conteúdo novo */
    const tarefa = document.createElement('li')
    tarefa.classList.add('task')

    const conteudo = `<p class="content"> ${valor} </p>`
    tarefa.innerHTML = conteudo

    /**insere o botão na tarefa */
    tarefa.appendChild(BotaoConcluir())
    tarefa.appendChild(BotaoDeletar())
    /**insere um novo item de lista */
    lista.appendChild(tarefa)
    input.value = " "
}

/** verifica se houve click no botão */
novaTarefa.addEventListener('click', criarTarefa)






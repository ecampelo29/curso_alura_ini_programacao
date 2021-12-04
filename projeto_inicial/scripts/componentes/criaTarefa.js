import { carregaTarefa } from './carregarTarefas.js'
import BotaoConclui from './concluiTarefa.js'
import BotaoDeleta from './deletaTarefa.js'

    export const handleNovoItem = (evento) => {
        evento.preventDefault()
        const tarefas = JSON.parse(localStorage.getItem('tarefas')) || [] // se não existir dados inicializa com array vazio
        const input = document.querySelector('[data-form-input]')
        const valor = input.value
        
        const calendario = document.querySelector('[data-form-date]')
        const data = moment(calendario.value)
        const dataFormatada = data.format('DD/MM/YYYY')
        const concluida = false
        const horario = data.format('HH:mm')

        const dados = {
            valor,
            dataFormatada,
            horario,
            concluida
        }

        const tarefaAtualizada = [...tarefas, dados]


        localStorage.setItem('tarefas', JSON.stringify(tarefaAtualizada))
        input.value = " "
        carregaTarefa()

    }


    export const Tarefa = ({valor, horario, concluida}, id) => {

        const tarefa = document.createElement('li')
        if (concluida) {
            tarefa.classList.add('done')
        }

        tarefa.classList.add('task')
        const conteudo = `<p class="content">${horario} * ${valor} </p>`

        tarefa.innerHTML = conteudo

        tarefa.appendChild(BotaoConclui(carregaTarefa, id))
        tarefa.appendChild(BotaoDeleta(carregaTarefa, id))

        return tarefa
}

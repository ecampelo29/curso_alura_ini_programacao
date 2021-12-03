import { handleNovoItem } from "./componentes/criaTarefa.js"
import { carregaTarefa } from "./componentes/carregarTarefas.js"

const novaTarefa = document.querySelector('[data-form-button]')

novaTarefa.addEventListener('click', handleNovoItem)

carregaTarefa()
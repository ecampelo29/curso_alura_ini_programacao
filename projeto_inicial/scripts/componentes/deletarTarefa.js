
const BotaoDeletar = () =>{
    const botaoDeletar = document.createElement('button')
    botaoDeletar.innerText = 'Deletar'
    botaoDeletar.addEventListener('click', deletarTarefa)
    return botaoDeletar
}

const deletarTarefa = (evento) => {
    const botaoDeletar = evento.target 
    const tafefaEliminada = botaoDeletar.parentElement
    tafefaEliminada.remove()


}

export default BotaoDeletar 
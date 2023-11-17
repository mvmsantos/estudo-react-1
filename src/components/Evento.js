function Eventos({numero}) {

        function meuEvento() {
            console.log(`O numero deste botão é ${numero}`)
        }
    return(
        <div>
            <p>Clique para ativar o evento</p>
            <button onClick={meuEvento}>Ativar!</button>
        </div>
    )
}

export default Eventos
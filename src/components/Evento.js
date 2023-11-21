import Button from './evento/Button'

function Eventos() {

        function primeiroEvento() {
            console.log('Meu primeiro evento!')
        }

        function segundoEvento() {
            console.log('Meu segundo evento!');
        }
    return(
        <div>
            <p>Clique para ativar o evento</p>
            <Button event={primeiroEvento} text="Primeiro evento" />
            <Button event={segundoEvento} text="Segundo evento" />
        </div>
    )
}

export default Eventos
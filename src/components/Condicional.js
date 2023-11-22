function Condicional() {

    function Teste(e) {
        e.preventDefault()
        console.log("teste");
    }
    return (
        <div>
            <h2>Cadastre seu email</h2>
            <form type="submit" action="">
                <input type="email" name="" id="" placeholder="Digite seu email..." />
                <button onClick={Teste} type="submit">Enviar-email</button>
            </form>
        </div>
    )
}

    export default Condicional
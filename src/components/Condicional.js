import { useState } from "react";

function Condicional() {

    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    function Teste(e) {
        e.preventDefault()
        setUserEmail(email)
    }

    function limparEmail(e) {
        e.preventDefault()
        setUserEmail('')
    }

    return (
        <div>
            <h2>Cadastre seu email</h2>
            <form type="submit" action="">
                <input type="email" name="" id="" placeholder="Digite seu email..." onChange={(e) => setEmail(e.target.value)}/>
                <button onClick={Teste} type="submit">Enviar-email</button>
                {userEmail &&(
                    <div>
                        <p>O email do usuario é: {userEmail}</p>
                        <button onClick={limparEmail}>Limpe email</button>
                    </div>
                )}
            </form>
        </div>
    )
}

    export default Condicional
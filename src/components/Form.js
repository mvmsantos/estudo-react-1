import { useState } from "react"
import styles from './Form.module.css'

function Form() {

    function cadastrarUsuario(e) {
        e.preventDefault()
        console.log(`O usuario é ${name} e a senha é ${password}`);
    }

    const [name, setName] = useState()
    const [password, setPassword] = useState()

    return (
        <div>
            <h1>Meu cadastro:</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name" className={styles.labelName}>Nome: </label>
                    <input
                        type="text" 
                        id="name" 
                        name="name" 
                        placeholder="Digite seu nome" 
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password" className={styles.labelPassword}>Senha: </label>
                    <input 
                        type="password" 
                        id="password" 
                        name="password" 
                        placeholder="Digite a sua senha"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>
    )
}

    export default Form
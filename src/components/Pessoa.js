import styles from './Pessoa.module.css'
teste
function Pessoa({nome, idade, qlq}) {
    return( 
        <div className={styles.pessoaH1}>
            <h3></h3>
            <h2 className={styles.pessoaH2}>Nome: {nome}</h2>
            <p>idade: {idade}</p>
            <p>xx: {qlq}</p>
        </div>
    )
}
export default Pessoa         
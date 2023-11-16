import Item from './Item'

function List() {
    return (
        <>
            <h1>TESTE DE LISTA</h1>
            <ul>
                <Item marca="Ferrari" ano_lancamento={1974} />
                <Item marca="Fiat" ano_lancamento={2500}/>
                <Item marca="Renault" ano_lancamento={2000} />
                <Item />
            </ul>
        </>
    )
}

export default List
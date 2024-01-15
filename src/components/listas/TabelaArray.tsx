interface TabelaArrayProps{
    lista: string[]
}

export default function TabelaArray(props: TabelaArrayProps) {
    
    const itens = props.lista.map((elemento,i) => {
        return (
            <li key={elemento} className={` text-center w-72 text=xl list-decimal ${ i%2===0 ? 'bg-rose-950 bg-opacity-50' : 'bg-rose-900 bg-opacity-50'}`} > 
                {elemento} 
            </li>
        )
    })
    
    return (
        <ol>
            {itens}
        </ol>
    )
}
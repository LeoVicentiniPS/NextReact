interface BotoesProps {
    incr: () => void
    decr: () => void
}

export default function Botao(props:BotoesProps) {
    return (
        <div className=" flex justify-between gap-2 pt-2 ">
            <button className="botao flex-1" onClick={() => props.decr()}>
                Subtrair
            </button>
            <button className="botao flex-1" onClick={() => props.incr()}>
                Adicionar
            </button>
        </div>
    )
}
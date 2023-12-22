interface CaixaProps{
    texto: string
    inversa?:boolean
}
export default function Caixa(props: CaixaProps){
    return(
    <div className={`
        flex justify-center items-center
        ${props.inversa ? 'bg-emerald-200 text-emerald-900' : ' bg-emerald-900 text-emerald-200'}
        rounded-lg
        w-64 h-64
        text-5xl font-thin
        `}>
            {props.texto}
    </div>
    )
}
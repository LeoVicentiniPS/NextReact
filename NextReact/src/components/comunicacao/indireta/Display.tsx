interface DisplayProps {
    valor:number
}

export default function Display(props:DisplayProps) {
    return (
        <div className="bg-zinc-700 rounded-md flex p-2 w-full justify-center items-center">
            {props.valor}
        </div>
    )
}
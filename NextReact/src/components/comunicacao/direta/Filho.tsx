interface FilhoProps {
    nome:string 
    sobrenome:string
    idade?:number
}
export default function Filho(props:FilhoProps) {
    
    return (
        <div className="flex justify-center items-center bg-green-500 rounded-md p-5">
            <div className="flex justify-center gap-2" >
                <span className="font-black">Filho</span>
                <span>{props.nome}</span> 
                <span>{props.sobrenome}</span>
            </div>
            
        </div>
    )
}
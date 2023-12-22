import Pai from "./Pai";

interface AvoProps {
    nome:string 
    sobrenome:string
    idade?:number
}
export default function Avo(props: AvoProps) {
    return (
        <div className="flex flex-col items-center gap-5 p-5 rounded-md bg-purple-500 text-white border border-white">
            <div className="flex justify-center gap-2 text-2xl" >
                <span className="font-black">Avo</span>
                <span>{props.nome}</span> 
                <span>{props.sobrenome}</span>
            </div>

            <div className="flex gap-5">
                <Pai nome="Carlos" sobrenome={props.sobrenome} />
                <Pai nome="Fabio" sobrenome={props.sobrenome}/> 
            </div>
        </div>
    )
}
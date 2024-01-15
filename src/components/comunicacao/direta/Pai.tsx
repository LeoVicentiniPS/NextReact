import Filho from "./Filho";

interface PaiProps {
    nome:string 
    sobrenome:string
    idade?:number
}
export default function Pai(props: PaiProps) {
    return (
        <div className="flex flex-col gap-5 bg-blue-500 text-white border-white rounded-md p-5">
            <div className="flex justify-center gap-2 text-xl" >
                <span className="font-black">Pai</span>
                <span>{props.nome}</span> 
                <span>{props.sobrenome}</span>
            </div>

            <div className="flex gap-5">
                <Filho nome="Catia" sobrenome={props.sobrenome} />
                <Filho nome="Fabricio" sobrenome={props.sobrenome}/>
                <Filho nome="Fernando" sobrenome={props.sobrenome}/>  
            </div>
            
        </div>
    )
}
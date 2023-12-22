import Contador from "@/components/comunicacao/indireta/Contador";

export default function PaginaIndireta() {
    return(
        <div className="flex flex-col justify-center gap-5 items-center h-screen">
            <h1 className="text-5xl mb-10">Comunicação indireta</h1>
            <div className="flex gap-5">

            <Contador valorInicialC={0}/>
            <Contador valorInicialC={50}/>
            <Contador valorInicialC={100}/>
                
            </div>
        </div>
    )
}
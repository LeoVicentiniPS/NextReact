import Avo from "@/components/comunicacao/direta/Avo";

export default function PaginaDireta() {
    return(
        <div className="flex flex-col justify-around items-center h-screen">
            <h1 className="text-5xl mb-10">Comunicação direta</h1>
            <Avo nome="Luiz" sobrenome="Sousa"/>
            <Avo nome="Wander" sobrenome="Prioli"/>
        </div>
    )
}
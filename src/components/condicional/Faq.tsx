import { useState } from "react";
import Pergunta from "./Pergunta";

export default function Faq() {
    const [ativo, setativo] = useState<number>(0)

    function alternarIndice(indice: number){
        if (indice === ativo) {
            setativo(-1)
        }
        else {
            setativo(indice)
        }
    }
    
    return(
        <div className="flex flex-col gap-2 w-[90%] md:w-3/5">
            <Pergunta indice={0}
            aberto = {ativo === 0}
            texto="Primeira pergunta" 
            resposta="Primeira resposta"
            alternarIndice={alternarIndice}
            />
            <Pergunta indice={1}
            aberto = {ativo === 1}
            texto="Segunda pergunta?"
            resposta="Segunda resposta!"
            alternarIndice={alternarIndice}
            />
            <Pergunta indice={2}
            aberto = {ativo === 2}
            texto="Abc"
            resposta="Defg"
            alternarIndice={alternarIndice}
            />
            <Pergunta indice={3}
            aberto = {ativo === 3}
            texto="sim"
            resposta="nao"
            alternarIndice={alternarIndice}
            />
        </div>
    )
}
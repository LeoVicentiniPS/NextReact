import { useState } from "react"
import If from "./If"
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react"
import IfElse from "./IfElse"

interface PerguntaProps {
    indice: number
    texto : string
    resposta : string
    aberto: boolean
    alternarIndice: (indice: number) => void
}

export default function Pergunta (props: PerguntaProps){

    return(
        <div 
            className={`border border-zinc-500
            rounded-md overflow-hidden 
            `}>

            <div className="bg-zinc-800 flex justify-between transition-opacity p-5 cursor-pointer select-none" 
                onClick={() => props.alternarIndice(props.indice)}>
                
                <span>{props.texto}</span>

                {props.aberto? <IconChevronDown/> : <IconChevronUp/>}
                {/* <IfElse teste={aberta}>
                    <IconChevronUp/>
                    <IconChevronDown/>
                </IfElse> */}
                
            </div> 
            
            <If teste={props.aberto}>
                <div className=" p-5">{props.resposta}</div>
            </If> 
           
        </div>
    )
}
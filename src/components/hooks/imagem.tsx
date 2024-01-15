import Image from "next/image"
import { useState } from "react"

export default function ImagemAleatoria() {

    const url = 'https://source.unsplash.com/featured/300x300?'
    const [pesquisa, alterarPesquisa] = useState<string>('abstract')
    const [tamanho, alterarTamanho] = useState<number>(300)
    const tnumero = Number(tamanho)

    function renderizarBotao(valor:string){
        return (
            <button className={`
             bg-blue-400 px-8 py-2 rounded-md
             `} onClick={()=> {
                alterarPesquisa(valor)
                console.log(url+pesquisa)
              } }>
                {valor}
             </button>
        )

    }
    function renderizarTamanho(tam:number){
        return (
            <input
            value={tam}
            onChange={e => alterarTamanho(Number(e.target.value))}
            type="number"
          />
        )
    }

    return(
        <div className="flex flex-col gap-5 bg-slate-300 p-5 border border-t- border-blue-700 items-center ">
            <Image src={`${url}${tamanho}${tamanho}?${pesquisa}`} height={tamanho} width={tamanho} alt="Imagem"/>
            <div className="flex gap-5 justify-between">
            {renderizarBotao('abstract')}
            {renderizarBotao('city')}
            {renderizarBotao('person')}
            </div>
            <div>
                <input
                    type="number" 
                    value={tamanho}
                    className="bg-slate-700 p-2 rounded-md"
                    onChange={(e) => {alterarTamanho(+e.target.value)}}
                    />
            </div>
        </div>
    )
}
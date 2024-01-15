import Image from "next/image"
import { useState } from "react"

export default function ImagemAleatoria() {

    const url = 'https://source.unsplash.com/featured/300x300?'
    const [pesquisa, setPesquisa] = useState<string>('white')
    const [tamanho, alterarTamanho] = useState<number>(300)
    const [tema, setTema] = useState('white');
    function renderizarBotao(){
        
        return (
            <div>
                <input
                type="text"
                placeholder="Insira o URL da imagem"
                value={tema}
                onChange={(e) => setTema(e.target.value)}
                className="border bg-slate-700 border-gray-300 p-2 rounded-md mb-2"
                />

                <button 
                    className={`bg-blue-400 px-8 py-2 rounded-md`} onClick={()=> {
                    setPesquisa(tema)
                } }>
                    Pesquisar
                </button>
            </div>
        ) 
    }

    return(
        <div className="flex flex-col gap-5 bg-slate-300 p-5 border border-t- border-blue-700 items-center ">
            <Image src={`${url}${tamanho}${tamanho}?${pesquisa}`} height={tamanho} width={tamanho} alt="Imagem"/>
            <div className="flex gap-5 justify-between">
                {renderizarBotao()}
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
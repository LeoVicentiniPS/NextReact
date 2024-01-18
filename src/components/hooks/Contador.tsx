import { useCallback, useEffect, useState } from "react"

export default function Contador () {

    const [delta,setDelta] = useState(1)
    const [valor, setValor] = useState(0)
    const [multi10, setMulti10] = useState(0)

    const calcularValorMulti10 = useCallback((valor:number) => {
        return valor*10
    },[])

    useEffect(() => {
        console.log('Executou UseEffect')
        const multi10 = calcularValorMulti10(valor)
        setMulti10(multi10)
    }, [valor, calcularValorMulti10])
    return(
        <div className="flex flex-col gap-5 items-center">
            <span className="text-5xl">{valor}</span>
            <span className="text-xl text-zinc-500">{multi10}</span>
            <span className="text-sm text-zinc-500">{delta}</span>
            <div className="flex gap-5">
                <button className="botao"
                onClick={() => setValor(valor-delta)}
                >-1</button>
                <button className="botao"
                onClick={() => setValor(valorAt => valorAt+delta)}
                >+1</button>
            </div>
            <input type="number" value={delta} onChange={(e) => setDelta(+e.target.value)} className="bg-zinc-800"/>
        </div>
    )
}
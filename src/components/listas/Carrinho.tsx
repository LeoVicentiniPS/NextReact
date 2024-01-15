import CarrinhoModel from "@/model/CarrinhoModel"
import CarrinhoItem from "./CarrinhoItem"
import { IconCircleX } from "@tabler/icons-react"
import exibirComoMoeda from "@/utilities/exibirComoMoeda"

interface CarrinhoProps {
    itens: CarrinhoModel[]
}

export default function Carrinho(props: CarrinhoProps){
    const total = props.itens.reduce((soma, item)=> {
        return (soma + item.quantidade*item.produto.preco)}, 0)

    return(
        <div className="flex flex-col bg-black border border-zinc-800 rounded-lg w-6/12">
            <div className=" flex bg-zinc-800 pl-4 py-2 w-full"
            style={{ fontFamily: 'initial' }}>
                Carrinho | Total = <div className="text-lg text-green-500 font-bold">{exibirComoMoeda(total)}</div>
            </div>
            <div className="flex gap-x-2 p-2 flex-wrap h-24 items-start border-zinc-800 mb-5">
                {props.itens.length === 0 ? (
                    <div>
                        <IconCircleX/> Nenhum item no carrinho
                    </div>
                ):(
                props.itens.map((item,i) => {
                    return(
                        <CarrinhoItem key={i} {...item} />
                    )
                }))}
            </div>
        </div> 
        )
}
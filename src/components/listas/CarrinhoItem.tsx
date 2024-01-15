import CarrinhoModel from "@/model/CarrinhoModel";
import exibirComoMoeda from "@/utilities/exibirComoMoeda";

export default function CarrinhoItem(props: CarrinhoModel){
    return(
        <div className={` flex
        items-center rounded-full
        border border-zinc-600 gap-2
        
        `}>
            <span className={`flex
            justify-center items-center
            w-7 h-7 p-2
            bg-blue-700 rounded-full
            `}>{props.quantidade}</span>

            <span>{props.produto.nome}</span>

            <span className="pr-2 text-green-600 font-bold">{exibirComoMoeda(props.produto.preco*props.quantidade)}</span>
        </div>
    )
}
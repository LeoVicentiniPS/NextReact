import Produto from "@/model/Produto";
import { IconShoppingCart } from "@tabler/icons-react";
import Image from "next/image";

interface ProdutoItemProps {
    produto: Produto
    comprar: (produto: Produto) => void 
}

export default function ProdutoItem(props: ProdutoItemProps){
    const  { produto } = props
    return(
        <div className={`
                flex flex-col rounded-md
                border border-zinc-600
                p-1
        `}>
            <Image src={produto.imagem}
            width={300} height={200} 
            alt="Imagem do produto" 
            className="rounded-md"
            />
            <div className="flex flex-col p-3 gap-3">
                <div className="flex items-center justify-between">
                    <div className="text-2xl font-black">{produto.nome}</div>
                    <div className="text-lg text-green-500 font-bold">R${produto.preco}</div>
                </div>
                <div>
                    <div className="text-sm text-gray-400 text-center">{produto.descricao}</div>
                </div>
                <div>
                    <button className='botao flex w-full text-2xl items-center justify-center gap-2'
                        onClick={()=>props.comprar(produto)}> 
                        <IconShoppingCart/> Comprar
                    </button>
                </div>
            </div>
        </div>
    )

}
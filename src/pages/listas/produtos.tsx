import Carrinho from "@/components/listas/Carrinho"
import ProdutosListados from "@/components/listas/ProdutosListados"
import produtos from "@/constants/produtos"
import CarrinhoModel from "@/model/CarrinhoModel"
import Produto from "@/model/Produto"
import { IconShirt } from "@tabler/icons-react"
import { useState } from "react"

export default function PaginaProdutos() {

    const [itens, setItens] = useState<CarrinhoModel[]>([])

    function addProduto(produto:Produto){
        const itemAtual = itens.find((item) => item.produto.id === produto.id) ?? {quantidade: 0, produto};
        const novoItem = {...itemAtual, quantidade: itemAtual.quantidade + 1}
        const outrosItens = itens.filter((item)=> item.produto.id !== produto.id)
        setItens([...outrosItens, novoItem])    
    }   
    return(
        <div className="flex gap-6 flex-col mt-1 text-center"
            style={{ fontFamily: 'initial' }}>
            <div className="flex justify-between">
                <div className="text-5xl ml-2  bg-zinc-800 rounded-lg flex flex-row items-center w-1/4 h-32 text-blue-700 "
                    style={{fontSize: '32px', fontWeight: 600 }}>

                    <div className="-mt-32">
                        <div>
                            <IconShirt color="black" height={120} width={120}/>
                        </div>
                        <div className="text-base -m-20 select-none" style={{fontFamily: "fantasy", fontWeight: 100, fontSize: '32px'}}>
                            L&C
                        </div>
                    </div>
                        <span
                        className=" border-black border-l-8 items-center flex p-4 h-full">
                            Legal&Confia Store
                        </span>
                </div>
                <Carrinho itens={itens} />
            </div>
            
            
            <div>
                 <ProdutosListados produtos={produtos} comprar={addProduto}/>
            </div>
        </div>
    )
}
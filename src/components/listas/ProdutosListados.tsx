import Produto from "@/model/Produto"
import ProdutoItem from "./ProdutoItem"

interface ProdutosListadosProps{
    produtos: Produto[]
    comprar: (produto: Produto) => void 
}

export default function ProdutosListados(props: ProdutosListadosProps) {
    return(
        <div className="flex flex-wrap gap-5 mx-5 justify-center">
            {props.produtos.map(produto => {
                return <ProdutoItem key={produto.id} produto={produto} comprar={props.comprar}/>

            })}
        </div>
    )
}
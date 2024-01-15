import TabelaArray from "@/components/listas/TabelaArray"
import { IconTableAlias } from "@tabler/icons-react"

export default function PaginaListaBasica() {
    const elementos = ['ab','cd','ef','gh','ij','kl','mn','op']

    return(
        <div className="flex gap-6 flex-col h-screen justify-center items-center">
            <h1 className="flex items-center flex-row text-5xl"> 
                <IconTableAlias size={40} stroke={0.5} color="red"/> 
                Lista Básica
            </h1>
            <TabelaArray lista={elementos}/>
        </div>
    )
}
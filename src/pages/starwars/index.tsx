import Background from "@/components/starwars/Background";
import Personagens from "@/components/starwars/Personagens";
import useStarwars from "@/data/hooks/useStarwars";

export default function PaginaStarWars() {
    const { processando, personagens, obterPersonagens}= useStarwars()

    return (
        <div className="flex flex-col justify-center gap-5 items-center h-screen">
            <Background />

            <button onClick={obterPersonagens} className="bg-blue-500 p-2">
                Obter
            </button>

            {processando ? (
            <div>Processando...</div>
            ): personagens.length > 0 ? (
                <Personagens personagens = {personagens}/>
            ) : (
                <div>Nenhum personagem encontrado</div>
            )}

            
            
        </div>
    )
}
import Caixa from "@/components/basicos/Caixa";

export default function PagCaixas(){
    return(
        <div className={` bg-emerald-100
        p-5
        gap-5
        flex
        justify-center
        `}>
            <Caixa texto="Caixa 1"/>
            <Caixa inversa texto="Caixa 2"/>
            <Caixa texto = "Caixa 3"/>
            <Caixa inversa texto="Caixa 4"/>
            <Caixa texto="Caixa 5"/>
        </div>
    )
}
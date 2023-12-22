import Evento from "@/components/basicos/evento";

export default function PagEventos(){

    return(
        <div className={`
        p-3
        flex flex-wrap
        gap-2
        justify-center
        items-center
        h-screen
        bg-emerald-200
        `}>
            <Evento/>
            <Evento/>
            <Evento/>
            <Evento/>

        </div>
    )

}
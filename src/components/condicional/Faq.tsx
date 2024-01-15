import Pergunta from "./Pergunta";

export default function Faq() {
    return(
        <div className="flex flex-col gap-2 w-[90%] md:w-3/5">
            <Pergunta texto="um" resposta="dois"/>
            <Pergunta texto="aaa" resposta="bbb"/>
            <Pergunta texto="zzzzzzzz" resposta="xxxxxxx"/>
            <Pergunta texto="e" resposta="sim"/>
        </div>
    )
}
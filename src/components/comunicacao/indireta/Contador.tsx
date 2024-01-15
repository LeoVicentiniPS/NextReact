import Display from "./Display";
import Botao from "./Botoes";
import { useState } from "react";
import Typography from '@mui/material/Typography';
import HorizontalSlider from "./HorizontalSlider";

interface ContProps {
    valorInicialC:number
}

export default function Contador(props:ContProps) {

    const [sliderValue, setSliderValue] = useState(props.valorInicialC);
    
    const handleSliderChange = (newValue:number) => {
        setSliderValue(newValue);
    }

    const [num,setNum] = useState<number>(0) 

    function fincr () {
        setNum(num+sliderValue)
    }

    function fdecr () {
        setNum(num-sliderValue)
    }
    

    return (
        <div className={
            `p-2  w-72 h-108
            flex flex-col 
            border border-zinc-600 rounded-lg 
            `}>
                <div className={`
        flex flex-col items-center
         text-5xl font-black p-1
        `}>
                    <Display valor={num}/>
                    <div className="flex flex-row mt-5 space-x-20">
                        <Typography id="textoSlide" className='p-1 w-max rounded-md flex flex-col bg-zinc-700'>
                            Valor desejado:
                        </Typography>
                        <Typography id="valorSlide" className='p-1 w-12 rounded-md items-center  flex flex-col bg-zinc-700'>
                            {sliderValue}
                        </Typography>
                    </div>
                    <HorizontalSlider valorInicialS={props.valorInicialC} onValueChange={handleSliderChange}/>
                </div>
                    <Botao incr={fincr} decr={fdecr}/>
        </div>
    )
}
import Image from "next/image";

export default function Background(){
    return(
        <Image 
        src="https://wallpaperaccess.com/full/11801.jpg"
        fill
        alt="StarWars Background"
        className="-z-50 opacity-25 object-cover"
        />
    )
}
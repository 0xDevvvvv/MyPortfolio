import Image from "next/image";
import Link from "next/link";
export default function ContactSection(){
    const divClass = "flex flex-col px-2 text-xl sm:text-2xl mt-5 text-left"
    return(
        <div className="flex flex-col items-center justify-center text-center font-mono mb-6" id="about" >
            
            <span className="items-center justify-center mx-5 my-5  text-2xl sm:text-4xl"><u>#Contact Me</u></span>
            <span className={divClass}>
                Have any Queries? Feel Free to connect with me<br/>
            </span>

        </div>

    );
}

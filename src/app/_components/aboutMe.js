import Image from "next/image";
import Link from "next/link";
export default function AboutMe(){
    const spanClassname = "px-2 text-xl sm:text-2xl"
    return(
        <div className="flex flex-col items-center justify-center text-center font-mono mb-6" id="about" >
            
            <span className="items-center justify-center mx-5 mt-2 sm:mt-5 mb-10 text-2xl sm:text-4xl"><u>#About Me</u></span>
            <span className={spanClassname}>
                My name is <b>Dev Bhagavan SK.</b><br/>
                I am a third year <b>B.Tech Computer Science</b> Student at <br/><Link className="hover:bg-gray-400 hover:text-white" href="https://www.sctce.ac.in/">Sree Chithra Thirunal College of Engineering</Link>.<br/>
                I love to experiment with <b>technologies</b> in my free time, building <b>projects</b> that <br className="hidden sm:block" /> provide learning of some sort.<br/>
                I can develop programs in <b>languages</b> like python,java,c<br/> and JS <b>libraries</b> and <b>frameworks</b> like React,NextJS.
            </span>

        </div>

    );
}

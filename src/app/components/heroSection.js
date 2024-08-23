
import { FlipWords } from "@/components/ui/flip-words"


export default function HeroSection(){
    const words=["Engineering Student","Passionate Developer","Technology Enthusiast"]
    return (
      <div className='flex flex-col sm:flex-row font-mono gap-0 items-center justify-center'>
        <img className="rounded-lg shadow-2xl shadow-black  scale-75 sm:scale-100 sm:max-w-full" src="/dev.jpg" height="250" width="250"/>
        <div className='sm:p-10'>
          <span className='tracking-tighter text-3xl sm:text-8xl max-w-1'>Who Am I?<br/>Dev Bhagavan SK<br/></span>
          <span className='tracking-tighter text-xl sm:text-5xl'><FlipWords className="" duration={2000} words={words} /> <br /></span>
        </div>
      </div>
    )
  }
  
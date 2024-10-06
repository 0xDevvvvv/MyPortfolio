"use client"
import Link from "next/link"
import { FlipWords } from "@/components/ui/flip-words"


export default function HeroSection(){
    const ResumeButton = () =>{
      return(
        <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block m-6">
        <span className="absolute inset-0 overflow-hidden rounded-full">
          <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </span>
        <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
          <span className="sm:text-lg text-3xs">
            <a download href="/DevsResume.pdf" > Download My Resume</a>
          </span>
          <svg
            fill="none"
            height="16"
            viewBox="0 0 24 24"
            width="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.75 8.75L14.25 12L10.75 15.25"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
          </svg>
        </div>
        <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
      </button>
      )
    }  
    const words=["Engineering Student","Passionate Developer","Technology Enthusiast"]
    return (
      <div className='flex flex-col sm:flex-row font-mono my-8 items-center justify-center'>
        <img className="rounded-lg shadow-2xl shadow-black  scale-75 sm:scale-100 sm:max-w-full" src="/dev.jpg" height="250" width="250"/>
        <div className='sm:p-10'>
          <span className='tracking-tighter text-3xl mb-10 sm:text-8xl max-w-1'>Who Am I?<br/>Dev Bhagavan SK<br/></span>
          <span className='tracking-tighter text-xl sm:text-5xl'><FlipWords className="" duration={2000} words={words} /> <br /></span>
          <span className=''><ResumeButton/></span>
        </div>
      </div>
    )
  }
  
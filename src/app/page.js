
import React from 'react'
import {FloatingNavlinks,FloatingDockLinks,FixedNavBar} from './components/navbar.js'
import Image from 'next/image.js'

function page() {
  return (
    <div>
      <FixedNavBar />
      <FloatingNavlinks/>
      <div className='float-start'>
        <FloatingDockLinks/>
      </div>
        <HeroSection/>
    </div>

  )
}
const HeroSection  = () =>{
  return (
    <div className='grid-cols-2 font-mono gap-0'>
      <div className='bg-slate-200  col-span-1 text-4xl sm:text-9xl'>
        Dev 
        Bhagavan 
        SK
      </div>
      <div className='bg-slate-200 col-span-1 text-2xl sm:text-8xl '>
        Engineering Student
      </div>
    </div>
  )
}

export default page

import React from 'react'
import {FloatingNavlinks,FloatingDockLinks,FixedNavBar} from './components/navbar.js'
import HeroSection from './components/heroSection.js'
import ExpandableCardDemo from '@/app/components/projectcard.js'
import Image from 'next/image.js'
import AboutMe from './components/aboutMe.js'

function page() {
  return (
    <div className='min-h-screen bg-slate-50'>
      <FixedNavBar />
      <FloatingNavlinks/>
      <div className='float-start'>
        <FloatingDockLinks/>
      </div>
      <div>
        <HeroSection/><br/>
      </div>
      <div>
        <AboutMe/>
      </div>
    </div>

  )
}

export default page
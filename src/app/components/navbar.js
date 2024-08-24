'use client'
import React from "react"
import { FloatingNav } from "@/components/ui/floating-navbar"
import { FloatingDock } from "@/components/ui/floating-dock"
import {
    IconBrandGithub,
    IconBrandLinkedin,
    IconBrandInstagram
  } from "@tabler/icons-react";
import Link from "next/link";
function FixedNavBar(){
    return (
        <div className="rounded-sm flex text-center ">
            <div className='bg-opacity-50 bg-slate-100 flex-auto min-h-14 font-pacifico text-6xs tracking-wide sm:text-4xl  py-3'>
                <Link  href='/' >Dev Bhagavan SK</Link>
            </div>
            <div className='bg-opacity-50 hover:bg-slate-400 hover:text-white rounded-sm bg-slate-100  flex-auto tracking-tighter  min-h-14 text-2xs sm:text-xl py-3 px-2 sm:px-4 max-w-fit'>
            <Link href="#about">About</Link> 
            </div>
            <div className='bg-opacity-50 hover:bg-slate-400 hover:text-white rounded-sm bg-slate-100  flex-auto tracking-tighter   min-h-14 text-2xs sm:text-xl py-3 px-2 sm:px-4 max-w-fit'>
            <Link href="#projects">Projects</Link> 
            </div>
            <div className='bg-opacity-50 hover:bg-slate-400 hover:text-white rounded-sm bg-slate-100  flex-auto tracking-tighter   min-h-14 text-2xs sm:text-xl py-3 px-2 sm:px-4 max-w-fit'>
            Contact 
            </div>
           
        </div>
    );
}

function FloatingNavlinks(){
    const navitems = [
        {
            name:"Home",
            link:"/"
        },
        {
            name:"About",
            link:"/about"
        },
        {
            name:"Contact",
            link:"/contact"
        }
    ]

    return (
        <div className="relative w-full">
            <FloatingNav navItems={navitems}/>
        </div>
    )
}

function FloatingDockLinks({mobClass}){

    const docklinks = [
        {
            title:"LinkedIn",
            icon: (
                <IconBrandLinkedin className="h-full w-full text-slate-500 dark:text-neutral-300" />
              ),
            href:"https://www.linkedin.com/in/dev-bhagavan-s-k-06439a252/"
        },
        {
            title:"GitHub",
            icon: (
                <IconBrandGithub className="h-full w-full text-slate-500 dark:text-neutral-300" />
              ),
            href:"https://github.com/0xDevvvvv"
        },
        {
            title:"Instagram",
            icon: (
                <IconBrandInstagram className="h-full w-full text-slate-500 dark:text-slate-100" />
              ),
            href:"https://instagram.com/__dev25__"
        }
    ]
    return (
        <div className="flex items-center justify-center w-full">
            <FloatingDock
                desktopClassName="fixed right-2 bottom-0"
                mobileClassName="hidden right-4 bottom-5" // only for demo, remove for production
                items={docklinks}
            />
        </div>
    );

}

export  {FloatingDockLinks, FloatingNavlinks, FixedNavBar};
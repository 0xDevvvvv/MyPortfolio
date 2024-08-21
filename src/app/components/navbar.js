

import React from "react"
import { FloatingNav } from "@/components/ui/floating-navbar"

export default function FloatingNavlinks(){
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
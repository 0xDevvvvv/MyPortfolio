import Link from "next/link";
import { IconExternalLink } from "@tabler/icons-react";

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function CarouselSize({projects}) {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-[75%] max-w-screen rounded-sm"
    >
      <CarouselContent className='items-center'>
        {projects.map((p, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 ">
            <div className="p-1">
              <Card className='opacity-75 hover:opacity-100 z-10 max-h-fit'>
                <CardContent className=" flex-col  bg-gray-200 aspect-square items-center justify-center p-6 rounded-lg shadow-2xl  border-gray-200 border-2">
                <div class="flex items-center p-[9px]">
                  <div class="px-0 py-[4px]">
                    <span class="inline-block items-center p-[1px] rounded-[50%] w-[10px] h-[10px] bg-yellow-500"></span>
                  </div>
                  <div class="px-0 py-[4px]">
                    <span class="inline-block items-center p-[1px] rounded-[50%] w-[10px] h-[10px] bg-red-500"></span>
                  </div>
                  <div class="px-0 py-[4px]">
                    <span class="inline-block items-center p-[1px] rounded-[50%] w-[10px] h-[10px] bg-green-500"></span>
                  </div>
                </div>
                  <span className="text-3xs font-semibold">
                  <b><u><Link className="flex gap-0 max-w-fit flex-row hover:bg-gray-400 hover:text-black" target="_blank" href={p.src}>{p.title}<IconExternalLink className="mt-1 ml-2"/></Link></u></b><br/>
                  </span>
                    <b>Concept Used</b> - {p.Objective}<br/>
                    <b>Tech Stack Used</b>  - {p.TechStackUsed}<br/>
                    <b>Description</b> - {p.Description}<br/><br/>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className='text-black scale-150 hover:animate-pulse hover:bg-slate-400 hover:text-white'/>
      <CarouselNext className='text-black scale-150 hover:animate-pulse hover:bg-slate-400 hover:text-white'/>
    </Carousel>
  )
}

export default function ProjectSection(){
    const ProjectCard = ({projects}) =>{
        return(
            <div className="w-[25%] h-[254] mx-0 my-auto bg-[#011522] rounded-lg z-1">
            <div class="flex items-center p-[9px]">
                <div class="px-0 py-[4px]">
                  <span class="inline-block items-center p-[1px] rounded-[50%] w-[10px] h-[10px] bg-yellow-500"></span>
                </div>
                <div class="px-0 py-[4px]">
                  <span class="inline-block items-center p-[1px] rounded-[50%] w-[10px] h-[10px] bg-red-500"></span>
                </div>
                <div class="px-0 py-[4px]">
                  <span class="inline-block items-center p-[1px] rounded-[50%] w-[10px] h-[10px] bg-green-500"></span>
                </div>
            </div>
              <div div class="text-white">
                {projects}
              </div>
            </div>

        );
    }
    const divClass = "flex flex-col gap-5 px-2 text-xl sm:text-2xl mt-5 "
    const projects = [
        {
            "title" : "Library Management System",
            "src":"https://github.com/0xDevvvvv/DBMSProject",
            "Objective" : "Database Management System Project",
            "TechStackUsed" : "ReactJS, HTML, CSS, Firebase",
            "Description" : "This is a simple Library Management System Web Application where Librarians can issue books to members, add books, delete books, add other librarians etc"
        },
        {
            "title" : "Library Mgmt System (DSA)",
            "src":"https://github.com/0xDevvvvv/LibraryManagementSystem",
            "Objective" : "Data Structures",
            "TechStackUsed" : "C",
            "Description" : "Use of Efficient Data Structures to store and retrieve data"
        },
        {
            "title" : "Sorting Visualizer",
            "src":"https://github.com/0xDevvvvv/Sorting-Visualizer",
            "Objective" : "Data Structures",
            "TechStackUsed" : "C",
            "Description" : "Command Line Program to visualizer various sorting algorithms."
        },
        {
            "title" : "Online Course Portal",
            "src":"https://learnwiththisproject.vercel.app",
            "Objective" : "NextJS,Hygraph,TailwindCSS",
            "TechStackUsed" : "C",
            "Description" : "Online Course Portal to Enroll and Learn various courses."
        }
        
    ]
    return (
        <div className="font-mono mb-6" id="projects" >
            <span className="flex items-center justify-center mx-5 mt-2 sm:mt-5 mb-10 text-2xl sm:text-4xl"><u>#Projects</u></span>
            <div className="flex items-center justify-center">
            {/*
            <div className="grid sm:grid-cols-4 gap-5 px-2 text-xl sm:text-2xl mt-5 ">
            {projects.map((p)=>{
                return (
                    <div key={p.title} className="border-b sm:border-r sm:border-b-0 border-black  col-span-1" >
                    <span>
                    <b><u><Link className="flex gap-0 max-w-fit flex-row hover:bg-gray-400 hover:text-black" target="_blank" href={p.src}>{p.title}<IconExternalLink className="mt-1 ml-2"/></Link></u></b><br/>
                    <b>Concept Used</b> - {p.Objective}<br/>
                    <b>Tech Stack Used</b>  - {p.TechStackUsed}<br/>
                    <b>Description</b> - {p.Description}<br/><br/>
                    </span>
                    </div>
                );
            })}
            </div>
            */}
            <CarouselSize projects={projects}/>
            </div>
        </div>
    );
}
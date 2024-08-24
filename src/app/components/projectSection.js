import Link from "next/link";


export default function ProjectSection(){
    const divClass = "flex flex-col px-2 text-xl sm:text-2xl mt-5 text-left"
    const projects = [
        {
            "title" : "Library Management System",
            "src":"https://github.com/0xDevvvvv/DBMSProject",
            "Objective" : "Database Management System Project",
            "TechStackUsed" : "ReactJS, HTML, CSS, Firebase",
            "Description" : "This is a simple Library Management System Web Application where Librarians can issue books to members, add books, delete books, add other librarians etc"
        },
        {
            "title" : "Library Management System (Data Structure)",
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
        }
    ]
    return (
        <div className="flex flex-col items-center justify-center text-left font-mono mb-6" id="projects" >
            <span className="mx-5 mt-2 sm:mt-5 mb-10 text-2xl sm:text-4xl"><u>#Projects</u></span>
            <div className={divClass}>
            {projects.map((p)=>{
                return (
                    <span key={p.title}>
                    <b><u><Link className="hover:bg-gray-400 hover:text-black" href={p.src}>{p.title}</Link></u></b> - <br/>
                    <b>Concept Used</b> - {p.Objective}<br/>
                    <b>Tech Stack Used</b>  - {p.TechStackUsed}<br/>
                    <b>Description</b> - {p.Description}<br/><br/>
                    </span>
                );
            })}
            </div>

        </div>
    );
}
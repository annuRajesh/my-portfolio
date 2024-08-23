import ProjectCard from "./ProjectCard"
import { motion } from "framer-motion";
const Projects=()=>{
    const projects=[
       
       
        {
            heading:'Nursing Colleges',
            github:'https://github.com/annuRajesh/NursingCollegeBangalore',
            link:'https://nursing-college-bangalore.vercel.app/'

    
    },
    {
        heading:'Pizza Joint',
        github:'https://github.com/annuRajesh/pizza-joint',
        link:'https://pizza-joint-beta.vercel.app/'
    },
    {
        heading:'ToDo List',
        github:'https://github.com/annuRajesh/Todo-list/tree/main',
        link:'https://todo-list-pi-lake.vercel.app/'
    },
]
const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };
  
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };
    return(
<>
<div className="container mx-auto pb-4">

<h2 className="text-4xl bg-gradient-to-b from-secondary to-gray-400 text-transparent bg-clip-text m-5">Projects</h2>
<motion.div variants={container}
    initial="hidden"
    animate="visible" className="container mx-auto grid md:grid-cols-3 grid-cols-1 gap-4 m-4">
   

{
    
projects.map((items,index)=>
<motion.div className="" key={index} variants={item}>

<ProjectCard  heading={items.heading} git={items.github} link={items.link}/>
</motion.div>
)
}
</motion.div>
</div>
</>
    )
}
export default Projects
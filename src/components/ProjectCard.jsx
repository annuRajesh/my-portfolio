
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const ProjectCard=({heading,git,link})=>{
    
      
    return(
        <>
        <motion.div  className="aspect-square  text-white flex flex-col hover:border-4   hover:border-secondary bg-slate-700 hover:bg-black duration-300">
            <div className="flex gap-3 p-2 ">
                <a href={git}>
                <FaGithub size={24} className="visible" />
                
                </a>
                <a href={link} target="blank">Link</a>
            </div>
            <div className="text-center h-full flex justify-center items-center lg:text-4xl text-3xl   ">
                <h2>{heading}</h2>
            </div>

        </motion.div>
        </>
    )
}
export default ProjectCard
import { useAnimation, useInView,motion } from "framer-motion"
import { useEffect, useRef } from "react"

const About=()=>{
    const variants={
        initial:{opacity:0,y:30},
        visible:{opacity:1,y:0}
    }
    const ref=useRef()
    const isView=useInView(ref,{once:true})
    const controls=useAnimation()
    useEffect(()=>{
        if(isView){
            controls.start('visible')
        }
    })
    return(
        <>
        <div className="container mx-auto   m-3 px-12 py-12">
            <motion.h2 ref={ref} variants={variants} initial='initial' animate={controls} className=" text-5xl bg-gradient-to-b from-secondary to-gray-400 text-transparent bg-clip-text pb-4">About</motion.h2>
            <motion.p ref={ref} variants={variants} initial='initial' animate={controls} className="text-slate-300 md:text-start text-justify">

            I am a 23-year-old frontend developer who graduated from St. Joseph's College of Engineering and Technology, Palai. I discovered my passion for web development during my job hunt and received a lot of help from friends while self-learning. I love working on web design. Besides coding, I enjoy singing and being on stage. Music has always been a significant part of my life. I also love traveling with my friends and family.  I am still learning  a lot of things. I love finding and trying new things out.          
            </motion.p>
        </div>
        </>
    )
}
export default About
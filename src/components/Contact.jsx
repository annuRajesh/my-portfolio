import { useAnimation, useInView,motion } from "framer-motion"
import { useEffect, useRef } from "react"

const Contact=()=>{
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
        <motion.div ref={ref} variants={variants} initial='initial' animate={controls} className="container mx-auto mb-12">
            <h1 className="bg-gradient-to-b from-secondary to-gray-400 text-transparent bg-clip-text text-4xl">Contact Me</h1>
            <p className="text-white m-3">The fastest way to get in touch with me is to send a message on <a href="https://www.linkedin.com/in/annu-rajesh-a82a66221/" target="blank" className="text-secondaryBlack">Linkedln</a> or <a href="mailto:joannetsengannu@gmail.com" target="" className="text-secondaryBlack">mail me</a>.</p>
        </motion.div>
    )
}
export default Contact
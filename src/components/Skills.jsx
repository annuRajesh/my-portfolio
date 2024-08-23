import { useAnimation, useInView,motion } from "framer-motion";
import { useEffect, useRef } from "react";




const Skills = () => {
  const skills=[  'HTML',
    'CSS',
    'Javascript',
    'React.Js',
    'Tailwind CSS',
    'Framer Motion']
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
  return (
    <>
   <div className="container mx-auto mb-8">
    <motion.h1 ref={ref} variants={variants} initial='initial' animate={controls} className="bg-gradient-to-b from-secondary to-gray-400 text-transparent bg-clip-text text-4xl">What I Work With</motion.h1>
    <div className=" inline-grid md:grid-cols-6 grid-cols-3 gap-4 p-3">
    {
      skills.map((item,index)=>
      <motion.div ref={ref} variants={variants} initial='initial' animate={controls} key={index} className="text-white px-1 py-2 text-center border md:text-xl text-sm w-full rounded-md hover:bg-white hover:text-black">{item}</motion.div>)
    }
    </div>

   </div>
    </>
  );
};
export default Skills;

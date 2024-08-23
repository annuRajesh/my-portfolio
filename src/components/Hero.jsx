import { useEffect, useRef } from "react";
import image1 from "../assets/images/image1.png";
import { motion, useAnimation, useInView } from "framer-motion";
const Hero = () => {
  const variants1={
    start:{width:0},
    final:{width:"25%"},
   
  }
  const variants2={
    start:{width:0},
    final:{width:"50%"}
  }
  const variants3={
    start:{width:0},
    final:{width:"75%"}
  }
  const variants4={
    start:{width:0},
    final:{width:"100%"}
  }
  const nameVariants={
    start:{opacity:0,y:30},
    final:{opacity:1,y:0}
  }
  const ref=useRef()
  const isView=useInView(ref,{once:true})
  const controls=useAnimation()
  useEffect(()=>{
    if(isView){
      controls.start('final')
    }
  })
  return (
    <>
      
        <div className="container mx-auto mt-14 flex  flex-col justify-start items-start w-full   " id="hero">
         
          
<div className="md:w-1/2 w-full">

          <motion.div ref={ref} initial='start' variants={variants1} animate={controls}  transition={{duration:0.5,delay:0.3}} className="w-1/4 h-2 bg-gradient-to-r from-gray-200 to-secondary m-1"></motion.div>
          <motion.div ref={ref} initial='start' variants={variants2} animate={controls} transition={{duration:0.5,delay:0.3}} className="w-2/4 h-2 bg-gradient-to-r from-gray-700 to-gray-400 m-1"></motion.div>

            <motion.div ref={ref} initial='start' variants={variants3} animate={controls} transition={{duration:0.5,delay:0.3}} className="w-3/4 h-2 bg-gray-400 m-1"></motion.div>
            <motion.div ref={ref} initial='start' variants={variants4} animate={controls} transition={{duration:0.5,delay:0.3}} className="w-full h-2 bg-gray-400 m-1"></motion.div>

            <motion.h1 ref={ref} variants={nameVariants} initial='start' animate={controls}  className=" md:text-2xl  text-start  py-2 tracking-tight  text-white font-light">
              Hi, I'm <br/><span className="text-customGray  text-5xl ">Annu Rajesh</span>
            </motion.h1>
            <motion.div ref={ref} initial='start' variants={variants4} animate={controls} transition={{duration:0.5,delay:0.3}} className="w-full h-2 bg-gray-400 m-1"></motion.div>

            <motion.div ref={ref} initial='start' variants={variants3} animate={controls} transition={{duration:0.5,delay:0.3}} className="w-3/4 h-2 bg-gray-400 m-1"></motion.div>
            <motion.div ref={ref} initial='start' variants={variants2} animate={controls} transition={{duration:0.5,delay:0.3}} className="w-2/4 h-2 bg-gradient-to-r from-gray-700 to-gray-400 m-1"></motion.div>

            <motion.div ref={ref} initial='start' variants={variants1} animate={controls}  transition={{duration:0.5,delay:0.3}} className="w-1/4 h-2 bg-gradient-to-r from-gray-200 to-secondary m-1"></motion.div>
</div>



           
           
          
        </div>
      
    </>
  );
};
export default Hero;

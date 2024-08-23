import { useAnimation, useInView,motion } from "framer-motion";
import { useEffect, useRef } from "react";

const Timeline = () => {
  const timeline = [
   
    {

      month: 'December',
      year: '2001',
      descriptions: [
        'This beautiful me has been born',
        
      ]
    },
    {
      month:'June',
      year:'2007',
      descriptions:[
        'I did my schooling in St. Antonys Public School Anakkal',
        'For the 12 years I have been active and energetic and was engaged in cultural programs',
       
      ]
    },
    {
      month:'march',
      year:'2020'
      ,descriptions:[
         'I completed my schooling in March 2020',

      ]
    },
    {
      month: 'June',
      year: '2020',
      descriptions: [
        'I joined the Computer Science and Engineering B.Tech program in 2020',
        'I was not from a coding environment',
        'I learned HTML and CSS through workshops provided by the college',
        'I started designing web pages',
        'I was also part of the Music Club in our College',
        'Also involved in activities provided by IEDC'
      ]
    },
    {
      month: 'July',
      year: '2024',
      descriptions: [
        'I graduated with my friends',
        'I started learning how to develop dynamic websites',
        'I learned Framer Motion, React.js, and Tailwind CSS',
        'I started applying my skills on projects',
        'I began my self-learning process'
      ]
    }
  ];
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
    <div className="container mx-auto py-10">
      <motion.h1 className="text-4xl bg-gradient-to-b from-secondary to-gray-300 text-transparent bg-clip-text m-4" ref={ref} variants={variants} initial='initial' animate={controls}>My Life Evolutions</motion.h1>
      <div className="relative m-4">
        {timeline.map((item, index) => (
          <motion.div key={index} className=" mb-12" ref={ref} variants={variants} initial='initial' animate={controls}>
            

          
            <div className="flex flex-col md:flex-row  gap-6">
              <div className=" text-left">
                <h2 className="text-white text-xl font-semibold">{item.month}</h2>
                <h1 className="text-slate-300 text-4xl">{item.year}</h1>
              </div>
              <div className="flex-1">
                <ul className="list-disc list-outside text-customGray">
                  {item.descriptions.map((description, i) => (
                    <li key={i}>{description}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;

import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
const Timeline = () => {
  const content = [
    {
      heading: "March 2020",
      description: "Completed my schooling from St. Antonys Public School",
    },
    {
      heading: "Augest 2020",
      description:
        "Joined B.tech programme St. Josephs College of Engineering and Technology",
    },
    {
      heading: "September 2020",
      description: "Learned basics of web page creation with HTML and CSS",
    },
    {
      heading: "February 2021",
      description: "Learnt Tailwind CSS and started applying.",
    },
    {
      heading: "July 2024",
      description: "Graduated from college.",
    },
  ];
  const ref = useRef(null);
  const isView = useInView(ref, { once: true });
  const controls = useAnimation();
  useEffect(() => {
    if (isView) {
      controls.start("visible");
      controls.start("visible1");
    }
  }, [isView]);
  return (
    <div className="container mx-auto my-2  items-center">
      <h1 className="text-white text-center text-5xl">TimeLine</h1>
      {content.map((item, index) => (
        <motion.div
          ref={ref}
          variants={{
            hidden1: { opacity: 0 },
            visible1: { opacity: 1 },
          }}
          initial="hidden1"
          animate={controls}
          transition={{ duration: 1, delay: 0.1 }}
          className="flex flex-row justify-center items-center my-12"
        >
          <div className="   max-w-4 mr-16">
            <h2 className="text-white">{item.heading}</h2>
          </div>
          <div className="flex flex-col justify-center items-center md:ml-16 ml-16  ">
            <div className="h-2 w-2 border rounded-full"></div>
            <motion.div
              ref={ref}
              variants={{
                hidden: { height: 0 },
                visible: { height: 208 },
              }}
              initial="hidden"
              animate={controls}
              transition={{ duration: 0.5 }}
              className="w-0.2  border"
            ></motion.div>
          </div>
          <div className="h-0.2 w-10 border"></div>
          <motion.div className=" border p-4 rounded-lg bg-secondary ">
            <p className="text-white max-w-28  ">{item.description}</p>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};
export default Timeline;

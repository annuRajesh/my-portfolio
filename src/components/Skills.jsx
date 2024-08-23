

const skills=[  'HTML',
  'CSS',
  'Javascript',
  'React.Js',
  'Tailwind CSS',
  'Framer Motion']

const Skills = () => {
   
  return (
    <>
   <div className="container mx-auto mb-8">
    <h1 className="bg-gradient-to-b from-secondary to-gray-400 text-transparent bg-clip-text text-5xl">What I Work With</h1>
    <div className=" inline-grid md:grid-cols-6 grid-cols-3 gap-4 p-3">
    {
      skills.map((item,index)=>
      <div key={index} className="text-white px-1 py-2 text-center border md:w-full w-fit rounded-md hover:bg-white hover:text-black">{item}</div>)
    }
    </div>

   </div>
    </>
  );
};
export default Skills;

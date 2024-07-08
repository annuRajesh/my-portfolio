import image2 from "../assets/images/html.png";
import image3 from "../assets/images/css-logo.png";
import image4 from "../assets/images/tailwind.png";
import image5 from "../assets/images/React.png";
const Skills = () => {
    const imageLink=[image2,image3,image4,image5]
  return (
    <>
    <div className="container mx-auto">
        <h1 className="text-white text-center text-5xl py-10">My Skills</h1>

      <div className=" mx-auto grid grid-cols-2 gap-2 items-center max-w-[400px] gap-x-16 gap-y-8">
        {

       imageLink.map((item,index)=>
        <div>
            <img key={index} src={item} alt="" />
        </div>
    )
        }
      </div>
    </div>
    </>
  );
};
export default Skills;

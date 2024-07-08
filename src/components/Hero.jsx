import image1 from "../assets/images/image1.png";
const Hero = () => {
  return (
    <>
      <div className="container mx-auto py-3 ">
        <div className=" flex md:flex-row flex-col justify-between ">
          <div className="bg-customGray  items-center  rounded-full ">
            <img className="" src={image1} alt="" />
          </div>
          <div className="flex flex-col justify-center ">
            <h1 className=" text-7xl text-center py-48 text-white font-light">
              Hi, I'm <br/> <span className="text-customGray">Annu Rajesh</span>
            </h1>
            <button className="text-white border py-3  items-center">
                <a href="mailto:joannetsengannu@gmail.com">Contact Me</a>
                </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Hero;

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
  ];
  return (
    <div className="container mx-auto my-2  items-center">
      <h1 className="text-white text-center text-5xl">TimeLine</h1>
      {content.map((item, index) => (
        <div className="flex flex-row justify-center items-center my-12">
          <div className="   max-w-4 mr-16">
            <h2 className="text-white">{item.heading}</h2>
          </div>
          <div className="flex flex-col justify-center items-center md:ml-16 ml-16  ">
            <div className="h-4 w-4 border rounded-full"></div>
            <div className="w-0.5 h-52 border"></div>
          </div>
          <div className="ml-10">
            <p className="text-white max-w-28">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Timeline;

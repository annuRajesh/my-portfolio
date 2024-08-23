const Navbar=()=>{
    return(
        <header>
            <div className=" hidden fixed right-0 left-0 top-0 container mx-auto text-white md:flex justify-center items-center gap-4 py-2 backdrop-blur-sm ">
                <a href="">
                  About
                </a>
                <a href="" className="">My Timeline</a>
                <a href="">Skills</a>
                <a href="">Contact</a>
            </div>
        </header>
    )
}
export default Navbar
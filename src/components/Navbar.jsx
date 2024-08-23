const Navbar=()=>{
    return(
        <header>
            <div className=" hidden fixed right-0 left-0 top-0 container mx-auto text-white md:flex justify-center items-center gap-4 py-2 backdrop-blur-lg  my-3">
                <a href="#about" className="active:bg-slate-400 rounded-full px-4 hover:bg-customBlack">
                  About
                </a>
                <a href="#timeline" className="active:bg-slate-400 rounded-full px-4 hover:bg-customBlack">My Timeline</a>
                <a href="#skills" className="active:bg-slate-400 rounded-full px-4 hover:bg-customBlack">Skills</a>
                <a href="#contact" className="active:bg-slate-400 rounded-full px-4 hover:bg-customBlack">Contact</a>
            </div>
        </header>
    )
}
export default Navbar
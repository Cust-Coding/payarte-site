import Navbar from "./nav";

export default function Header(){
    return(
        <header className=" fixed top-6 md:top-12 w-[calc(100%-20%)] bg-gray-400/3 md:w-[calc(100%-50%)] lg:w-[calc(100%-60%)]  h-15 rounded-sm flex items-center justify-center">
            <div className="absolute  w-[99%] h-[97%] z-10 bg-gray-100/8 rounded-sm blur">
                
            </div>
            <Navbar/>
        </header>
    );
}
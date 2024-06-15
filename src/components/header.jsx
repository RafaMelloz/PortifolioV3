import { useState } from "react";
import { useScrollDirection } from "../utils/scrollDirection";
import { IoMenu } from "react-icons/io5";
import { MobileSidebar } from "./mobileSidebar";

export const Header = () =>{
    const {scrollDirection, scrollPosition} = useScrollDirection();
    const [isSidebarOpen, setIsOpenSideBar] = useState(false)
    
    const toggleSidebar = () => {
        setIsOpenSideBar(!isSidebarOpen);
    };

    return(
        <header className={`${scrollPosition === 0 ? 'h-24' : 'bg-bgColor/85 backdrop-blur h-16 shadow-[0px_00px_20px_-10px_#2db7f77b]'} transition-all duration-500 sticky ${ scrollDirection === "down" ? "-top-24" : "top-0"}`}>
            <div className="container h-full m-auto flex justify-between items-center px-3 md:px-8">
                <h3 className="font-audioWide text-3xl pointer-events-none">R</h3>

                <nav>
                    <ul className="hidden md:flex font-fira text-sm gap-10">
                        <li className="hover:text-primaryColor"><a href="#sobre">Sobre</a></li>
                        <li className="hover:text-primaryColor"><a href="#experiencia">Experiência</a></li>
                        <li className="hover:text-primaryColor"><a href="*projetos">Projetos</a></li>
                    </ul>

                    <IoMenu className="block md:hidden size-8" onClick={toggleSidebar} /> 


                    <MobileSidebar toggle={toggleSidebar} isSidebarOpen={isSidebarOpen} />
                </nav>
            </div>
        </header>
    )
}
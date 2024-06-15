import { useScrollDirection } from "../utils/scrollDirection";

export const Header = () =>{
    const {scrollDirection, scrollPosition} = useScrollDirection();

    return(
        <header className={`${scrollPosition === 0 ? 'h-24' : 'bg-bgColor/85 backdrop-blur h-16 shadow-[0px_00px_20px_-10px_#2db7f77b]'} transition-all duration-500 sticky ${ scrollDirection === "down" ? "-top-24" : "top-0"}`}>
            <div className="container h-full m-auto flex justify-between items-center px-3 md:px-8">
                <h3 className="font-audioWide text-3xl pointer-events-none">R</h3>

                <nav>
                    <ul className="flex font-fira text-sm gap-10">
                        <li className="hover:text-primaryColor"><a href="">Sobre</a></li>
                        <li className="hover:text-primaryColor"><a href="">Experiencia</a></li>
                        <li className="hover:text-primaryColor"><a href="">Projetos</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
import { LuFile, LuGithub, LuLinkedin, LuMail } from "react-icons/lu"

export const Footer = () =>{
    return(
        <footer className="w-full flex flex-col justify-center items-center pb-3 md:py-6">
            <div className="flex gap-10 text-xl mt-4 mb-6 md:hidden">
                <a href="" className="transition-all duration-200 hover:text-primaryColor hover:-translate-y-1"><LuFile /></a>
                <a href="" className="transition-all duration-200 hover:text-primaryColor hover:-translate-y-1"><LuGithub /></a>
                <a href="" className="transition-all duration-200 hover:text-primaryColor hover:-translate-y-1"><LuLinkedin /></a>
                <a href="" className="transition-all duration-200 hover:text-primaryColor hover:-translate-y-1"><LuMail /></a>
            </div>
            <a href="https://github.com/RafaMelloz" className="font-fira text-sm hover:text-primaryColor"> Feito por Rafael Melo</a>
        </footer>
    )
}
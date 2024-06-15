import { LuFile, LuGithub, LuLinkedin, LuMail } from "react-icons/lu"


export const Aside = () =>{
    return(
        <div className="hidden md:flex flex-col items-center gap-7 text-2xl w-10 fixed bottom-0">
            <a href="" className="transition-all duration-200 hover:text-primaryColor hover:-translate-y-1"><LuFile/></a>
            <a href="" className="transition-all duration-200 hover:text-primaryColor hover:-translate-y-1"><LuGithub/></a>
            <a href="" className="transition-all duration-200 hover:text-primaryColor hover:-translate-y-1"><LuLinkedin/></a>
            <a href="" className="transition-all duration-200 hover:text-primaryColor hover:-translate-y-1"><LuMail/></a>
            <div className="border rounded-t-full border-textColor h-20"></div>
        </div>
    )
}
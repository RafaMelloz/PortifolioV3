import { LuExternalLink, LuGithub, LuRocket } from "react-icons/lu"

export const CardProject = ({res}) =>{
    
    const { 
        nameProject, 
        linkWebSite, 
        linkGitHub, 
        description,
        technologies 
    } = res

    return(
        <div className="group w-full flex flex-col justify-between gap-5 max-w-80 bg-bgCards rounded p-6 transition-all duration-200 hover:-translate-y-2">
            <div>
                <div className="flex justify-between items-center gap-3">
                    <LuRocket className="size-8 text-primaryColor" />
                    <div className="flex gap-2">
                        {linkGitHub && <a href={linkGitHub} className="hover:text-primaryColor"><LuGithub className="size-5" /></a>}
                        {linkWebSite && <a href={linkWebSite} className="hover:text-primaryColor"><LuExternalLink className="size-5" /></a>}
                    </div>
                </div>

                <div className="mt-5">
                    <h3 className="text-titleColor font-bold text-xl mb-1 transition-all duration-300 group-hover:text-primaryColor">
                        <a href={linkWebSite}>{nameProject}</a>
                    </h3>
                    <p className="text-sm">{description}</p>
                </div>
            </div>

            <ul className="flex flex-wrap gap-1">
                {technologies.map((tec, i) => (
                    <li key={i} id={i + nameProject} className="text-xs text-white/90 bg-primaryColor/40 px-2 py-0.5 rounded">{tec.name}</li>
                ))}
            </ul>
        </div>

    )
}
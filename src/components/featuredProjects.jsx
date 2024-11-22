import prontue from "../assets/prontue.svg";
import spotify from "../assets/spotify.png";


export const FeaturedProjects = ({project}) => {


    return (
        <>
            <article className={`w-full relative hidden md:flex md:mb-20 lg:mb-10 ${project.position === 'right' ? 'justify-start' : 'justify-end'}`}>
                <div className={`w-2/3 relative rounded`}>
                    <a href={project.linkWebSite} className={`w-full bg-bgColor h-full absolute opacity-50 hover:opacity-0 transition-all duration-300 rounded `}></a>
                    <img src={project.imgName === "prontue" ? prontue : spotify} alt={project.imgName} className="rounded" />
                </div>

                <div className={`flex flex-col gap-6 absolute w-1/2 top-1/2 transform -translate-y-1/2 ${project.position === 'right' ? 'text-right right-0 items-end' : 'text-left left-0 items-start'}`}>
                    <a href={project.linkWebSite} className={`text-titleColor text-2xl font-bold hover:text-primaryColor w-fit`}>{project.name}</a>

                    <p className="p-5 bg-bgCards rounded text-sm">
                        {project.description}
                    </p>

                    <ul className="flex gap-4 justify-end font-fira text-xs">
                        {[project.technologies.map((tech) => (
                            <li key={tech.name} className="bg-bgColor p-1 rounded text-nowrap">{tech.name}</li>
                        ))]}
                    </ul>
                </div>
            </article>


            <article className="w-full relative block md:hidden object-cover bg-contain mb-10" style={{ backgroundImage: `url(${project.imgName === "prontue" ? prontue : spotify})`}}>
                <div className="bg-bgColor opacity-90 w-full h-full p-10 flex flex-col justify-center items-center gap-6 hover:opacity-75 transition-all duration-300">
                    <a href={project.linkWebSite} className="text-titleColor text-2xl font-bold hover:text-primaryColor w-fit">{project.name}</a>

                    <p className="text-sm text-center">
                        {project.description}
                    </p>

                    <ul className="flex gap-4 justify-center font-fira text-xs">
                        {project.technologies.map((tech) => (
                            <li key={tech.name} className="bg-bgColor p-1 rounded">{tech.name}</li>
                        ))}
                    </ul>
                </div>  
            </article>
        </>
    );
}
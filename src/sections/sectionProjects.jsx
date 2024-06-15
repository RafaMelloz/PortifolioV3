import { Projects } from "../utils/descProjects"
import { CardProject } from "../components/cardProject"

export const SectionProjects = () =>{
    return(
        <section className="md:ml-28 min-h-screen flex flex-col  justify-center" id="projetos">
            <h2 className="text-titleColor text-2xl font-bold flex items-center whitespace-nowrap afterTitle w-full  mb-12">Projetos</h2>

            <div className="grid grid-cols-gridResponsive gap-4 justify-items-center">
                {Projects.map((project) =>(
                    <CardProject key={project.id} res={project} />
                ))}
            </div>
        </section>
    )
}
import { FeaturedProjects } from "../components/featuredProjects"
import { StarProjects } from "../utils/descProjects"

export const SectionBuilds = () => {
    return (
        <section className="md:ml-28 h-screen flex flex-col items-center justify-center md:px-0 lg:px-28 " id="experiencia">
            <h2 className="text-titleColor text-3xl font-bold flex items-center whitespace-nowrap afterTitle w-full  mb-12">Projetos notáveis</h2>

            {StarProjects.map((project) => (
                <FeaturedProjects key={project.id} project={project} />
            ))}
        </section>
    )
}
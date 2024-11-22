import { useState } from "react";
import { Projects } from "../utils/descProjects";
import { CardProject } from "../components/cardProject";

export const SectionProjects = () => {
    const [visibleProjects, setVisibleProjects] = useState(6);

    const toggleProjects = () => {
        if (visibleProjects === 6) {
            setVisibleProjects(Projects.length);
        } else {
            setVisibleProjects(6);
        }
    };

    return (
        <section className="min-h-screen flex flex-col justify-center items-center md:px-10 lg:px-0" id="projetos">
            <h2 className="text-titleColor text-3xl font-bold text-center whitespace-nowrap mb-12">Outros projetos</h2>

            <div className="grid grid-cols-gridResponsive gap-4 justify-items-center w-full max-w-screen-lg">
                {Projects.slice(0, visibleProjects).map((project) => (
                    <CardProject key={project.id} res={project} />
                ))}
            </div>
            {Projects.length > 6 && (
                <button
                    className="mt-6 px-4 py-2 bg-transparent text-primaryColor rounded border border-primaryColor hover:bg-primaryColor hover:text-white transition duration-200"
                    onClick={toggleProjects}
                >
                    {visibleProjects === 6 ? "Mostrar mais" : "Mostrar menos"}
                </button>
            )}
        </section>
    );
};

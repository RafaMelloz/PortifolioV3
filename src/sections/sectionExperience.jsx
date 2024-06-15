import { WhereIWorked } from "../components/whereIworked"

export const SectionExperience = () => {
    return (
        <section className="md:ml-28 h-screen flex flex-col items-center justify-center md:px-28" id="experiencia">
            <h2 className="text-titleColor text-2xl font-bold flex items-center whitespace-nowrap afterTitle w-full mb-12">Onde trabalhei</h2>
            <WhereIWorked/>
        </section>
    )
}
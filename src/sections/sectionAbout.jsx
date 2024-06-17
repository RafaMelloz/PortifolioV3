export const SectionAbout = () =>{
    return(
        <section className="md:ml-28 h-screen flex flex-col md:flex-row items-center justify-center gap-5  md:px-0 lg:px-28 md:gap-20" id="sobre">

            <div className="w-full">
                <h2 className="text-titleColor text-2xl font-bold flex items-center whitespace-nowrap afterTitle mb-10">Sobre Mim</h2>

                <p className="mb-3 text-base text-justify">
                    Formado em TI pela <a className="text-primaryColor font-semibold" href="https://fieb.edu.br">FIEB</a>, comecei a me aventurar no mundo da programação em 2020. Atualmente, estou ADS
                    e realizando cursos complementares regularmente para me manter atualizado.

                    
                </p>

                <p className="mb-4 text-justify">
                    Sempre busca de novas oportunidades de emprego para aprofundar meus conhecimentos em desenvolvimento  e aplicar minha experiência em
                     projetos desafiadores e inovadores.
                </p>
                
                <span>Tecnologias que tenho tralhado recentemente:</span>
                <ul className="font-fira grid gap-1 mt-1 grid-cols-1 sm:grid-cols-2 text-sm list-disc list-inside marker:text-primaryColor">
                    <li>JavaScript (ES6+)</li>
                    <li>TypeScript</li>
                    <li>React</li>
                    <li>Angular</li>
                    <li>Node</li>
                    <li>Prisma</li>
                </ul>
            </div>

            <div className="bg-titleColor/20 w-full max-w-72 h-72"></div>
        </section>
    )
}
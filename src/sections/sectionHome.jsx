import { FaRocket } from "react-icons/fa"

export const SectionHome = () =>{
    return(
        <section className="md:ml-28 h-fullScreen flex items-center">
           <div className="flex flex-col gap-2">
                <h3 className="font-fira text-primaryColor">Ola, me chamo</h3>
                <h1 className="text-titleColor font-extrabold tracking-wide text-7xl">Rafael Melo</h1>
                <h2 className="text-titleColor/80 font-bold tracking-wide text-4xl">Desenvolvedor Front-End Junior</h2>
                <p className="max-w-xl">
                    Desenvolvedor web apaixonado por criar experiências digitais de qualidade,
                    e especializando-se em <span className="text-primaryColor">desenvolvimento web</span> para enfrentar desafios tecnológicos
                    com inovação 
                </p>

                <a  href="" 
                    className="border border-primaryColor text-primaryColor rounded-lg text-center max-w-52 py-4 mt-8 transition-colors duration-200 hover:bg-primaryColor hover:text-white"
                >
                    Veja meus projetos!
                </a>
           </div>
        </section>
    )
}
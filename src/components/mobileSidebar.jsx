import { useEffect } from "react";
import { IoClose } from "react-icons/io5";

export const MobileSidebar = ({ isSidebarOpen, toggle }) => {
    useEffect(() => {
        if (isSidebarOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isSidebarOpen]);

    return (
        <div
            className={`fixed inset-0 bg-black bg-opacity-50 z-10 transition-opacity duration-300 ease-in-out ${isSidebarOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
            onClick={toggle}
        >
            <div
                className={`fixed z-20 flex justify-center items-center flex-col top-0 right-0 w-64 h-screen bg-bgColor shadow-lg p-4 transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}
                onClick={(e) => e.stopPropagation()}
            >
                <IoClose className="text-2xl mb-4 cursor-pointer size-8 absolute top-8 right-6 hover:text-primaryColor" onClick={toggle} />

                <ul className="flex flex-col gap-6 font-fira text-sm">
                    <li><a href="#sobre" className="hover:text-primaryColor">Sobre</a></li>
                    <li><a href="#experiencia" className="hover:text-primaryColor">Experiência</a></li>
                    <li><a href="#projetos" className="hover:text-primaryColor">Projetos</a></li>
                </ul>
            </div>
        </div>
    );
};

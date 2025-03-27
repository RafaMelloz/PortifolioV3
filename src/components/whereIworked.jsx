import { useState } from "react"
import { works } from "../utils/descWorks";

export const WhereIWorked = () =>{
    const [idWork, setIdWork] = useState(1);

    function toggleWork(id) {
        setIdWork(id)
    }

    return(
        <div className="flex flex-col sm:flex-row w-full gap-12">

            <div className="flex flex-col border-b-2 sm:border-b-0 sm:border-l-2 border-titleColor/20">
                {works.map((work) => (
                    <button onClick={() => toggleWork(work.id)} className={`ml-6 whitespace-nowrap text-sm py-2 text-start ${idWork === work.id ? 'text-primaryColor' : 'text-textColor'} hover:text-primaryColor`} key={work.id}>{work.companyName}</button>
                ))}
            </div>

            <div>
                <h3 className="text-titleColor text-xl mb-1">
                    {works[idWork].role}
                    <a className="text-primaryColor italic" href={works[idWork].companyUrl}> {works[idWork].companyName}</a> 
                </h3>
                <h4 className="font-fira text-sm mb-6">{works[idWork].workingTime}</h4>
                <ul className="list-disc list-inside marker:text-primaryColor">
                    {works[idWork].responsibilities.map((res) =>(
                        <li key={res.id} className="text-sm mb-0.5 text-justify">
                            {res.content}
                        </li>
                    ))}
                </ul>
            </div>
            
        </div>
    )
}
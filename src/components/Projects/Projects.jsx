import '../../index.css';
import { useEffect, useState } from 'react';
import { client } from "../../utils/sanity-client.ts";
import ProjectList from './ProjectList.jsx';
import ProjectCard from './ProjectCard.jsx';

const data = await client.fetch('*[_type == "project"]');

function AboutUs() {

    return (
        <div className="flex justify-center items-center">
            <div className="w-4/5">
                {data.map((data) => {
                    return (<ProjectCard data={data} />);
                })}
            </div>
        </div>


        // <div className="flex justify-center items-center">
        //     <div className="w-4/5">
        //         <div className="grid grid-cols-2 cursor-pointer">
        //             <div className={`w-full ${selectedProject === "CZAPOBA" ? 'bg-blue-600 hover:bg-blue-400' : 'bg-blue-500 hover:bg-blue-700'} text-2xl font-extrabold text-center border-slate-400 border-[1px] border-solid`}>
        //                 <p className="text-white">CZAPOBA</p>
        //             </div>
        //             <div className={`w-full ${selectedProject === "SOSZD" ? 'bg-blue-600 hover:bg-blue-400' : 'bg-blue-500 hover:bg-blue-700'} text-2xl font-extrabold text-center border-slate-400 border-[1px] border-solid`}>
        //                 <p className="text-white">SOSZD</p>
        //             </div>
        //         </div>
        //         <div className="h-[500px] border-slate-400 border-[1px] border-solid">

        //         </div>
        //     </div>
    );

}

export default AboutUs;
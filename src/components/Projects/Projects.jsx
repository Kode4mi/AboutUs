import '../../index.css';
import { useEffect, useState } from 'react';
import { client } from "../../utils/sanity-client.ts";
import ProjectCard from './ProjectCard.jsx';

const data = await client.fetch('*[_type == "project"]');

function AboutUs() {

    return (
        <div className="flex justify-center items-center">
            <div className="w-[100vw]">
                {data.map((data) => {
                    return (<ProjectCard data={data} />);
                })}
            </div>
        </div>
    );

}

export default AboutUs;
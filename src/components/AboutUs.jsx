import "../index.css";
import { useState } from 'react';
import Card from './AboutUsCard.jsx';
import { client } from "../utils/sanity-client.ts";

const data = await client.fetch('*[_type == "card"]');

function AboutUs() {
    const [active, setActive] = useState(0);

    return (
        <>
            <div className='text-center h-40'>
                <h1 className='text-6xl font-extrabold p-5 text-white'
                    onClick={() => setActive(0)}
                >O nas</h1>
                <div className='text-white text-5xl font-extrabold'>
                    <span
                        className='kodemi-span inline-block transition-transform transform-gpu hover:scale-105 cursor-pointer'
                        onClick={() => setActive(1)}
                    >
                        Ko
                    </span>
                    <span
                        className='kodemi-span inline-block transition-transform transform-gpu hover:scale-105 cursor-pointer'
                        onClick={() => setActive(2)}
                    >
                        De
                    </span>
                    <span
                        className='kodemi-span-d inline-block transition-transform transform-gpu hover:scale-105 cursor-pointer'
                        onClick={() => setActive(3)}
                    >
                        4
                    </span>
                    <span
                        className='kodemi-span inline-block transition-transform transform-gpu hover:scale-105 cursor-pointer'
                        onClick={() => setActive(4)}
                    >
                        Mi
                    </span>
                </div>
            </div>
            <div className='flex items-center justify-center my-10'>
                <Card active={active} data={data} />
            </div>
        </>
    );

}

export default AboutUs;
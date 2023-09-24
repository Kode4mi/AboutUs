import "../index.css";
import { useState } from 'react';
import Card from './Card.jsx';

function AboutUs({ }) {
    const [name, setName] = useState("Kode4mi")
    const [png, setPng] = useState("logo.png")

    return (
        <>
            <div className='text-center h-40'>
                <h1 className='text-6xl font-extrabold p-5 text-white'
                    onClick={() => { setName("Kode4mi"); setPng("logo.png"); }}
                >O nas</h1>
                <p className='text-white text-5xl font-extrabold'>
                    <span
                        className='kodemi-span inline-block transition-transform transform-gpu hover:scale-105 cursor-pointer'
                        onClick={() => { setName("KotKamil"); setPng("KotKamil.png"); }}
                    >
                        Ko
                    </span>
                    <span
                        className='kodemi-span inline-block transition-transform transform-gpu hover:scale-105 cursor-pointer'
                        onClick={() => { setName("Deznka"); setPng("Deznka.png"); }}
                    >
                        De
                    </span>
                    <span
                        className='kodemi-span-d inline-block transition-transform transform-gpu hover:scale-105 cursor-pointer'
                        onClick={() => { setName("M1chalS"); setPng("M1chalS.png"); }}
                    >
                        4
                    </span>
                    <span
                        className='kodemi-span inline-block transition-transform transform-gpu hover:scale-105 cursor-pointer'
                        onClick={() => { setName("Miks"); setPng("Miks.png"); }}
                    >
                        Mi
                    </span>
                </p>
            </div>
            <div className='flex items-center justify-center my-10'>
                <Card name={name} png={png} />
            </div>

        </>
    );

}

export default AboutUs;
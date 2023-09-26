import "../index.css";
import { useState } from 'react';
import Card from './Card.jsx';

// import KotKamil from '../images/Mirek3.jpg';
// import Deznka from '../images/Deznka.jpg';
// import M1chalS from '../images/M1chalS.jpg';
// import Miks from '../images/Miks.jpg';


function AboutUs({ }) {
    const [name, setName] = useState("Kode4mi")
    const [img, setImg] = useState("logo.png")

    const cardChange = (newName, newImg) => {
        setName(newName);
        setImg(newImg);
    }

    return (
        <>
            <div className='text-center h-40'>
                <h1 className='text-6xl font-extrabold p-5 text-white'
                    onClick={() => { cardChange("Kode4mi", "logo.png") }}
                >O nas</h1>
                <div className='text-white text-5xl font-extrabold'>
                    <span
                        className='kodemi-span inline-block transition-transform transform-gpu hover:scale-105 cursor-pointer'
                        // onClick={() => { cardChange("KotKamil", KotKamil.src) }}
                        onClick={() => { cardChange("KotKamil", "KotKamil.jpg") }}
                    >
                        Ko
                    </span>
                    <span
                        className='kodemi-span inline-block transition-transform transform-gpu hover:scale-105 cursor-pointer'
                        // onClick={() => { cardChange("Deznka", Deznka.src) }}
                        onClick={() => { cardChange("Deznka", "Deznka.jpg") }}
                    >
                        De
                    </span>
                    <span
                        className='kodemi-span-d inline-block transition-transform transform-gpu hover:scale-105 cursor-pointer'
                        // onClick={() => { cardChange("M1chalS", M1chalS.src) }}
                        onClick={() => { cardChange("M1chalS", "M1chalS.jpg") }}
                    >
                        4
                    </span>
                    <span
                        className='kodemi-span inline-block transition-transform transform-gpu hover:scale-105 cursor-pointer'
                        // onClick={() => { cardChange("Miks", Miks.src) }}
                        onClick={() => { cardChange("Miks", "Miks.jpg") }}
                    >
                        Mi
                    </span>
                </div>
            </div>
            <div className='flex items-center justify-center my-10'>
                <Card name={name} img={img} />
            </div>

        </>
    );

}

export default AboutUs;
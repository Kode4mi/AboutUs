import 'animate.css';
import { useEffect, useState } from 'react';

function Card({ img, name }) {
    const [cardClasses, setCardClasses] = useState("card card-side bg-slate-700 shadow-xl w-1/3 min-w-[400px] h-[300px] animate__animated ");
    const [newName, setNewName] = useState();
    const [newImg, setNewImg] = useState();

    const Description = () => {
        switch (newName) {
            case "KotKamil": return <div>Aspirujący, młody programista</div>;
            case "Deznka": return <div>Aspirujący, młody programista</div>;
            case "M1chalS": return <div>Aspirujący, młody programista - najmądrzejszy z całej czwórki.</div>;
            case "Miks": return <div>Aspirujący, młody programista - najszerszy w barach z całej czwórki.</div>;
            default: return <div>Kode4mi to grupa stworzona przez 4 kolegów, którzy poznali się w jednym celu - zwalczania I/O Errorów</div>;
        }
    }

    useEffect(() => {
        setCardClasses("card card-side bg-slate-700 shadow-xl w-1/3 min-w-[400px] h-[300px] animate__animated animate__fadeOutDown")
        setTimeout(() => {
            setCardClasses(cardClasses + " animate__fadeInDown")
            setNewName(name);
            setNewImg(img);
        }, 300)
    }, [name])

    return (
        <div className={cardClasses}>
            <figure className='w-1/2 h-[300px]'>
                <img src={newImg} className='object-cover h-full' />
            </figure>
            <div className='card-body w-1/2'>
                <h1 className='card-title text-2xl'>{newName}</h1>
                {Description()}
                <div className='card-actions justify-end'></div>
            </div>
        </div>
    );
}

export default Card;
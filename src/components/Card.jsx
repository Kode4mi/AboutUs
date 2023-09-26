import 'animate.css';
import { useEffect, useState } from 'react';

function Card({ img, name }) {
    const [cardClasses, setCardClasses] = useState("card lg:card-side bg-slate-700 shadow-xl w-1/3 min-w-[300px] h-fit animate__animated ");
    const [newName, setNewName] = useState();
    const [newImg, setNewImg] = useState();

    const Description = () => {
        switch (newName) {
            case "KotKamil": return (
                <div>
                    <p>Aspirujący, młody programista</p>
                    <div className="divider"></div>
                    <p className="textarea textarea-primary text-sm">
                        *Some example text*
                    </p>

                </div>
            );
            case "Deznka": return <div>Aspirujący, młody programista</div>;
            case "M1chalS": return <div>Aspirujący, młody programista - najmądrzejszy z całej czwórki.</div>;
            case "Miks": return <div>Aspirujący, młody programista - najszerszy w barach z całej czwórki.</div>;
            default: return <div>Kode4mi to grupa stworzona przez 4 kolegów, którzy poznali się w jednym celu - zwalczania I/O Errorów</div>;
        }
    }

    useEffect(() => {
        setCardClasses("card lg:card-side bg-slate-700 shadow-xl w-1/3 min-w-[300px] h-fit animate__animated animate__fadeOutDown")
        setTimeout(() => {
            setCardClasses(cardClasses + " animate__fadeInDown")
            setNewName(name);
            setNewImg(img);
        }, 300)
    }, [name])

    return (
        <div className={cardClasses}>
            <figure className="h-[250px] lg:h-full lg:w-1/3"><img src={newImg} className="h-full lg:object-cover lg:h-full" /></figure>
            <div className="card-body lg:w-2/3 h-fit ">
                <h1 className="card-title text-2xl">{newName}</h1>
                <div>{Description()}</div>
            </div>
        </div>
    );
}

export default Card;
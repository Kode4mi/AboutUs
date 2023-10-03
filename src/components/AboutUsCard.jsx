'use client'
import 'animate.css';
import {useEffect, useState} from 'react';
import {PortableText} from "@portabletext/react";
import newImg from '../assets/default-image.webp';
import {urlFor} from "../utils/sanity-client.ts";

function Card({active, data}) {
    const [cardClasses, setCardClasses] = useState("card lg:card-side bg-slate-700 shadow-xl w-1/3 min-w-[300px] h-fit animate__animated ");
    const [cardData, setCardData] = useState({});

    useEffect(() => {
        setCardClasses("card lg:card-side bg-slate-700 shadow-xl w-1/3 min-w-[300px] h-fit animate__animated animate__fadeOutDown")
        setTimeout(() => {
            setCardClasses(cardClasses + " animate__fadeInDown");
            setCardData(data.find((card) => {
                return card.index === active;
            }));
        }, 300)
    }, [active])

    return <>
        {cardData && <div className={cardClasses}>
            <figure className="h-[250px] lg:h-full lg:w-1/3"><img alt={cardData.name} src={(cardData.image && urlFor(cardData.image)) ?? newImg.src}
                                                                  className="h-full lg:object-cover lg:h-full"/></figure>
            <div className="card-body lg:w-2/3 h-fit ">

                <h1 className="card-title text-2xl">{cardData.name}</h1>
                <div><PortableText value={cardData.description}/></div>

            </div>
        </div>}
    </>;
}

export default Card;
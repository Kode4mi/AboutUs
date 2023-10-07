import React, { useEffect, useState } from 'react';
import { urlFor } from "../../utils/sanity-client.ts";

const ProjectList = ({ data }) => {

    const [selectedImage, setSelectedImage] = useState(0);

    // temporary images for testing
    const images = [
        "https://i.kym-cdn.com/photos/images/original/002/283/888/620.jpg",
        "https://i.kym-cdn.com/photos/images/original/002/507/353/92b.jpg",
        "https://i.insider.com/6340783eb3e94d0019781b4e?width=700"
    ]

    const imageChange = (direction) => {
        if (direction === "previous") {
            selectedImage === 0 ? setSelectedImage(2) : setSelectedImage(selectedImage - 1);
        }
        else {
            selectedImage === 2 ? setSelectedImage(1) : setSelectedImage(selectedImage + 1);
        }
    }

    return (
        <div className="mb-10">
            <h1 className="p-2 mb-2 text-3xl font-extrabold">{data.title}</h1>
            <div className="flex flex-col lg:flex-row border-[1px] border-solid border-red-600 relative">
                <div className="lg:w-2/3 h-40 lg:h-auto border-[1px] border-dashed border-red-600 relative">
                    <p className="pl-10">{data.slug.current}</p>
                </div>
                <div className="carousel w-full lg:w-1/3">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src={images[selectedImage]} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a className="btn btn-circle" onClick={() => imageChange("previous")}>❮</a>
                            <a className="btn btn-circle" onClick={() => imageChange("next")}>❯</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectList;

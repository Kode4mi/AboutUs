// ProjectList.js
import React, { useEffect, useState } from 'react';
import { urlFor } from "../../utils/sanity-client.ts";

const ProjectList = ({ data }) => {


    return (
        <div className="flex flex-col">
            <h1 className={`p-2 mb-2 text-3xl font-extrabold`}>{data.title}</h1>
            <div className="h-[300px] border-[1px] border-solid border-red-600"></div>
        </div>
    );
};

export default ProjectList;

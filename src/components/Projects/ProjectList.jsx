// ProjectList.js
import React, { useEffect } from 'react';

const ProjectList = ({ projects, selectedProject, onSelectProject }) => {

    useEffect(() => {
        console.log(projects);
    }, [])

    return (
        <div className="flex flex-col">
            {projects.map((project, index) => (


                <button
                    key={index}
                    onClick={() => onSelectProject(project)}
                    className={`p-2 mb-2 text-3xl font-extrabold ${selectedProject === project ? 'bg-blue-500 text-white' : ''
                        }`}
                >
                    {project}
                </button>
            ))
            }
        </div>
    );
};

export default ProjectList;

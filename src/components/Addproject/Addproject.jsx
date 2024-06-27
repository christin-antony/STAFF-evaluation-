import React, { useEffect, useState } from 'react';
import ProjectComponent from './ProjectComponent';

const Addproject = ({ handleProjectUpdate, count, setCount, projectsData,  }) => {
    const addProjects = () => {
        setCount(count+1)
        console.log(count);

    };

    const renderAddProjectComponents = () => {
        let tagArray = [];
        for (let i = 0; i < count; i++) {
            tagArray.push(
                <ProjectComponent
                    key={i}
                    index={i}

                    handleProjectUpdate={handleProjectUpdate}

                    projectsDataindex={projectsData[i]}
                />
            );
        }
        return tagArray;
    };

    return (
        <div>
            {renderAddProjectComponents()}
            <button type="button" onClick={addProjects} className="btn col-sm-2 btn-primary px-4">Add</button>
        </div>
    );
};

export default Addproject;
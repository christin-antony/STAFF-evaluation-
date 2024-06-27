import React, { useState, useEffect } from 'react';

const ProjectComponent = ({ index, projectsDataindex, handleProjectUpdate }) => {


    return (
        <div>
            <label htmlFor={`inputProjectName${index}`} className="col-sm-11 col-form-label labeldark"><strong>Project {index + 1}:</strong></label>
            <div className="row mb-3">
                <div className="col-sm-1"></div>
                <label htmlFor={`inputProjectName${index}`} className="col-sm-4 col-form-label labeldark">Project Name</label>
                <div className="col-sm-7">
                    <input
                        type="text"
                        name={`ProjectName${index}`}
                        
                         
                        className="form-control"
                        id={`inputProjectName${index}`}
                        placeholder=""
                    />
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-sm-1"></div>
                <label htmlFor={`inputDescription${index}`} className="col-sm-4 col-form-label labeldark">Description</label>
                <div className="col-sm-7">
                    <textarea
                        name={`Description${index}`}
                        
                         
                        className="form-control"
                        id={`inputDescription${index}`}
                        placeholder=""
                    />
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-sm-1"></div>
                <label htmlFor={`inputRole${index}`} className="col-sm-4 col-form-label labeldark">Role</label>
                <div className="col-sm-7">
                    <input
                        type="text"
                        name={`Role${index}`}
                        className="form-control"
                        id={`inputRole${index}`}
                        placeholder=""
                    />
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-sm-1"></div>
                <label htmlFor={`inputScore${index}`} className="col-sm-4 col-form-label labeldark">Score</label>
                <div className="col-sm-7">
                    <select
                        name={`Score${index}`}
                       
                         
                        className="form-select"
                        id={`inputScore${index}`}
                    >
                        <option value="Score" disabled>Score</option>
                        <option value="Excellant">Five</option>
                                        <option value="Above Average">Four</option>
                                        <option value="Average">Three</option>
                                        <option value="Below Average">Two</option>
                                        <option value="Poor">One</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default ProjectComponent;

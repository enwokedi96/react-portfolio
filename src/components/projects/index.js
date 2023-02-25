import React from "react";
import ProjectCard from "../projectCard";
import projects from "../projectsList.json";

// ProjectCard (...project)
// <ProjectCard {...project}/>
function AllProjects(){
   
    return (
        <div className="container">
            <div className="row">
                {projects.map((project) => 
                        <ProjectCard {...project}/>
                    )}
            </div>
        </div>
    );
}

export default AllProjects;
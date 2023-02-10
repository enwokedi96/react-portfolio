import React from "react";
// import projects from "src/projects.json"
import ProjectCard from "../projectCard";
import projects from "../projectsList.json";

// ProjectCard (...project)
// <ProjectCard {...project}/>
function AllProjects(){
    let list = projects.map((project) => <ProjectCard {...project}/> ) 
    return (
        <div>
            {list}
        </div>
    );
}

export default AllProjects;
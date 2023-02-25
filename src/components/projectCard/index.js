import React from "react";
import "./style.css";

// <Link to={`/project/${props.id}`}>

function ProjectCard(props){
    return (  
        <div className="col-4 my-3">
        <div className="card card-image py-3" style={{ backgroundImage: `url(${props.image})`}}>
            {/* <div className="img-container">
                <img alt={props.name} src={props.image} />
            </div> */}
            <div className="content">
                <h4 className="text-justify text-center">{props.name}</h4>
                <div className="text-center text-black">
                    <a href={props.gitURL}> View Deployment</a>
                </div>
              <ul>
                <li>
                    <strong>Type:</strong> {props.type} 
                </li>
                <li className="text-justify">
                    <strong>Description:</strong> {props.description}
                </li>
              </ul>
            </div>
        </div>
        </div>    
    );
}

export default ProjectCard;
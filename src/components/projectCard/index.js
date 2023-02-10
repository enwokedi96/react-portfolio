import React from "react";
import { Link } from "react-router-dom"
import "./style.css";

// <Link to={`/project/${props.id}`}>

function ProjectCard(props){
    return (      
        <div className="card card-image p-2" style={{ backgroundImage: `url(${props.image})`}}>
            {/* <div className="img-container">
                <img alt={props.name} src={props.image} />
            </div> */}
            <div className="content">
              <ul>
                <li>
                    <strong>Name:</strong> {props.name} 
                </li>
                <li>
                    <strong>Type:</strong> {props.type} 
                </li>
                <li>
                    <strong>Description:</strong> {props.description}
                </li>
              </ul>
            </div>
            <div>
                <a href={props.gitURL}> View Deployment</a>
            </div>
        </div>
    );
}

export default ProjectCard;
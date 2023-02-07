import React from "react";
import { Link } from "react-router-dom"

function projectCard(props){
    return (
        <div className="card">
            <div className="img-container">
                <img alt={props.name} src={props.image} />
            </div>
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
                <a target="_blank" href={props.gitURL}> View Deployment</a>
            </div>
        </div>
    );
}
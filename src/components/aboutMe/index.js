import React from "react";
import "./style.css";

function AboutMe(){

    return (
        <div className="container mt-3">
            <div className="row text-justify">
                <div className="col-sm-12 col-md-3 col-lg-3"><h3>About Me</h3></div>
                <div className="col-md-12 col-md-9 col-lg-9">
                    <p>
                        Dedicated individual equipped with bachelor’s degree in mechatronics and hands-on experience providing support in project management and completion. Sound knowledge and 
                        exposure of electronic circuitry and analogue system design along with various programming paradigms. A few projects untertaken include CAD designs for buildings including 
                        water supply and waste disposal piping systems, supervised classification AI and unsupervised  AI for anomaly detection, and most currently, frontend development. Excellent communicator with proven 
                        history of rapport building across multi-disciplinary functions. Skilled problem-solver and programmer, loves AI/ML and aiming to further develop myself in this post-research.
                    </p></div>
                <div className="row">
                <div className="offset-lg-4 offset-md-4 col-sm-12 col-md-9 col-lg-9 text-start">
                    Some of my hobbies include: </div>
                <div className="offset-lg-4 offset-md-4 col-sm-12 col-md-9 col-lg-9 text-start">
                    <div className="hobby-images">
                        <img className="circle" src={"/images/hobby-fantasy.png"} alt="novels" />
                        <p className="caption">fantasy novels</p> 
                    </div>
                    <div className="hobby-images">
                        <img className="circle" src={"/images/hobby-anime-3.png"} alt="manga-anime" /> 
                        <p className="caption">manga and anime</p> 
                    </div>
                    <div className="hobby-images">
                        <img className="circle" src={"/images/02-portfolio-2.jpg"} alt="coding" /> 
                        <p className="caption">programming</p> 
                    </div>
                    <div className="hobby-images">
                        <img className="circle" src={"/images/hobby-gaming.png"} alt="retro-gaming" /> 
                        <p className="caption">occasional gaming</p> 
                    </div>
                    </div>
                </div>
                </div>
            </div>
    );
}

export default AboutMe;

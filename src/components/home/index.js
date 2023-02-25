import "./index.css";
import React from 'react'

function Home(props) {

  return (
        <div className="carousel-item d-block w-100" style={{backgroundColor:props.color}}>
            <h2 className="display-4 text-dark"><strong>I am a </strong></h2>
            <h2><span className="display-3 text-dark">{props.designation}</span></h2>
            <img alt="pic" src="./images/profile-img-no-bg.png" id={props.id} className="move-up"/>
        </div>
        );
        }

export default Home;


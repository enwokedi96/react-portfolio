import "./style.css";
import React from 'react'

function Home() {

  return (
    <div id="hero">
            <div className="jumbotron jumbotron-fluid" id="bg-clr">
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-sm-12 col-md-6 col-lg-5">
                            <img alt="pic" src="./images/profile-img-no-bg.png" className="img-fluid"></img>
                        </div>
                        <div className="col-sm-12 col-md-1 col-lg-1"></div>
                        <div className="col-sm-12 col-md-5 col-lg-6">
                            <h2 className="display-4 text-light"><strong>I am a </strong></h2>
                            <h2><span className="display-4 text-dark"></span></h2>
                        </div>
                    </div>
                </div>
              </div>
        </div>
  );
}

export default Home;


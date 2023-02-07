import React from "react";
import "./style.css";

function Home() {
  return (
    <div id="hero">
            <div class="jumbotron jumbotron-fluid" id="bg-clr">
                <div class="container">
                    <div class="row justify-content-center align-items-center">
                        <div class="col-sm-12 col-md-6 col-lg-5">
                            <img src="./assets/images/profile-img-no-bg.png" style="opacity: 0.65;" class="img-fluid"></img>
                        </div>
                        <div class="col-sm-12 col-md-1 col-lg-1"></div>
                        <div class="col-sm-12 col-md-5 col-lg-6">
                            <h2 class="display-4 text-light"><strong>I am a </strong></h2>
                            <h2><span class="display-4 text-dark"></span></h2>
                        </div>
                    </div>
                </div>
              </div>
        </div>
  );
}

export default Home;


import React from "react";
import "./style.css";

function projects(){
    return (
        <div id="works">
            <div class="container">
                <div class="row align-items-center vert-line">
                    <div class="col-sm-12 col-md-3 col-lg-3">
                        <h3>Coding projects</h3>
                    </div>
                    <div class="col-sm-12 col-md-9 col-lg-9 align-items-center" id="travelCalifornia">
                                <a class="invisibleLink" target="_blank" href="https://enwokedi96.github.io/activity-travelCalifornia/">
                                    <div class="code-box">
                                      <span class="text-dark"> Travel Agency (working with Bootstrap) </span>
                                    </div>
                                </a>
                            </div>                 
                    </div>
                <div class="row align-items-center vert-line">
                    <div class="col-sm-12 col-md-3 col-lg-3 align-items-center"></div>
                    <div class="col-sm-12 col-md-5 col-lg-5 align-items-center"  id="init-portfolio">
                        <a class="invisibleLink" target="_blank" href="https://enwokedi96.github.io/enwokedi-s_portfolio/">
                            <div class="code-box">
                              <span class="text-dark"> Initial Portfolio (HTML and CSS only) </span>
                            </div>
                        </a>                    
                    </div>
                
                    <div class="col-sm-12 col-md-4 col-lg-4 align-items-center" id="refactor">
                        <a class="invisibleLink" target="_blank" href="https://enwokedi96.github.io/horiseon_services/">
                            <div class="code-box">
                              <span class="text-dark"> Refactoring Code </span>
                            </div>
                        </a>                    
                    </div>

                </div> 

                <div class="row align-items-center vert-line">
                        <div class="col-sm-12 col-md-3 col-lg-3 align-items-center"></div>
                        <div class="col-sm-12 col-md-6 col-lg-4 align-items-center"  id="rocknroll">
                            <a class="invisibleLink" target="_blank" href="https://enwokedi96.github.io/activity-bootstrap/">
                                <div class="code-box">
                                  <span class="text-dark"> Initial Bootstrap </span>
                                </div>
                            </a>                    
                        </div>

                    <div class="col-sm-12 col-md-3 col-lg-5 align-items-center" id="bio">
                        <a class="invisibleLink" target="_blank" href="https://enwokedi96.github.io/basic_bio/"> 
                            <div class="code-box">
                              <span class="text-dark"> First Biopage </span>
                            </div>
                        </a>                    
                    </div>
                </div>
            </div>

        </div>
    );
}
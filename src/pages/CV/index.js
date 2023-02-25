import React from "react";
import "./index.css"

function CV(){
  
    return (
    <div>
        <div class="vert-line" id="cv-title">
            <h2 className="d-flex justify-content-center">Curriculum Vitae</h2>
            <p className="d-flex justify-content-center">Scroll within container below to read CV.</p>
            </div>
            <div class="page-section m-3 d-flex justify-content-center" id="cv">
            
            <iframe width={"50%"} height={"500px"} src="https://docs.google.com/document/d/e/2PACX-1vSEd7otKu3gfNEdeSNwi7KHpgbYDWkiMNvf2HswA66n-NmlYlwpztliu0f7tGBb8WdqzT8avLVCeHAt/pub?embedded=true"></iframe>
            </div>
    </div>
    )
}

export default CV;
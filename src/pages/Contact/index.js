import React from "react";
import "./index.css"

function Contact(){

    return (
        <div className="mt-5 p-4">
        <div class="vert-line" id="contact-title"><h2>Contact Me</h2></div>
        <div class="page-section" id="contact">
          <figure class="icons">
            <img src="/images/icons/icons8-facebook-500.png" alt="fb-by-icons8"/> 
            <figcaption class="caption">israe****</figcaption> 
          </figure>
          <figure class="icons">
            <img src="/images/icons/icons8-instagram-500.png" alt="ig-by-icons8"/>
            <figcaption class="caption">isra***</figcaption> 
          </figure>
          <figure class="icons">
            <img src="/images/icons/icons8-mail-500.png" alt="mail-by-icons8"/>
            <figcaption class="caption">israel***@gmail.com</figcaption> 
          </figure>
          <figure class="icons">
            <img src="/images/icons/icons8-twitter-500.png" alt="tw-by-icons8"/>
            <figcaption class="caption">isrl***</figcaption> 
          </figure>
          <figure class="icons">
            <img src="/images/icons/icons8-telephone-handset-94.png" alt="tp-by-icons8"/>
            <figcaption class="caption">(+44) 075 383* ****</figcaption> 
          </figure>
          <figure class="icons">
            <img src="/images/icons/icons8-github-500.png" alt="git-by-icons8"/>
            <figcaption class="caption"><a href="https://github.com/enwokedi96">enwokedi96</a></figcaption> 
          </figure>
        </div>
        </div>
    )
}

export default Contact;
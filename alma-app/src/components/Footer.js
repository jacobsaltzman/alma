import React from "react";
import { SocialIcon } from "react-social-icons";

//Credit to
//https://www.npmjs.com/package/react-social-icons 
//for the social media icon package

function Footer(){

  return(
    <section id="footer">
      <div id="contact-us">
           <h4>Contact</h4>
            <a href="mailto:info@almacider.com">info@almacider.com</a> 
            <br/>
            <a href="tel:425.312.5734">(425) 312-5734</a>
      </div>
      <div id="partners">
        
      </div>
      <div id="social-media">
      <h4>Connect</h4>
        <div className="icons">
        <SocialIcon url="https://www.facebook.com/almaciderco/" style={{ height: 8, width: 8 }}/>
        <div></div>
        <SocialIcon url="https://www.instagram.com/almaciderco/" style={{ height: 8, width: 8 }} />
        <div></div>
        <SocialIcon network="mailto" url="mailto:info@almacider.com" style={{ height: 8, width: 8 }} />
        <div></div>
        <SocialIcon url="https://www.youtube.com/watch?v=GPmrh-3Xdi0&ab_channel=CiderChat" style={{ height: 8, width: 8 }} />
        <div></div>
        <SocialIcon url="https://twitter.com/AlmaCider" style={{ height: 8, width: 8 }} />
        </div>
      </div>
    </section>
  )
}

export default Footer;
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
           <p>Mount Vernon, WA <br/>
            info@almacider.com <br/>
            425.312.5734</p>
      </div>
      <div id="partners">
        
      </div>
      <div id="social-media">
      <h4>Connect</h4>
        <div className="icons">
        <SocialIcon url="https://www.facebook.com/almaciderco/" style={{ height: 20, width: 20 }}/>
        <SocialIcon url="https://www.instagram.com/almaciderco/" style={{ height: 20, width: 20 }} />
        <SocialIcon network="mailto" url="info@almacider.com" style={{ height: 20, width: 20 }} />
        <SocialIcon url="https://www.youtube.com/watch?v=GPmrh-3Xdi0&ab_channel=CiderChat" style={{ height: 20, width: 20 }} />
        <SocialIcon url="https://twitter.com/AlmaCider" style={{ height: 20, width: 20 }} />
        </div>
      </div>
    </section>
  )
}

export default Footer;
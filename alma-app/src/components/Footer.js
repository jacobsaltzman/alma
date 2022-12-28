import React from "react";
import { SocialIcon } from "react-social-icons";

function Footer(){

  return(
    <section id="footer">
      <div id="contact-us">
        <p>   Contact us: <br/>
              Email: info@almacider.com<br/>
              Ph: 425.312.5734
        </p>
      </div>
      <div id="partners">
        
      </div>
      <div id="social-media">
        <SocialIcon url="https://www.facebook.com/almaciderco/" style={{ height: 25, width: 25 }}/>
        <SocialIcon url="https://www.instagram.com/almaciderco/" style={{ height: 25, width: 25 }} />
        <SocialIcon network="mailto" url="info@almacider.com" style={{ height: 25, width: 25 }} />
        <SocialIcon url="https://www.youtube.com/watch?v=GPmrh-3Xdi0&ab_channel=CiderChat" style={{ height: 25, width: 25 }} />
        <SocialIcon url="https://twitter.com/AlmaCider" style={{ height: 25, width: 25 }} />

      </div>
    </section>
  )
}

export default Footer;
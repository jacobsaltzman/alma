import React from "react";
import { SocialIcon } from "react-social-icons";



//Credit to
//https://www.npmjs.com/package/react-social-icons 
//for the social media icon package

function Footer({asso, asso2, asso3, asso4}){

  return(
    <section id="footer">
      <div id="age-gate-p">
      <p>Note: Our ciders contain alcohol. You must be 21 or older to purchase Alma Cider.</p>
      </div>
      <div id="associations-div">
      <img className="asso-img" alt="Cider Institute of North America" src={asso4}></img>
        <img className="asso-img" alt="Certified Pommelier" src={asso}></img>
        <img className="asso-img" alt="NW Cider Association" src={asso2}></img>
        <img className="asso-img" id="ACA" alt="American Cider Association" src={asso3}></img>
      </div>

      <div id="social-media">
      <h4> CONNECT </h4>
        <div className="icons">
        <SocialIcon className="icon" url="https://www.facebook.com/almaciderco/" style={{ height: 8, width: 8 }}/>
        <div></div>
        <SocialIcon className="icon" url="https://www.instagram.com/almaciderco/" style={{ height: 8, width: 8 }} />
        <div></div>
        <SocialIcon className="icon" network="mailto" url="mailto:info@almacider.com" style={{ height: 8, width: 8 }} />
        <div></div>
        <SocialIcon className="icon" url="https://www.youtube.com/watch?v=GPmrh-3Xdi0&ab_channel=CiderChat" style={{ height: 8, width: 8 }} />
        <div></div>
        </div>
      </div>

      <div id="contact-us">
           <h4> CONTACT </h4>
           <br/>
            <a href="mailto:info@almacider.com">info@almacider.com</a> 
            <br/>
            <a href="tel:425.312.5734">(425) 312-5734</a>
      </div>
      <div id="built-by">
        <div>
        <p>Website By:</p>
          <a href="https://www.linkedin.com/in/jacob-saltzman/">Jacob Saltzman</a>
        </div>
      </div>
    </section>
  )
}

export default Footer;
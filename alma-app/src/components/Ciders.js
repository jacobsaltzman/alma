import React from "react";
import AwardSlides from "./AwardSlideShow";



function Ciders({award, award2, award3}){


  return(
    <div id="ciders-component">

      <h3>Ciders</h3>
      <div className="cider-list">
        <div className="cider-list-items">
          <h5 className="cider-name">Cider Name</h5>
          <p className="flavors">flavor/style in italics</p>
          <p className="cider-award-year">*awards and year of win</p>
        </div>
        <div className="cider-list-items">
          <h5 className="cider-name">Cider Name</h5>
          <p className="flavors">flavor/style in italics</p>
          <p className="cider-award-year">*awards and year of win</p>
        </div>
        <div className="cider-list-items">
          <h5 className="cider-name">Cider Name</h5>
          <p className="flavors">flavor/style in italics</p>
          <p className="cider-award-year">*awards and year of win</p>
        </div>
        <div className="cider-list-items">
          <h5 className="cider-name">Cider Name</h5>
          <p className="flavors">flavor/style in italics</p>
          <p className="cider-award-year">*awards and year of win</p>
        </div>
      </div>
    
    <div id="awards-section">
      <h3>*Awards</h3>
      <AwardSlides/>
    </div>
    <div id="awards-images">
      <img alt="rose award" src={award}></img>
      <img alt="hopped award" src={award3}></img>
      <img alt="wood award" src={award2}></img>
      
    </div>

    <div id="awards-links">
      <a href="https://glintcap.org/results/commercial/medalists/alma-cider/">GLINTCAP</a>
    </div>
    </div>
  )

}

export default Ciders;
import React from "react";
import AwardSlides from "./AwardSlideShow";

function Ciders(){


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

    </div>
  )

}

export default Ciders;
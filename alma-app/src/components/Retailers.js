import React from "react";

function Retailers(){


  return(
    <div id="retailers">
      <h2>Brick-and-Mortar Locations</h2>
      <div id="alma-retailers-p">
      <p>Find Alma Cider at locations throughout Washington in Mount Vernon, Anacortes, La Conner, Conway, Bellingham, Everett, Lynnwood, Lake Stevens, Bothell, Seattle, Tacoma, and Vancouver.</p>
      </div>
      <h5>Find a store near you:</h5>
      <div id="alma-map-div">
      <iframe id="alma-map" title="alma-retailers" src="https://www.google.com/maps/d/embed?mid=1D40zxvOPcTCTn41RJ-IO-HuUwdOpDZk&ehbc=2E312F" width="640" height="480"></iframe>
      </div>
      <div id="online-retailers">
      <h2>Shipping also available through online retailers  </h2>
      <div className="online-retailers">
      <h3>Press Then Press</h3>
        <p>the online retailer of rare, independent, local and craft ciders. Beautifully curated selection of domestic and imported ciders on an easy to navigate website. Delivered or shipped from Seattle!</p>
        <h6>https://www.pressthenpress.com/collections/alma-cider</h6>
        <a href="https://www.pressthenpress.com/collections/alma-cider">Visit Site</a>
      </div>
      <div className="online-retailers">
        <h3>Compass Wines</h3>
        
        <p> located in Anacortes, Washington, also offers a selection of rare and hard to find wines from Washington, including our Alma Quince Cider available for shipping! <br/> </p>
        <h6>https://www.compasswines.com/cider-28/</h6>
        <a href="https://www.compasswines.com/cider-28/">Visit Site</a>
      </div>
      </div>
    </div>
  )

}

export default Retailers;
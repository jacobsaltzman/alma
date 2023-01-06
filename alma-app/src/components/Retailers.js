import React from "react";

function Retailers(){


  return(
    <div id="retailers">
      <p>Find Alma Cider at locations throughout Washington in Mount Vernon, Anacortes, La Conner, Conway, Bellingham, Everett, Lynnwood, Lake Stevens, Bothell, Seattle, Tacoma, and Vancouver.</p>
      <iframe id="alma-map" title="alma-retailers" src="https://www.google.com/maps/d/embed?mid=1D40zxvOPcTCTn41RJ-IO-HuUwdOpDZk&ehbc=2E312F" width="640" height="480"></iframe>
      
      <div id="online-retailers">
      <h3>Also available through online retailers:  </h3>
        <a href="https://www.pressthenpress.com/collections/alma-cider">Press Then Press</a>
        <p>The online retailer of rare, independent, local and craft ciders. Beautifully curated selection of domestic and imported ciders on an easy to navigate website. Delivered or shipped from Seattle!</p>

        <a href="https://www.compasswines.com/cider-28/">Compass Wines</a>
        <p> Compass Wines in Anacortes, Washington also offers a selection of rare and hard to find wines from Washington, including our Alma Quince Cider available for shipping! <br/> </p>

      </div>
    </div>
  )

}

export default Retailers;
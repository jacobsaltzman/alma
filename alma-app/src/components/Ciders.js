import React from "react";
import AwardSlides from "./AwardSlideShow";



function Ciders({award, award2, award3}){


  return(
    <div id="ciders-component">

      <h3>Ciders</h3>
      <div className="cider-list">
        <div className="cider-list-items">
          <h4 className="cider-name" id="Alma-Dry">Alma Dry</h4>
          <p className="flavors">Locally grown Apples from the valley give this cider a fruit forward flavor with
brilliant color and aromas ending with a refreshingly crisp clean finish. Enjoyable
on its own or with meal, our Dry Cider is sure to please. ABV 7%</p>
          <p className="cider-award-silver">-<a href="https://glintcap.org/results/commercial/medalists/alma-cider/">GLINTCAP</a>(Great Lakes International Cider and Perry competition) Award
winner- Silver Medal 2021</p>
        </div>
        <div className="cider-list-items">
          <h4 className="cider-name" id="Alma-Semi-Sweet">Alma Semi-Sweet</h4>
          <p className="flavors">Locally grown Apples and Pears from the valley provide sharp apple flavors
which are offset by the slight sweetness of pear, honey notes abound and
smooth out the cider in a mellow finish. Not overly sweet, just right for the palate.
Everyone can enjoy this Semi-sweet cider, as it is the intersection of dry and
sweet. ABV 7%</p>
          <p className="cider-award-silver">-<a href="https://glintcap.org/results/commercial/medalists/alma-cider/">GLINTCAP</a>(Great Lakes International Cider and Perry competition) Award
winner- Silver Medal 2021</p>
        </div>
        <div className="cider-list-items">
          <h4 className="cider-name">Alma Hopped</h4>
          <p className="flavors">Hand picked, locally grown Apples from the valley give rise to crisp apple
combined with a aromatic botanicals and hints of citrus with a subtle smooth hop
presence that lend to a balanced and refreshing taste that can be enjoyed on a
patio in the summer or any time of year! ABV 7%</p>
          <p className="cider-award-gold">-Sip Magazine, “Best of the NW” Double Gold Medal- 2021</p>
          <p className="cider-award-bronze">-<a href="https://glintcap.org/results/commercial/medalists/alma-cider/">GLINTCAP</a>(Great Lakes International Cider and Perry competition) Award
winner- Bronze 2021</p>

        </div>
        <div className="cider-list-items">
          <h4 className="cider-name">Alma Rosè</h4>
          <p className="flavors">Local "Airlie Redflesh" apples from nearby Bellewood Farm have been slowly
fermented to produce a tart and colorful cider. This Redflesh apple produces
juice with a natural Pink hue. Aged 7 months, minimally filtered, and lightly
carbonated. Tastes like summer in a glass. Notes of sour apple, small red
berries, straw, and dried fruit combine to produce a wonderfully complex Single
Varietal (SV) cider with medium body and a lasting finish.</p>
          <p className="cider-award-platinum">-Cider Craft Magazine’s “Cidercraft awards” Platinum Medal- 2020</p>
          <p className="cider-award-silver">-<a href="https://glintcap.org/results/commercial/medalists/alma-cider/">GLINTCAP</a>(Great Lakes International Cider and Perry competition) Award
winner- Silver Medal 2021</p>
          <p className="cider-award-gold">-Sip Magazine, “Best of the NW” Gold Medal- 2022</p>

        </div>
        <div className="cider-list-items">
          <h4 className="cider-name">Alma Wood Aged</h4>
          <p className="flavors">Valley grown "Gravenstein" apples were picked when ripe, pressed fresh, and
fermented slowly to produce a cider that is crisp, tart, and bright just like the
apple. The cider was aged 7 months in freshly emptied Bourbon barrels. The
result is a beautiful Single Varietal (SV) that offers oak, hints of vanilla, caramel,
and bourbon with a long finish. Minimally filtered, light carbonation.</p>
          <p className="cider-award-best">-<a href="https://glintcap.org/results/commercial/medalists/alma-cider/">GLINTCAP</a>(Great Lakes International Cider and Perry competition) Award
winner- Best in Class 2021</p>
          <p className="cider-award-gold">-<a href="https://glintcap.org/results/commercial/medalists/alma-cider/">GLINTCAP</a>(Great Lakes International Cider and Perry competition) Award
winner- Gold Medal 2021</p>
          <p className="cider-award-best">-Sip magazine, “Best of the NW” Judges Pick- 2022</p>

        </div>
        <div className="cider-list-items">
          <h4 className="cider-name">Alma Perry</h4>
          <p className="flavors">Locally grown Perry pears from the valley give this quite dry Perry its fruit forward
flavor of the orchard, crisp and bright with medium body and a lingering finish.
Minimally filtered. Sparkling. Beautiful tiny bubbles dance in the glass. A
collaboration with friend and fellow cider maker Burro Loco.</p>
          <p className="cider-award-best">-Sip magazine, “Best of the NW” Gold Medal- 2022</p>
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
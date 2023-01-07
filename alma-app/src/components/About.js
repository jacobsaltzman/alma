import React from "react";
import { Gallery } from "react-grid-gallery";


function About({almaMap, images}){

  return (
    <div className="about-alma-div">
    <h1>The origin of Alma</h1>
    <div id="background-1"></div>
    <p className="about-alma-p">Apples are native to Kazakhstan. If one were to hike through the hills and forests of Kazakhstan they would be among the native trees and be able to taste the wild apples that have grown in the region for millennia.
    </p>
    <div id="background-10"></div>
    <h2>Why Alma?</h2>
    <p className="about-alma-p">"Alma" is the original word for the apple. In Spanish, "Alma" means soul, and in Latin, it means nurturing spirit. To us <b><em>Alma</em></b> means we put our soul and our spirit into knowing and respecting the land, growing the best possible fruit, and making the highest quality <b>cider</b>.
    </p>
    <div id="background-2"></div>
    <h2>Who is Alma?</h2>
    <p className="about-alma-p"> <b><em>Y. Dave</em></b> and <b><em>Heather Klawer</em></b> are both Registered Nurses. Heather has cared for neonates as a NICU nurse at Providence in Everett, WA for nearly 20 years. Dave has been supporting and caring for mothers, newborns, and their families since 2005. He works in Labor and Delivery, also at Providence in Everett. Heather and Dave live in the Skagit Valley where they raise their children. In addition to raising a family, working in healthcare, advocating for women’s and neonatal health, and growing community Dave and Heather Klawer tend to their young orchard and make cider. 
    </p>
    <div id="grid-gallery">
    <Gallery images={images} />
    </div>
    
    <div id="background-6"></div>
    <h2>What does Alma mean to us?</h2>
    <p className="about-alma-p">
    Alma Cider was <b><em>born from a dream</em></b> to spend the days working outside in nature and to grow the highest quality cider apple crop possible. We began grafting our own cider apple trees a few years back with the intention of selling the highly sought after fruit to cideries with in the region. Making cider was a hobby and friends often said, “This is as good as the stuff in the stores”. Our batches grew in volume year after year. We incorporated more focus where it was needed through scientific methodology and we also allowed for creativity and playfulness with experimentation.
    </p>
    <div id="background-3"></div>
  
    <h2>Where is Alma?</h2>
    <p className="about-alma-p">Alma Cider is a family operated orchard and boutique fermented cider company in <b><em>Mount Vernon, WA</em></b>. Here on the westside of the Cascade mountain range in Washington, we are fortunate enough to live in a microclimate that is extremely well suited for growing cider fruit. Combined with rich native soils formed by our resident volcanoes, glaciers, and rivers we can deliver the gold standard for cider fruit and hope to be able to make world class cider.
     <div><img id="alma-map" alt="alma map" src={almaMap}></img></div>
    </p>
    <div id="background-4"></div>
    <h2>When did Alma begin?</h2>
    <p className="about-alma-p">
    In <b><em>2019</em></b>, our first commercial batch of cider was made. We make all of our ciders using only locally grown, hand picked fruit. We are so excited to be able to share our Cider with you. Cheers! 
    </p>
    <div id="background-5"></div>
    <h5>We hope you enjoy Alma Cider! As it is truly a labor of love.</h5>
    </div>
  )
}

export default About;
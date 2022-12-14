import React from "react";

function Services({bsLogo}){

  return (
    <div>

<h1 id="services-h1">Bitters & Sharps Orchard</h1>
    <div id="services-background1"></div>
    
    <p className="services-p">We provide custom grafting, orchard planning, and consultation services. Apple sales and scion wood sales are also available.
We source certified virus free rootstock regionally, from a third generation family rootstock farm. Our scion wood is collected from our own orchard as well as from local orchard partners. 
    </p>
    <div id="services-background2"></div>

    <p className="services-p">In winter, when the fruit trees are dormant, we are busy grafting. We take the time to select rootsock and scion pairs and then graft them by hand. The union is wrapped and sealed with care and trees are ready to plant in early spring. We typically graft about 1,000 trees per season and are happy to graft a few trees for your backyard or enough to fill your orchard.</p>

    <div id="services-background3"></div>
    <p className="services-p">
    Information on specific cultivars can be provided upon request. <a href="mailto:info@almacider.com">&#128232;</a> Send us an email with your objectives and we can work with you to create a plan to best meet your needs. We also offer full orchard consultations services from orchard planning, installation, maintenance, to integrated pest management (IPM) solutions and spray schedules for organic and conventional orcharding.
    </p>
    
    <div id="bottom-services-div">
    <div id="services-background4">
    </div>
    <div id="bs-logo"><img alt="bitter and sharps logo" src={bsLogo}></img></div>
    </div>
    </div>
  )
}

export default Services;